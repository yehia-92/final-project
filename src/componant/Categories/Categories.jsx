import React from 'react'
import useCategories from '../../Hook/useCategories'
import { Link } from 'react-router-dom';
export default function Categories() {
  let {data,isError,isLoading}=useCategories()
console.log(data);

  return (
    <>
    <div className='row '>
    {data?.data.data.map((category)=>
    <div className='w-1/5 ' key={category._id}>
      <Link to={`/categorydetails/${category._id}`}>
    <img src={category.image} className='w-[200px] h-[200px]'  alt="" />
    <h2>{category.name}</h2>
    </Link>
    </div>
    )}
    </div>
    </>
  )
}
