import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { deleteItems } from "./CartSlice"

function DeleteCart({pizzaId}) {
    const dispatch=useDispatch()
    return (
        <Button type='primary' onClick={()=>dispatch(deleteItems(pizzaId))}>Delete</Button>
    )
}

export default DeleteCart
