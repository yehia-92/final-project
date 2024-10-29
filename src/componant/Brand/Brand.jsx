import React, { useContext, useEffect, useState } from 'react'
import useBrand from '../../Hook/useBrand'
import { Link } from 'react-router-dom'
export default function Brand() {
  const [brandDetaalis,setbrandDetaalis]=useState()
let {data,isError,isLoading}=useBrand()
if(isLoading){
  return <div className="spinner"></div>
}
if(data)


  return (
    <>
    <div className='row'>
  {data?.data.data.map((brand)=>
    <div className='w-1/6' key={brand._id}>
    <Link to={`/branddetails/${brand._id}`}>
    <img src={brand.image} alt="" />
    <h2 className='text-center text-emerald-600 text-2xl font-bold'>{brand.name}</h2>
    </Link>
    </div>
  )}
  </div>
    </>
  )
}
