

const BASE_URL='https://react-fast-pizza-api.onrender.com/api'

export async function getMenu(){
    const res=await fetch(`${BASE_URL}/menu`)
    const {data}=await res.json()
    if(!res.ok) throw Error('Failed getting Menu')
    return data;
}

export async function getOrder(id){
    const res=await fetch(`${BASE_URL}/order/${id}`)

    if(!res.ok) throw Error(`Could Not Find order ${id}`)

    const {data}=await res.json()

    return data;
}

export async function createOrder(newOrder){
    try{
    const res=await fetch(`${BASE_URL}/order`,{
        method:'POST',
        body:JSON.stringify(newOrder),
        headers:{
            'Content-Type':'application/json'
        }
  })

  if(!res.ok) throw Error('Something wrong')

    const {data}=await res.json()
    return data;
 } catch(err){
   throw Error('failed to Create Order')
}
}


export async function updateOrder(id,updateObj){
    try{
      const res=await fetch(`${BASE_URL}/order/${id}`,{
        method:'PATCH',
        body:JSON.stringify(updateObj),
        headers:{
            'Content-Type':'application/json'
        }
      })
      if(!res.ok) throw Error('Error occur')
      const data=await res.json()

      return data;

    }catch(err){
      throw Error('Failed to update your order')
    }
}