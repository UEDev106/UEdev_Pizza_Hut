import { useState } from "react";

export  function useGeolocation(defaultPosition = null){
    const [position,setPosition]=useState(defaultPosition)
    const [error,setError]=useState(null)
    const [isLoading,setIsLoading]=useState(false)

    function getPosition(){
        if(!navigator.geolocation)
           return setError('Your Browser does not Support geolocation')
        
       setIsLoading(true);
       navigator.geolocation.getCurrentPosition(
        (pos)=>{
            setPosition({
            lat:pos.coords.latitude,
            lng:pos.coords.longitude,
        });
        setIsLoading(false)
        },
        (error)=>{
            setError(error.message)
            isLoading(false)
        }
       );
       
    }
    return {isLoading,error,position,getPosition}
}

export async function getAddress({latitude,longitude}){
   const res=await fetch(`https://api-bdc.net/data/reverse-geocode?latitude=${latitude}&longitude=${longitude}&localityLanguage=en&key=bdc_3bffb53b7a43469fb4d82cf73b99f9be`)
   if(!res.ok) throw Error('Failed Geting address')
   const data=await res.json()
   return data;
}