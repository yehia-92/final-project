import { createContext, useEffect, useState } from "react";

export const UserContext=createContext()

export default function UserContextProvider(props){
const [UserLogin,setUserLogin]=useState(
    localStorage.getItem("token")?localStorage.getItem("token"):null
)


// useEffect(()=>{
//     if(localStorage.getItem("token")){
//         setUserLogin("token")
//     }
//     else{
//         setUserLogin(null)
//     }
// })
return <UserContext.Provider value={{UserLogin,setUserLogin}}>
{props.children}
</UserContext.Provider>


}