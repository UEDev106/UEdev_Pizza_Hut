import { Outlet,useNavigation } from "react-router-dom"
import Header from "./Header"
import CartoverView from "../features/cart/CartoverView"
import Loader from "./Loader";
function AppLayout() {
    const navigation=useNavigation();
    const isLoading=navigation.state === 'loading'
    return (
        <div className="grid h-screen grid-rows-[auto_1fr_auto]">
            {isLoading && <Loader/>}

            <Header/>
            <div className="overflow-auto my-10">
            <main className="mx-auto max-w-3xl">
                <Outlet/>
            </main>
            </div>
            <CartoverView/>
        </div>
    )
}

export default AppLayout
