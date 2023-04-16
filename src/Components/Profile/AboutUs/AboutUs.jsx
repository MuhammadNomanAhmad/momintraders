import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination ,Autoplay} from "swiper";

import './AboutUs.css'
import aboutImg1 from '../../../Assets/ourmission.jpg'
import clientImg1 from '../../../Assets/clients/client-1.png'
import clientImg2 from '../../../Assets/clients/client-2.png'
import clientImg3 from '../../../Assets/clients/client-3.png'
import clientImg4 from '../../../Assets/clients/client-4.png'
import clientImg5 from '../../../Assets/clients/client-5.png'
import clientImg6 from '../../../Assets/clients/client-6.png'
import clientImg7 from '../../../Assets/clients/client-7.png'
import clientImg8 from '../../../Assets/clients/client-8.png'

const AboutUs = () => {
  return (
    <div className='' id='aboutUs'>
    <div className="aboutsection-bgcolor py-5">
<div className="container" >
<div className="row py-2 py-lg-3 ">
  <div className="col" data-aos="fade-up">
    <h1 className='aboutus-heading pb-3 '  >ABOUT US</h1>
    <h5 className='text-white'><strong>Momin Traders </strong>general order supplier is located in Lahore. The firm came into existence in 2018. The firm has a unique approach to various fields of stationery, IT & general order supplies according to requirement of client.The firm is committed to attain excellence in all areas of its operation. Therefor all effort are made for continuous quality control and improvement through well-coordinated schedule and effective feedback.
We believe that <strong>“Only quality has the future” </strong>

</h5>
  </div>
</div>
  <div className="row py-5 g-5"  data-aos="fade-up">
    
     
      <div className="col-lg-5 "  >
      <div className="aboutus-section " >
        <h1 className='aboutus-heading pb-3 '>Our Mission:</h1>
        <p className='text-white our-mission-text'>To provide excellence service in supply of material/article to our client’s need and exceed their expectations. 
       
        Our aim is to become a leading general order supply firm to provide better professional services to our valued client. 
           To  Provide cost efficient procurement on a large scale straight from the source and offer supply solutions in the most demanding environments where supply times and supply location are challenging.  
</p>
      </div>
      </div>
      <div className="col-lg-7">
    <div className="image-container">
        <img src={aboutImg1} alt="" className='img-fluid about-img' />
      </div>
    </div>
      
    </div>
    {/* Our Customers */}
    {/* <div className="our-customers">
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={clientImg1} className=" w-100 our-brand-customers" alt="..." />
      <img src={clientImg1} className=" w-100 our-brand-customers" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div> */}
    <div className="row py-5  " data-aos="fade-up">
    <h1 className='aboutus-heading pb-5  '>OUR  CLIENTS</h1>
<div className=" ">


<Swiper  
        // slidesPerView={3}
        // spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination,Autoplay]}
        className="mybrandSwiper"
        breakpoints={{
          0:{
            slidesPerView:1,
        spaceBetween:10
          },
          480:{
            slidesPerView:1,
        spaceBetween:10
          },
          768:{
            slidesPerView:2,
        spaceBetween:30
          },
          992:{
            slidesPerView:3,
        spaceBetween:30
          },
        }}

      >
        <SwiperSlide className=' brandSwiperSlider' >
        <img src={clientImg1} alt="" className='our-client-brand'/>
        </SwiperSlide>
        <SwiperSlide className=' brandSwiperSlider'> <img src={clientImg2} alt="" className='our-client-brand'/></SwiperSlide>
        <SwiperSlide className=' brandSwiperSlider'> <img src={clientImg3} alt="" className='our-client-brand'/></SwiperSlide>
        <SwiperSlide className=' brandSwiperSlider'> <img src={clientImg4} alt="" className='our-client-brand'/></SwiperSlide>
        <SwiperSlide className=' brandSwiperSlider'> <img src={clientImg5} alt="" className='our-client-brand'/></SwiperSlide>
        <SwiperSlide className=' brandSwiperSlider'> <img src={clientImg6} alt="" className='our-client-brand'/></SwiperSlide>
        <SwiperSlide className=' brandSwiperSlider'> <img src={clientImg7} alt="" className='our-client-brand'/></SwiperSlide>
        <SwiperSlide className=' brandSwiperSlider'> <img src={clientImg8} alt="" className='our-client-brand'/></SwiperSlide>
        <SwiperSlide className=' brandSwiperSlider'> <img src={clientImg5} alt="" className='our-client-brand'/></SwiperSlide>
      </Swiper>
</div>
   
</div>
  </div>
    </div>
    </div>
  )
}

export default AboutUs