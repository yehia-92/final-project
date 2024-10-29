import React from 'react'
import Nav from './../Nav/Nav';
import Footer from './../Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
    <Nav/>
    <div className='container mx-auto w-[80%] py-16'>
    <Outlet/>
    </div>
    <Footer/>
    </>

  )
}
