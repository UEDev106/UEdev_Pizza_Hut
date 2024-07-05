//import formatCurrency from '/'

import { formatCurrency } from "../../utils/helpers";
import Button from '../../ui/Button'
import { useDispatch, useSelector } from "react-redux";
import { addItems, deleteCartQuatityById } from "../cart/CartSlice";
import DeleteCart from "../cart/DeleteCart";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItems({pizza}) {

    const {id,name,unitPrice, ingredients, soldOut, imageUrl}=pizza;
    const dispatch=useDispatch()
    const currentQuantity=useSelector(deleteCartQuatityById(id))
    const isInCart=currentQuantity > 0

    function handleAddItem(){
      const  newItem={
            pizzaId:id,
            name,
            unitPrice,
            quantity:1,
            totalPrice:unitPrice * 1,
        }
      dispatch(addItems(newItem))
    }

    return (
        <li className="flex gap-4 py-2">
            <img className={`h-24 ${soldOut ? 'opacity-70 grayscale' :''}`} src={imageUrl} alt={name} />
            <div className="flex flex-grow flex-col">
                <p>{name}</p>
                <p className="text-sm capitalize italic text-stone-500">{ingredients.join(', ')}</p>
                <div className="mt-auto flex items-center justify-between">
                    {!soldOut ? <p className="text-sm">{formatCurrency( unitPrice)}</p> : <p className="text-sm font-medium uppercase text-stone-500">Sold Out</p>}
                  {!soldOut && !isInCart &&  <Button type='primary' onClick={handleAddItem} className='ml-34'>Add to cart</Button> }
                 
                {isInCart && <div className="flex items-center gap-3 md:gap-8" > 
                  <UpdateItemQuantity pizzaId={id} />
                   <DeleteCart pizzaId={id}/> 
                   </div>}
                </div>
            </div>
        </li>
    )
}

export default MenuItems
