import axios from "axios";
import { createContext, useContext, useState } from "react";
import { UserContext } from "./UserContext";

export let CartContext=createContext()
export default function cartContextProvider(props){
    let {UserLogin}=useContext(UserContext)
  const  headers={
        token:UserLogin
    }    
    let [cartId,setcartId]=useState(0)
function addToCart(productId){
    console.log(headers);
  return  axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,
    {productId:productId},
    {headers},
    ).then((res)=>res).catch((err)=>err)
}
function getLoggedUserCart(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{
        headers:{token:localStorage.getItem("token")}
    }).then((res)=>{
        setcartId(res.data.cartId)
        console.log(res.data.cartId);
        
        return res}).catch((err)=>err)
}
function updateCartProductQuantity(productId,newCount){
    return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{count:newCount},{
        headers
    })
 
}
function deletCartItem(productId){
    return  axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{headers}
      ).then((res)=>res).catch((err)=>err)
  }
function Check(cartId,url,details){
   return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`,
    {shippingAddress:details}  , 
    {headers},
    ).then((res)=>res).catch((err)=>err)
}
console.log(cartId);

    return<CartContext.Provider value={{addToCart,getLoggedUserCart,updateCartProductQuantity,deletCartItem,Check,cartId}}>
        {props.children}
    </CartContext.Provider>
}