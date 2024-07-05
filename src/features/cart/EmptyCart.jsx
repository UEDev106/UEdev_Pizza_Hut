//import {Link} from 'react-router-dom'
import LinkButton from '../../ui/LinkButton'

function EmptyCart() {
    return (
        <div className='py-3 px-4'>
            <LinkButton to='/menu'>&larr; back to cart</LinkButton>
            <p className='font-semibold mt-7 bg-stone-200 text-red-400'>Your Cart is Still Empty! Start adding some pizzas 😛</p>
        </div>
    )
}

export default EmptyCart
