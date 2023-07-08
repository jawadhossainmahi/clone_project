import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Partnership_0 from "../../images/partnership_0.png";
import LIfe_1 from "../../images/life_at_softify_1.jpg"
import LIfe_2 from "../../images/life_at_softify_2.jpg"
import LIfe_3 from "../../images/life_at_softify_3.jpg"
import LIfe_4 from "../../images/life_at_softify_4.jpg"
import LIfe_5 from "../../images/life_at_softify_5.jpg"
import LIfe_6 from "../../images/life_at_softify_6.jpg"
import LIfe_7 from "../../images/life_at_softify_7.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgVideo from "lightgallery/plugins/video";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";

import LightGallery from "lightgallery/react/Lightgallery.es5";

export class _16_LifeAtSoftifybd extends Component {
  Gallery = () => {
    const onBeforeSlide = (detail) => {
      const { index, prevIndex } = detail;
      console.log(index, prevIndex);
    };
  }
  render() {
    return (
      <>
        <div id='partnership' className=' px-4  md:px-8 py-10 lg:px-32 lg:py-10  2xl:px-[27%]' style={{ backgroundImage: `url(${Partnership_0})` }}>
          <div id='bradcrumbs' className='hidden mt-6 md:block rounded-md  bg-white w-fit '>
            <ul className='flex text-base text-web-color font-semibold'>
              <li className='home-icon ps-4 pe-6 py-2 me-4'><Link to={"/"}><i class="fa-solid fa-house"></i> </Link></li>
              <li className='breadcrumbs-icon  px-6 py-2 me-4'><Link to={"/"}>Company</Link></li>
              <li className='px-6 py-2 me-4'>Jobs and Career</li>
            </ul>
          </div>
          <div className='flex flex-col text-white my-40 justify-center items-center'>
            <h1 className='text-2xl lg:text-4xl text-white font-bold'>Life at SoftifyBD</h1>
            <p className='text-base mt-4'>We love our people and we love our innovation.</p>
          </div>
        </div>
        <div className=' px-4  md:px-8 py-10 lg:px-32 lg:py-10  2xl:px-[27%]'>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className=''>
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="m-auto"><img className='rounded-lg' src={LIfe_1} alt="" /></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="m-auto"><img className='rounded-lg' src={LIfe_1} alt="" /></div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="m-auto"><img className='rounded-lg' src={LIfe_2} alt="" /></div>
                </SwiperSlide>

              </Swiper>
            </div>
            <div>
              <h2 className="text-xl lg:text-3xl text-web-color font-bold">Corporate Culture</h2>
              <p className="text-base mt-6">You will find limited bureaucracy and newer opportunities. A culture that values your creativity and entrepreneurial spirit. We create software to digitize the world for better living. Here at SoftifyBD, you have an outstanding opportunity to look deeper into the diversified industries, the people, and the cultures. With Innovate at the prominent edge of distinct solutions, you will be able to build your career within a culture of ongoing learning and personal development with helpful team members.</p>
            </div>
          </div>
        </div>
        <div className='px-4  md:px-8 py-10 lg:px-32 lg:py-10  2xl:px-[27%] bg-white'>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <div className='m-auto'>
              <img className='rounded-lg' src={LIfe_3} alt="" />
              </div>
            <div className='mx-auto lg:mx-0'>
              <h1 className='text-2xl font-semibold text-web-color lg:text-4xl'>Our Progressive & Inventive Culture</h1>
              <p className="mt-4 text-base">
                At softifyBD Limited, we assume the value of our employees. To uphold the creativity of our squad members, our work environment was formed to provide a good vibe in the office with a natural green touch. We have break-out spaces, a prayer hall, a playground, and many other facilities available to support the quality of our work in the environment. <br /><br /> <hr /><br />

                There is nothing that beats the feeling of satisfaction of knowing that we’ve helped our team members’ professional and personal development along the way. At SoftifyBD Limited, our team reflects our actions and initiatives. We are a young, dynamic group, and teamwork is deeply ingrained in our DNA. We would not be able to perform this way without our outstanding local experts and the dedication of our in-house team.
              </p>
            </div>
          </div>
        </div>
        <div className='px-4  md:px-8 py-10 lg:px-32 lg:py-10  2xl:px-[27%]'>
          <h1 className="text-center text-web-color font-bold text-2xl lg:text-4xl">Photo Galary</h1>
          <p className='my-6 text-center mx-auto text-base'>Some insights from our work journeys</p>
          <div className='flex flex-wrap lg:flex-row' >
            <LightGallery
              speed={200}
              
            >



              <a className='w-fit p-0  m-0  web_gallery ' href={LIfe_6} >
                <img className='p-0 m-0 w-fit rounded-lg'
                  alt="img1"
                  src={LIfe_6}
                />
              </a>
      
            
            </LightGallery>
            <LightGallery
              speed={200}
              
              style={{ display: "grid" }}
            >


              <a className='w-fit p-0 m-0  web_gallery ' href={LIfe_5} >
                <img className='p-0 m-0 w-fit rounded-lg'
                  alt="img1"
                  src={LIfe_5}
                />
              </a>
              <a className='w-fit p-0 m-0  web_gallery ' href={LIfe_4} style={{}} >
                <img className='p-0 m-0 w-fit rounded-lg'
                  alt="img1"
                  src={LIfe_4}
                />
              </a>
            </LightGallery>
            <LightGallery
              speed={200}
              

            >


              <a className='w-fit p-0 m-0 web_gallery ' href={LIfe_7} >
                <img className='m-0 p-0 w-fit rounded-lg'
                  alt="img1"
                  src={LIfe_7}
                />
              </a>
      
            </LightGallery>
          </div>
        </div>

      </>

    )
  }
}

export default _16_LifeAtSoftifybd