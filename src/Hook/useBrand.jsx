import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

export default function useBrand() {
   function getAllprand(){
 return  axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
   }
 let x=  useQuery({
    queryKey:["brand"],
    queryFn:getAllprand
   })
return x
}
