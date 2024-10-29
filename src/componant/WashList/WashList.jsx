import React, { useContext, useEffect, useState } from 'react'
import { WashListContext } from '../../Context/WashListContext'
export default function WashList() {  
    const [washes,setwashes]=useState(null)
    const [deleatCart,setdeletCart]=useState(null)
    const [loading,setloading]=useState(false)
    let {getAllWishList,deletItem}=useContext(WashListContext)
   async function get (){
    setloading(true)
        let response=await getAllWishList()
        setwashes(response)
        console.log(response);
        
      // console.log(response.data.data[0].id,"yehia");
      
        // console.log(washes.data.data);
        
        setloading(false)
    }
    async function deletCart(id){
      let v=await deletItem(id)
      setwashes({...washes, data: {...washes.data, data: washes?.data?.data?.filter(item => v.data?.data?.some(d => d == item.id))}})
    // let repsonse=v.data.data.filter((wash)=>
    // wash.id!=id
    
    // )
    //   setwashes(repsonse)
    //   console.log(repsonse);
      console.log(v);
      
      
    }
    useEffect(()=>{
        get()
        deletCart()
    },[])


    
return (
    <>
   {loading?<div className="spinner"></div>:washes?.data?.data.length>0? <div>
           {/* <h2 className='text-emerald-600 text-center text-2xl font-bold capitalize my-4'>total price:{cartdetails ?.totalCartPrice}</h2> */}
    
 
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
           Price
         </th>
         <th scope="col" className="px-6 py-3">
           Action
         </th>
       </tr>
     </thead>
       { washes?.data.data.map((product)=>
     <tbody key={product.id}>
        <tr   className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
         <td className="p-4">
           <img src={product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
         </td>
         <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
           {product.title}
         </td>
    
         <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
           {product.price}
         </td>
         <td className="px-6 py-4">
           <span  onClick={()=>{deletCart(product.id)}} className="font-medium cursor-pointer text-red-600 dark:text-red-500 hover:underline">Remove</span>
         </td>
       </tr> 
 
     </tbody>
       )}
       
   </table>
 </div>
 </div>:<h2 className='text-red-600 text-2xl text-center py-12 font-bold'>No Product Added</h2>}
 
 
    </>
 
   )
}
