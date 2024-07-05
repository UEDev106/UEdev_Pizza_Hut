import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SearchOrder() {
    const [query,setQuery]=useState('')
    const navigate=useNavigate()

    
  function handleSubmit(e){
    e.preventDefault()
    if(!query) return;
    navigate(`order/${query}`)
    setQuery('')
  }

    return (
        <form onSubmit={handleSubmit}>
        <input type="text" className=" w-28 bg-sky-300 rounded-full py-2 px-4 text-sm placeholder:text-stone-800 uppercase duration-300 focus:outline-none focus:ring focus:ring-offset-2 focus:bg-sky-500 focus:opacity-50 sm:w-64" value={query} placeholder="Enter Order Id" onChange={(e)=>setQuery(e.target.value)} />
        </form>
    )
}

export default SearchOrder
