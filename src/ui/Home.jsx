import { useSelector } from 'react-redux'
import CreateUser from '../features/user/CreateUser'
import Button from './Button'


function Home() {
  
    const username=useSelector(state=>state.user.username)

    return (
        <div className='mb-10 text-center  mt-4 text-stone-500 sm:my-16 text-sm md:text-base'>
            <h1 className="mb-8 text-cyan-500 font-semibold text-center text-4xl">
                The best Pizaa
               <br />
               Straight out of the oven, straight to you.
            </h1>
           {username === ' ' ? <CreateUser/> : <Button to='/menu' type='primary'>Start Ordering,{username}</Button>}
        </div>
    )
}

export default Home
