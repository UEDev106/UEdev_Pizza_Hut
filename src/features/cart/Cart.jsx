//import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button'
import LinkButton from '../../ui/LinkButton'
import CartItem from './CartItem';
import { clearItems, getCart } from './CartSlice';
import EmptyCart from './EmptyCart'

 
function Cart() {
  const username=useSelector(state=>state.user.username)

  const cart = useSelector(getCart)
  const dispatch=useDispatch()

  if(!cart.length) return <EmptyCart/>

    return (
        <div>
             <LinkButton to='/menu'>&larr; Back to Menu</LinkButton>
            <h2 className='mt-7 text-xl font-semibold'>Your Cart {username.toUpperCase()}</h2>
          
          <ul className='divide-y divide-stone-300'>
            {cart.map((item=><CartItem item={item} key={item.id}/>))}
          </ul>

            <div className='mt-7 space-x-4'>
                <Button to='/order/new' type='primary'>Ordered Pizzas</Button>
                <Button type='base' onClick={()=>dispatch(clearItems())}>Clear All Cart</Button>
            </div>
        </div>
    )
}

export default Cart
