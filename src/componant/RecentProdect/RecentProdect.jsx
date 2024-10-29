import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom' 
import usePordect from '../../Hook/usePordect'
import { CartContext } from '../../Context/CartContext'
import toast from 'react-hot-toast';
import { WashListContext } from '../../Context/WashListContext'

export default function RecentProdect() {
    let {addToCart}=useContext(CartContext)
    const [Loading,setLoading]=useState(false)
    const [currentId,setcurrentId]=useState(0)
    const [wishId,setwishId]=useState(0)
    let {getwishlist}=useContext(WashListContext)
    async function getId(id){
        setLoading(true)
        setwishId(id)
        let respone=await getwishlist(id)
        console.log(respone.data.status);
        
        if(respone.data.status=="success"){
            setLoading(false)
           toast.success(respone.data.message)
            
        }
    }
    
    
  
   async   function addProectCart(ProdectId){
    setcurrentId(ProdectId)
    setLoading(true)
    console.log(localStorage.getItem("token"));
    console.log(ProdectId);
    
   let respone=await addToCart(ProdectId)
//    console.log(respone?.data?.status=="success");
   console.log(respone);
   
   setLoading(false)
   if(respone?.data?.status=="success"){
    toast.success(respone.data.message)
    setLoading(false)
   }
   
    }
   let {data,isError,isLoading}=usePordect()
   
    // console.log(data?.data.data);
    if(isLoading){
        return  <div className="spinner"></div>
    }
    if(isError){
        return <h3>{}</h3>
    }

    
  return  <>
   <div className="row">
    {data?.data.data.map((prodect)=><div  key={prodect.id} className='w-1/6'>
    <Link to={`prodectdetails/${prodect.id}/${prodect.category.name}`}>
    <div>
        <img src={prodect.imageCover} className='w-full' alt="" />
        <h3 className='text-emerald-600'>{prodect.category.name}</h3>
        <h3 className='font-semibold mb-3'>{prodect.title.split(" ").slice(0,2).join()}</h3>
        <div className='flex justify-between p-3 '>
            <span>{prodect.price}:EGP</span>
            <span><i className='fas fa-star text-yellow-400'></i>{prodect.ratingsAverage}</span>
        </div>
       </div>
    </Link>
    <button onClick={()=>{addProectCart(prodect.id)}} className='bg-emerald-600 rounded-lg py-2 px-4 w-[80%]'>{Loading &&prodect.id==currentId?<i className='fas fa-spinner fa-spin'></i>:"Add To Card"}</button>
    <button onClick={()=>{getId(prodect.id)}} className='bg-red-600 rounded-lg py-2 px-4 w-[80%]'>{Loading &&prodect.id==wishId?<i className='fas fa-spinner fa-spin'></i>:"Wash List"}</button>

    </div>)}
      </div>
  </>
}
