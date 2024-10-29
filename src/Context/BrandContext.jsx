import axios from "axios";
import { createContext } from "react";

export let BrandContext= createContext()


export default function BrandContextProvider(props){

    function getBrand(id){
      return  axios.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
        .then((res)=>res).catch((res)=>res)
    }


    return <BrandContext.Provider value={{getBrand}}>
    
        {props.children}
    </BrandContext.Provider>
}