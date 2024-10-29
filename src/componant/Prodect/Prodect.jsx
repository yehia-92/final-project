import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import usePordect from '../../Hook/usePordect'
export default function Prodect() {
  let {data,isError,isLoading}=usePordect()
    // console.log(data?.data?.data);
    if(isLoading){
        return  <div className="spinner"></div>
    }
    if(isError){
        return <h3>{}</h3>
    }

    
  return  <>
   <div className="row">
    {data?.data?.data.map((prodect)=><div  key={prodect.id} className='w-1/6'>
    <Link to={`/prodectdetails/${prodect.id}/${prodect.category.name}`}>
    <div>
        <img src={prodect.imageCover} className='w-full' alt="" />
        <h3 className='text-emerald-600'>{prodect.category.name}</h3>
        <h3 className='font-semibold mb-3'>{prodect.title.split(" ").slice(0,2).join()}</h3>
        <div className='flex justify-between p-3 '>
            <span>{prodect.price}:EGP</span>
            <span><i className='fas fa-star text-yellow-400'></i>{prodect.ratingsAverage}</span>
        </div>
        <button className='bg-emerald-600 rounded-lg py-2 px-4 w-[80%]'>Add To Card</button>
       </div>
    </Link>
    </div>)}
   </div>
  </>
}
