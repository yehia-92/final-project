import axios from "axios";
import { createContext, useState } from "react";

 export let WashListContext=createContext()
     


  export default function WashListContextProvider(props){

   const  headers={
      token:localStorage.getItem("token")
  }
  function getwishlist(id){
   return axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,{productId:id},{
      headers:{token:localStorage.getItem("token")}
   }).then((res)=>res).catch((ree)=>ree)
  }
 function getAllWishList (){
  return axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,{headers:{token:localStorage.getItem("token")}})
   .then((res)=>res).catch((err)=>err)
 }
 function deletItem(id){
  return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,{
   headers:{token:localStorage.getItem("token")}
  })
   .then((res)=>res).catch((err)=>err)
 }

    return <WashListContext.Provider value={{getwishlist,getAllWishList,deletItem}}>
        {props.children}
    </WashListContext.Provider>

 }