import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getTotalPrice, getTotalQuantity } from "./CartSlice"
import { formatCurrency } from "../../utils/helpers"

function CartoverView() {
    const totalQuantity=useSelector(getTotalQuantity)
    const TotalPrice=useSelector(getTotalPrice)
  
   if(!totalQuantity) return null;

    return (
        <div className="bg-stone-900 flex items-center justify-between text-stone-300 mt-30 uppercase px-4 py-4 sm:px-6">
            <p className="space-x-4 font-semibold sm:space-x-6 ">
                <span>{totalQuantity} Pizzas</span>
                <span>{formatCurrency(TotalPrice)}</span>
            </p>
            <Link to="/cart">Open cart &rarr;</Link>
        </div>
    )
}

export default CartoverView
