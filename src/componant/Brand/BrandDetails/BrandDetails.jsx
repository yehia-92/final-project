import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BrandContext } from '../../../Context/BrandContext'

export default function BrandDetails() {
    const[brand,setbrand]=useState(null)
let {id}=useParams()
let {getBrand}= useContext(BrandContext)


async function getSpcificBraand(id){
    let response=await getBrand(id)
    console.log(response);
    setbrand(response)
    
}

useEffect(()=>{
    getSpcificBraand(id)
},[])
  return (
   <>
   {brand?<div className='flex justify-center'>
   <div className='py-6'>
    <img src={brand?.data.data.image} alt="" />
    <h2 className='text-center'> {brand?.data.data.name}</h2>
   </div>
   </div>: <div className="spinner"></div>}
   
   </>
  )
}
