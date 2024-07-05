//import CreateUser from "./features/user/CreateUser"
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './ui/Home'
import Menu,{loader as menuLoader} from './features/menu/Menu'
import CreateOrder,{action as createOrderAction} from './features/order/CreateOrder'
import AppLayout from './ui/AppLayout'
import Cart from './features/cart/Cart'
import Error from './ui/Error'
import Order,{loader as orderLoader} from './features/order/Order'
import {action as updateorder} from './features/order/UpdateOrder'

const router=createBrowserRouter([
  {
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/menu',
        element:<Menu/>,
        loader:menuLoader,
        errorElement:<Error/>
      },
      {
        path:'/order/new',
        element:<CreateOrder/>,
        action:createOrderAction,
        errorElement:<Error/>
      },
      {
       path:'order/:orderId',
       element:<Order/>,
       loader:orderLoader,
       errorElement:<Error/>,
       action:updateorder,
      },
      {
        path:'/cart',
        element:<Cart/>
      }
    ]
  }
])

function App() {
    
  return(
  <RouterProvider router={router} />
  )
}

export default App
