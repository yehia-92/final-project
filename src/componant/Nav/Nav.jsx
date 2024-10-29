import React, { useContext } from 'react'
import Categories from './../Categories/Categories';
import { Link, NavLink } from 'react-router-dom';
import Prodect from './../Prodect/Prodect';
import { UserContext } from '../../Context/UserContext';

export default function Nav() {
  function singOut(){
    localStorage.removeItem("token")
    navigator("/login")
     
  }
   let {UserLogin,setUserLogin}=useContext(UserContext)   
  return (
   <>

<nav className="bg-slate-200 border-gray-200 fixed top-0 right-0 left-0">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
      <div className='flex items-center gap-5'>
      <Link to="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">Flowbite</span>
        </Link>
        {UserLogin!=null? <ul className='flex gap-2'>
        <li><NavLink to="">Home</NavLink></li>
          <li><NavLink to="cart">Cart</NavLink></li>
          <li><NavLink to="prodect">Prodects</NavLink></li>
          <li><NavLink to="categories">Categories</NavLink></li>
          <li><NavLink to="brand">Brand</NavLink></li>
          <li><NavLink to="washlist">WashList</NavLink></li>
        </ul> :null}
       
      </div>
      <div className="link flex gap-3 items-center">
      <div className="icon flex gap-3">
          <i className='fab fa-facebook'></i>
          <i className='fab fa-linkedin'></i>
          <i className='fab fa-youtube'></i>
          <i className='fab fa-tiktok'></i>
          <i className='fab fa-twitter'></i>
        </div>
        {UserLogin ==null?<>
          <div className=" items-center space-x-6 rtl:space-x-reverse">
            <Link to="login" className="text-sm  text-blue-600 hover:underline">Login</Link>
        </div>
        <div className=" items-center space-x-6 rtl:space-x-reverse">
            <Link to="register" className="text-sm  text-blue-600 hover:underline">Register</Link>
        </div>
       
        </>:
         <div className=" items-center space-x-6 rtl:space-x-reverse">
         <Link to="login" onClick={singOut} className="text-sm  text-blue-600 hover:underline">SingOut</Link>
     </div> }      
       
    </div>
    </div>
</nav>
    
   </>
  )
}
