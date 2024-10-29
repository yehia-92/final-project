import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CategoryContext } from '../Context/CategoryCotext';
export default function CategoryDetails() {
    const[category,setcategory]=useState(null)
    let {id}=useParams()
let {details}=useContext(CategoryContext)
async function delta(id){
 let {data}=await details(id)
 console.log(data);
  setcategory(data)
}

useEffect(()=>{
  delta(id)    
})
  return (
<>
<div className='flex justify-center'>
  <div className='py-3'>
<img src={category?.data.image}  alt="" />
<h2 className='text-center text-emerald-600 font-bold text-2xl py-3'>{category?.data.name}</h2>
  </div>
</div>
</>
)
}
