import { Link, useNavigate } from "react-router-dom"

function LinkButton({children,to}) {
    const navigate=useNavigate()
   const className='hover:bg-sky-500 rounded-sm text-blue-500 hover:underline'

    if(to === '-1'){
        return <button className={className} onClick={()=>navigate(-1)}>&larr; Go back</button>
    }

    return (
        <Link className={className} to={to}>
            {children}
        </Link>
    )
}

export default LinkButton
