import { useState } from "react"
import Button from "../../ui/Button"
//import { Link } from "react-router-dom"
//import { updateName } from "./UserSlice"
import {useDispatch} from 'react-redux'
import { updateName } from "./UserSlice"
import { useNavigate } from "react-router-dom"

function CreateUser() {
  const [userName,setUserName]=useState('')
  const dispatch=useDispatch();
  const navigate=useNavigate()
  
  function handleSubmit(e){
     e.preventDefault()

     if(!userName) return;

     dispatch(updateName(userName))
     navigate('/menu')
  }
    return (
        <form onSubmit={handleSubmit}>
            <p className="text-sm mb-4 text-stone-600 md:text-4xl ">👋 <strong>WelCome!</strong> Please start telling us your name: </p>
            <input type="text" className="input mb-6 w-72" placeholder="Enter full name" value={userName} onChange={(e)=>setUserName(e.target.value)} />
            <div>
             { userName !== '' &&  <Button type='primary'>Starting order</Button> }
            </div>
        </form>
    )
}

export default CreateUser
