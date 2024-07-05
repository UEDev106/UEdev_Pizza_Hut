export async function getAdress({latitude, longitude}){
     const res=await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`)
     if(!res.ok) throw  Error('not getting address')

     const data=await res.json()

   return data;
}