import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import '../App.css';

const Gallery = ({data}) => {
	const [imageIndex, setImageIndex] = useState(0);
  	const settings = {
    infinite: true,
    lazyload: true,
    speed: 1000,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    autoplay: true,
    beforeChange: (current, next) => setImageIndex(next)
  };
  useEffect(() =>{

  } , [])
  return (
    <div className='slider1'>
      	{/* <p>{data.name}</p> */}
      <Slider {...settings}>
        {data.map((img, idx) => {
			return(	
          <div key={idx} className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img className='aaa' src={img} alt={img} />
          </div>)
		})}
		
      </Slider>
    </div>
  )
};

export default Gallery;