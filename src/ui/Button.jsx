import { Link } from "react-router-dom"

function Button({children,disabled,to,type,onClick}) {
  
     const styles={
       primary:'bg-sky-400 tracking-wide rounded-full text-stone-800 py-2 px-3 font-semibold duration-500 inline-block uppercase focus:bg-sky-300 focus:ring focus:outline-none focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:py-4 md:px-6',
       base:'bg-stone-200 tracking-wide rounded-full text-stone-800 py-2 px-3 font-semibold duration-500 inline-block uppercase focus:bg-stone-400 focus:ring focus:outline-none focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed md:py-4 md:px-6',
       round:'bg-sky-400 tracking-wide rounded-full text-stone-800 py-1 px-2.1 text-xs font-semibold duration-500 inline-block uppercase focus:bg-sky-300 focus:ring focus:outline-none focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:py-2.5 md:px-3.5'
     }
     
     if(to)
      return <Link className={styles[type]} to={to}>{children}</Link>

     if( onClick ) 
       return ( <button className={styles[type]} onClick={onClick} disabled={disabled} >{children}</button> )


    return (
        <button className={styles[type]} disabled={disabled} >{children}</button>
      )
}

export default Button
