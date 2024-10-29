import React from 'react'
import slide1 from '../../assets/KREM-STAPICI-KAVA-Lasta.webp'
import slide2 from '../../assets/NAPOLITANKA-Lasta.webp'
import slide3 from '../../assets/NASLOVNA-2115x566px-1.webp'
import Slider from "react-slick";

export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 1000 ,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true
  };
  return (
<>
<div className="row">
  <div className='w-3/4'>
<Slider  {...settings}>
  <img src={slide3} className='w-full h-[400px]' alt="" />
  <img src={slide1} className='w-full h-[400px]' alt="" />
  <img src={slide2} className='w-full h-[400px]' alt="" />
  </Slider>
</div>
<div className='w-1/4'>
<img src={slide2} className='w-full h-[200px]' alt="" />
<img src={slide1} className='w-full h-[200px]' alt="" />
</div>
</div>
 </>
  )
}
