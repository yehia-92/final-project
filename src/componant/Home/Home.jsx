import React from 'react'
import RecentProdect from '../RecentProdect/RecentProdect'
import CategoriesSlider from '../CategoriesSlider/CategoriesSlider'
import MainSlider from '../MainSlider/MainSlider'
export default function Home() {

  return (
    <>
       <div>Home</div>
       <MainSlider/>
       <CategoriesSlider/>
       <RecentProdect/>
    </>
  )
}
