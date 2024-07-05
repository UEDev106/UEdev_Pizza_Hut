import { useDispatch, useSelector } from "react-redux"
import Button from "../../ui/Button"
import { decItemQuantity, deleteCartQuatityById, increaseItemQuantity } from "./CartSlice"

function UpdateItemQuantity({pizzaId}) {
    const dispatch=useDispatch()
    const currentQuantity=useSelector(deleteCartQuatityById(pizzaId))
    return (
        <div className="flex gap-1 items-center md:gap-6">
            <Button type='round' onClick={()=>dispatch(increaseItemQuantity(pizzaId))} >+</Button>
             {currentQuantity}
            <Button type='round' onClick={()=>dispatch(decItemQuantity(pizzaId))}>-</Button>
        </div>
    )
}

export default UpdateItemQuantity
