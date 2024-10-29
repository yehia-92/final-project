import axios from "axios";
import { createContext } from "react";
export const CategoryContext=createContext()

export default function CategoryContextProvider(props){
     function details(id){
     return   axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`)
     .then((res)=>res).catch((err)=>err)
     }
  


 return   <CategoryContext.Provider value={{details}}> 
        {props.children}
    </CategoryContext.Provider>

}