import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
export default function CategoriesSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500 ,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay:true
      };
    const[categories,setcategories]=useState([])
    function getcategories(){
        axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
        .then(
            function(res){
                // console.log(res.data.data);
                setcategories(res.data.data)
            }
        ).catch(function(res){
            console.log(res);
        })
    }
    useEffect(()=>{
        getcategories()
    },[])
    return (
        <Slider {...settings}>
    {categories.map((category)=>
    <div key={category}>
        <img className='w-full h-[200px] object-cover' src={category.image} alt="" />
        <h3>{category.title}</h3>
    </div>
    )}
        </Slider>
      );
}
