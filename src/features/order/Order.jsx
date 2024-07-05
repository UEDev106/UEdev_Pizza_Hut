// Test ID: IIDSAT

import { useFetcher, useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiResturant";
import {
    calMinutesLeft,
    formatCurrency,
    formatDate,
  } from "../../utils/helpers";
import OrderItem from "./OrderItems";
import { useEffect } from "react";
import UpdateOrder from "./UpdateOrder";
  
 
  

function Order() {
    const order=useLoaderData()
    const fetcher=useFetcher()

    useEffect(function(){
       if(!fetcher.data && fetcher.state === 'idle')
        fetcher.load('/menu')
    },[fetcher])
   
    const {
        id,
        status,
        priority,
        priorityPrice,
        orderPrice,
        estimatedDelivery,
        cart,
      } = order;
      const deliveryIn = calMinutesLeft(estimatedDelivery);
    return (
        <div className="space-y-8 px-4 py-6">
            <div className="flex items-center justify-between flex-wrap">
              <h2 className="text-xl font-semibold">
                 Order # {id} Status
              </h2>
              <div className="space-x-2">
                {priority && <span className="text-xs rounded-full bg-red-500 px-3 py-1 font-semibold tracking-wide uppercase text-red-50">Priority</span>}
                {<span className="text-xs rounded-full bg-green-500 px-3 py-1 font-semibold tracking-wide uppercase text-red-50">Order {status} </span>}
              </div>
            </div>
          <div className="flex items-center justify-between gap-2 py-6 px-4 bg-stone-300">
            <p className="font-medium">
                {deliveryIn >= 0 ? `Only ${calMinutesLeft(estimatedDelivery)} minutes left`:'Order has arrived'}
            </p>
            <p className="text-xs text-stone-500">(Estimated Delivery: {formatDate(estimatedDelivery)})</p>

            </div>

            <ul className="divide-y divide-stone-300 border-b border-t">
               {cart.map((item)=><OrderItem item={item} key={item.id} isLoadingIngredients={fetcher.state === 'loading'} ingredients={fetcher.data?.find((el)=>el.id === item.id)?.ingredients ?? []}/>)}
            </ul>

   
            <div className="space-y-2 bg-stone-200 px-6 py-5 ">
                <p className="text-xs text-stone-500">
                    Price Pizza: {formatCurrency(orderPrice)}
                </p>
                {priority && <p className="text-xs text-stone-500">Price Priority: {formatCurrency(priorityPrice)}</p>}
                <p className="font-bold">To pay on Delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
            </div>
          {!priority &&  <UpdateOrder order={order}/> }
        </div>
    )
}

export async function loader({params}){
    const order=await getOrder(params.orderId)
    return order;
}

export default Order
