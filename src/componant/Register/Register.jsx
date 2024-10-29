import axios from 'axios' 
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from "yup"
import { UserContext } from '../../Context/UserContext'
export default function Register() {
  let {UserLogin,setUserLogin}=useContext(UserContext)
  let[APIerorrs,setAPIAPIerorrs]=useState("")
  let [isLooding,setisLooding]=useState(false)
  let navigate=useNavigate()
  let validationSchema=Yup.object().shape({
    name:Yup.string().min(3,"min lenght is 3").max(10,"max lenght is 8").required("name is required"),
    email:Yup.string().email("invaild email").required("email is required"),
    phone:Yup.string().matches(/^01[0125][0-9]{8}$/, "invalid phone number").required("phone is required"),
    password:Yup.string().matches(/^[A-Za-z0-9]{6,10}$/,"password  shoud be between 6 to 10 char").required("password is required"),
    rePassword:Yup.string().oneOf([Yup.ref("password"),"rePassword and password shoud be same"]).required("rePasswored required")
  })
function handlerRgister(values){
  setisLooding(true)
  axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,values)
  .then(function(res){
    console.log(res);
    if(res.data.message=="success"){
      console.log("okay");
      localStorage.setItem("token",res.data.token)
      setUserLogin(res.data.token)      
      navigate("/login")
    }
    setisLooding(false)

  }).catch(function(res){
    console.log(res.response.data.message);
    setisLooding(false)
    setAPIAPIerorrs(res.response.data.message)
  })
}

// function valdation(valdate){r

  
// let errors={}
// if(valdate.name==""){
//   errors.name="name is required"
// }
// else if(!/^[A-Z][a-z]{3}$/.test( valdate.name)){
//   errors.name="name not valid"
// }
// if(valdate.phone==""){
//   errors.phone="phone is required"
// }
// else if(!/^01[0125][0-9]{8}$/.test(valdate.phone)){
//   errors.phone="phone not valid"
// }

// return errors
// }
  
  let formik=useFormik({
    initialValues:{
      name:"",
      email:"",
      password:"",
      rePassword:"",
      phone:""
    },
    validationSchema,
    onSubmit:handlerRgister
  })
 
  
  return (
    <>
    {APIerorrs?<div className='bg-red-600 text-white mx-auto p-3 font-bold rounded-lg text-center m-auto'>{APIerorrs}</div>:null}
    <div className='py-8'>
    <h2 className='text-center font-bold text-2xl text-emerald-600'>Rgister Now</h2>
   <form className='max-w-md mx-auto' onSubmit={formik.handleSubmit} >
   <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="name"  value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange} id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" "  />
      <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Name</label>
  </div>
    {formik.touched.name && formik.errors.name  ?  <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium">{formik.errors.name}</span> 
  </div>:null}
   
   <div className="relative z-0 w-full mb-5 group">
      <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" "  />
      <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  {formik.errors.email&&formik.touched.email?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium">{formik.errors.email}</span> </div>:null}
   <div className="relative z-0 w-full mb-5 group">
      <input type="tel" name="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" "  />
      <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your phon</label>
  </div>
    {formik.errors.phone&& formik.touched.phone?<div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium">Danger alert!</span> 
  </div>:null}
   <div className="relative z-0 w-full mb-5 group">
      <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" "  />
      <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your password</label>
  </div>
 {formik.errors.password&&formik.touched.password?<div>{formik.errors.password}</div>:null}
   <div className="relative z-0 w-full mb-5 group">
      <input type="password" name="rePassword" id="rePassword" value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" "  />
      <label htmlFor="rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your RePassword</label>
  </div>
  {formik.errors.rePassword&&formik.touched.rePassword?<div>{formik.errors.rePassword}</div>:null}
  <div className='flex justify-center gap-4 items-center'>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex justify-center">{isLooding?<i className='fas fa-spinner fa-spin'></i>:"Register"}</button>
      <div><Link to={"/Login"}><span className='text-blue-600 underline'>do you have an account login now</span></Link></div>
  </div>
   </form>
    </div>
   
    </>
  )
}
