import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"

const Services = () => {
  return (
    <div className='services'>
        <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} internal={1000} showThumbs={false}>
            <div>
                <img src={img3} alt="Item1"/>
                <p className='legend'>Full Stack</p>
            </div>

            <div>
                <div>
                <img src={img4} alt="Item1"/>
                <p className='legend'>Peer to Peer Support</p>
            </div>
            </div>
        </Carousel>
        
        </div>
  )
}

export default Services