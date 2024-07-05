import {Form, redirect, useActionData, useNavigation} from 'react-router-dom'
import { createOrder } from '../../services/apiResturant'
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { clearItems, getCart, getTotalPrice } from '../cart/CartSlice';
import store from '../../store'
import { formatCurrency } from '../../utils/helpers';
import { useState } from 'react';
import { fetchAddress } from '../user/UserSlice';


// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
      str
    );



      
function CreateOrder() {
    const navigation=useNavigation() 
    const isSubmitting=navigation.state === 'submitting'
    const dispatch=useDispatch()
    const formError=useActionData()
    const cart=useSelector(getCart);
    const [withPriority,setWithPriority]=useState(false)

    const {username,status:addressStatus,position,address,error}=useSelector(state=>state.user)

   const totalCartPrice=useSelector(getTotalPrice)
   const priority=withPriority ? totalCartPrice * 0.2 : 0;
   const totalPrice=totalCartPrice + priority

   const isLoading=addressStatus === 'loading'


    return (
        <div>
            <h2 className='py-3 px-6 text-xl font-semibold'>Do you want to confirm your Order? Let's go</h2>

            <Form method='POST'>
                <div className='mb-5 flex flex-col gap-2 sm:flex-row sm:items-center'>
                 <label className='sm:basis-40'>First Name</label>
                 <input className='input grow' defaultValue={username} type="text" name="customer" required />
                </div>
                 <div className='mb-5 flex flex-col gap-2 sm:flex-row sm:items-center'>
                   <label className='sm:basis-40'>Mobile Number</label>
                 <div className='grow'>
                    <input className='input w-full' type="tel" name="phone" required/>
                    {formError?.phone && <p className='mt-2 rounded-md bg-red-100 text-xs text-red-700'>{formError.phone}</p>}
                 </div>
                </div>
           
                <div className='relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center'>
                  <label className='sm:basis-40'>Address</label>
                  <div className='grow'>
                    <input className='input w-full' defaultValue={address} type="text" name="address" required />
                    {error && <p className='mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700'>{error}</p>}
                  </div>
                 {!position.latitude && !position.longitude && <span className='absolute right-[3px] z-50 top-[3px]'> <Button type='round' disabled={isLoading} onClick={(e)=>{
                    e.preventDefault()
                    dispatch(fetchAddress())
                    }}>get Position</Button> </span> }
                </div>
                <div className='mb-12 flex items-center gap-5'>
                    <input className='my-3 mx-2 h-6 w-6 accent-sky-400 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-sky-400' type="checkbox" value={withPriority} onClick={(e)=>setWithPriority(e.target.checked)}  name="priority" id="priority" />
                    <label htmlFor="priority">Want to you give order Priority</label>
                </div>
                <div>
                    <input type="hidden" name='cart' value={JSON.stringify(cart)} />
                    <input type="hidden" name='position' value={position.latitude && position.longitude ? `${position.latitude},${position.longitude}`: ''} />
                    <Button type='primary' disabled={isSubmitting || isLoading}>{isSubmitting ? 'Placing Order...' : `order now ${formatCurrency(totalPrice)}`}</Button>
                </div>
            </Form>
        </div>
    )
}



export async function action({request}){
    const formData=await request.formData()
    const data=Object.fromEntries(formData)
    const order={
        ...data,
        cart:JSON.parse(data.cart),
        priority:data.priority === 'true'
    }
    
    const errors={};
    if(!isValidPhone(order.phone)){
        errors.phone='Please give us your Correct phone Number,we must need it to contact with you'
    }

    if(Object.keys(errors) > 0) return errors; 

    const newOrder=await createOrder(order)
    store.dispatch(clearItems())
    return redirect(`/order/${newOrder.id}`)
}

export default CreateOrder
