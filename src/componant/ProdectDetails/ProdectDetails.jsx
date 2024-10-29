import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
export default function ProdectDetails() {
let {id,category}=useParams()
const[prodect,setprodect]=useState(null)
const[relatedProdect,setrelatedProdect]=useState([])
function getProdect(id){
    axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    .then(function(res){
        setprodect(res.data.data)
    }).catch(function(res){
        console.log(res);
    })
}
function getallProdect(category){
    axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    .then(function(res){
      const related=  res.data.data.filter((pro)=>
        pro.category.name==category
        )
        setrelatedProdect(related)  
    }).catch(function(res){
        console.log(res);
    })
}
useEffect(()=>{
    getProdect(id)
    getallProdect(category)
},[id])
    
  return (
    <>
    <div className='row items-center '>
    <div className='w-1/4'>
    <img src={prodect?.imageCover} className='w-full' alt="" />
    </div>
    <div className='w-3/4 px-4'>
    <h3 className='text-emerald-400'>{prodect?.category.name}</h3>
    <h3 className='font-semibold capitalize text-2xl'>{prodect?.title}</h3>
    <h3 className='text-gray-700 my-4'>{prodect?.description}</h3>
    <h3>{prodect?.category.name}</h3>
    <div className='flex justify-between p-3'>
            <span>{prodect?.price}:EGP</span>
            <span><i className='fas fa-star text-yellow-400'></i>{prodect?.ratingsAverage}</span>
        </div>
        <button className='bg-emerald-600 w-full rounded-lg '>Add To Card</button>
    </div>
    </div>
    <div className="row">
    {relatedProdect.length>0? relatedProdect?.map((prodect)=><div  key={prodect.id} className='w-1/6'>
    <Link  to={`/prodectdetails/${prodect.id}/${prodect.category.name}`}>
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
    </div>):<div className="spinner">  </div>}
   </div>
    </>
  )
}
