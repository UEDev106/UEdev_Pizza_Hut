import { useFetcher } from 'react-router-dom'
import Button from '../../ui/Button'
import { updateOrder } from '../../services/apiResturant'

function UpdateOrder({order}) {

    const fetcher = useFetcher()

    return (
        <fetcher.Form method='PATCH'>
        <Button type='primary' >Make Priority</Button>
        </fetcher.Form>
    )
}

export default UpdateOrder

export async function action({request,params}){
     const data={priority:true}
     updateOrder(params.orderId,data)
    return null;
}