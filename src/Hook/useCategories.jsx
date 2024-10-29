import { useQueries, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
export default function useCategories() {
    function gategories(){
    return    axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    
    }
  let x=  useQuery({
        queryKey:["gategories"],
        queryFn:gategories
    })
  return x
}
