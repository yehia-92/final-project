import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import { Link } from 'react-router-dom';
export default function Cart() {
  let[cartdetails,setcartdetails ]=useState(null)
  let {getLoggedUserCart,updateCartProductQuantity,deletCartItem}=useContext(CartContext)
  let [loading,setloading]=useState(false)
  const  headers={
    token:localStorage.getItem("token")
}

    
 async function getcartitem(){
  setloading(true)
  
  let respone=await getLoggedUserCart()
  console.log(respone);
  
  setloading(false)

    
    if(respone?.data?.status=="success"){
      setcartdetails(respone.data.data)}
      // console.log(respone.data.data.products);
      console.log(cartdetails==false);
      

      
  }
  async function updateproduct(productId,count){
    if(count.length==0){
      deletCart(productId)
    }
    else{
      let respone=await updateCartProductQuantity(productId,count)
      setcartdetails(respone.data.data)
    }
    
  }
  async function deletCart(productId){
    let respone=await deletCartItem(productId)
    setcartdetails(respone.data.data)
    toast.success("the item deleted")
  }
  
  useEffect(()=>{
    getcartitem()
   
  },[])
  return (
   <>
  
  {loading?<div className="spinner"></div>:cartdetails?.products.length>0? <div>
          <h2 className='text-emerald-600 text-center text-2xl font-bold capitalize my-4'>total price:{cartdetails?.totalCartPrice}</h2>
   

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-16 py-3">
          <span className="sr-only">Image</span>
        </th>
        <th scope="col" className="px-6 py-3">
          Product
        </th>
        <th scope="col" className="px-6 py-3">
          Qty
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      { cartdetails?.products.map((product)=>
       <tr key={product.product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="p-4">
          <img src={product.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {product.product.title}
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <button onClick={()=>{updateproduct(product.product.id,product.count-1)}} className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
              </svg>
            </button>
             <span>{product.count}</span>
            <button onClick={()=>{updateproduct(product.product.id,product.count+1)}} className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Quantity button</span>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
              </svg>
            </button>
          </div>
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {product.price*product.count}
        </td>
        <td className="px-6 py-4">
          <span  onClick={()=>{deletCart(product.product.id)}} className="font-medium cursor-pointer text-red-600 dark:text-red-500 hover:underline">Remove</span>
        </td>
      
      </tr> 
            
      )}
            <Link to={`/checkout`}><button className=' absolute py-2 bottom-0 right-0 left-0 w-full bg-emerald-500 text-black'>Checkout </button></Link>
       
    </tbody>
  </table>
</div>
</div>:<h2 className='text-red-600 text-2xl text-center py-12 font-bold'>No Product Added</h2>}


   </>

  )
}
