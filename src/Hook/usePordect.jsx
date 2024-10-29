import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
export default function usePordect() {
    function getProdect(){
      return  axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    }
   let prodectInf= useQuery({
        queryKey:["recentprodect"],
       queryFn:getProdect,
       staleTime:7000
    })
    
    
  return prodectInf
}
