import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import IspBusinessSolution_1 from "../../images/ispBusinessSollution_1.png";
import IspBusinessSolution_2 from "../../images/ispBusinessSollution_2.svg";
import IspBusinessSolution_3 from "../../images/ispBusinessSollution_3.png";
import IspBusinessSolution_4 from "../../images/ispBusinessSollution_4.png";
import IspBusinessSolution_5 from "../../images/ispBusinessSollution_5.png";
import IspBusinessSolution_6 from "../../images/ispBusinessSollution_6.png";
import IspBusinessSolution_7 from "../../images/ispBusinessSollution_7.png";
import Human_In_Desk from "../../images/humen_in_desk.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

export class _08_EducationManagement extends Component {
  render() {
    return (
      <>
        <div id='service_details' className='text-center lg:text-left' style={{ backgroundColor: "#EDF0F8" }}>
          <div className=' px-4  md:px-8 py-4 lg:px-32 lg:py-10  2xl:px-[27%]' style={{ background: `url(${IspBusinessSolution_1})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div id='bradcrumbs' className='hidden mt-6 md:block  mx-4 bg-white w-fit '>
              <ul className='flex text-base text-web-color font-semibold'>
                <li className='home-icon ps-4 pe-6 py-2 me-4'><Link to={"/"}><i class="fa-solid fa-house"></i> </Link></li>
                <li className='breadcrumbs-icon  px-6 py-2 me-4'><Link to={"/"}>Home</Link></li>
                <li className='px-6 py-2 me-4'>Education Management </li>
              </ul>
            </div>
            <div className='my-20 mx-auto text-center lg:text-left lg:mx-4 '>
              <h5 className='text-base text-cyan-400'>Contribution to the Internet world</h5>
              <h2 className='my-4 text-2xl lg:text-4xl  text-white '>Education Management </h2>
              <p className=' px-8 lg:px-0 lg:w-1/2  text-white text-base lg:mx-0 mx-auto'>There is a massive necessity of digitization for improving efficiency and productivity in ISP businesses. In modern times, the Internet has become one of the core sectors contributing to development. In recent times It is also observed that the rate of internet users has increased massively. So ISP industry will have to maintain the service with quality. To automate everything in ISP businesses, softifyBD Limited has introduced solutions to digitize every task related to the industry to smoothen the processes. We have presented solutions on management, billing, connectivity, security, and many other crucial areas.</p>
            </div>
          </div>
          <div className=' px-4  md:px-8 py-4 lg:px-32 lg:py-10  lg:mb-10 2xl:px-[27%]' style={{ background: "#fff", backgroundImage: `url(${IspBusinessSolution_2})`, backgroundRepeat: "no-repeat", backgroundSize: "400px", backgroundPosition: "left top" }}>
            <div className='grid grid-cols-1 px-4 lg:px-0 md:grid-cols-2 my-10'>
              <div className='mt-20 mx-auto'>
                <img className='rounded-lg' src={IspBusinessSolution_3} alt="" />
              </div>
              <div className='text-left lg:text-center'>
                <h3 className='text-2xl lg:text-4xl   font-bold mb-6 text-web-color'>Focus on Industries and Markets</h3>
                <p className='text-base'>
                  At SoftifyBD, we monitor the industry and its market with the way the industry operates industry profiles and databases. We understand the industry's demand and geographically research a specific industry and its need to find room for development, remove errors, and bring sustainability. We follow various research models under consideration to develop and innovate, smoothening the overall growth and process of business execution.


                  SoftifyBD Limited focuses on delivering digitally transformed, cutting-edge software through advanced information systems and innovation. We are committed to understanding challenges, recognizing opportunities, and bringing specific solutions to your company. Along with the successful journey in Bangladesh, we are currently serving clients from countries like the UK, Netherlands, Japan, Norway, Canada, Tajikistan, Turkey, and many more.

                  Take the next step in your digital transformation journey
                </p>
                <div className="mt-5 flex justify-start lg:justify-normal lg:text-base   ">
                  <button className='flex-initial vanila_btn_hover_1  text-white font-bold rounded-md  bg-cyan-400 px-3 py-3 lg:px-7 lg:py-3'><a href="/">Talk to an expert</a></button>
                  <button className=' flex-initial vanila_btn_hover_2  font-bold rounded-md  bg-white border hover:border-cyan-400 px-3 py-3 lg:px-7 lg:py-3  ms-2 lg:ms-4'><a href="/"> Talk to an expert</a></button>
                </div>
              </div>
            </div>
          </div>
          <div className=' px-4  md:px-8 py-8 lg:px-32 lg:py-10  2xl:px-[27%]' >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div>
                <h3 className='text-2xl lg:text-4xl  text-web-color font-bold mb-8'>Our Inspiration & Areas of Experience</h3>
                <p className='text-base'>Our core inspiration is to make the world a better place, which begins with our leaders. Our team is experienced in a variety of fields, functions, technologies, and cultures. We’ve accomplished projects for over 1000+ collective clients throughout the world. We’ve created over 20 software applications for a wide range of industries.</p>
              </div>
              <div className='mx-auto'>
                <img className='rounded-lg' src={IspBusinessSolution_4} alt="" />
              </div>
            </div>
          </div>
          <div className=' px-4  md:px-8 py-4 lg:px-32 lg:py-10  2xl:px-[27%]' style={{ background: "#fff" }}>
            <h3 className='text-2xl lg:text-4xl mx-auto text-center w-fit md:w-2/3 text-web-color font-bold  my-8'>Explore our Education Management  Industry Products.</h3>
            <div className='px-4'>
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                breakpoints={{
                  768: {
                    // width: 768,
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                }}
                className="mySwiper"
              >
                <SwiperSlide style={{ paddingBottom: "2.5rem" }}>
                  <div className='md:pe-32'>
                  <img className='mb-6 md:mx-0 mx-auto rounded-lg' src={IspBusinessSolution_5} alt="" />
                    <h3 className='text-2xl lg:text-4xl text-web-color font-bold mb-4'>Infinity Log</h3>
                    <p className='text-lg  text-black'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid sit quia magni facilis suscipit beatae similique ab qui ipsa. Molestiae?</p>
                    <button className='mt-4 vanila_btn_hover_1  text-white font-bold rounded-md  bg-cyan-400 px-3 py-3 lg:px-7 lg:py-3'><a href="/">About Infinity Log</a></button>
                  </div>
                </SwiperSlide>
                <SwiperSlide style={{ paddingBottom: "2.5rem" }}>
                  <div className='md:pe-32'>
                   <img className='mb-6 md:mx-0 mx-auto rounded-lg' src={IspBusinessSolution_5} alt="" />
                    <h3 className='text-2xl lg:text-4xl text-web-color font-bold mb-4'>Infinity Log</h3>
                    <p className='text-lg  text-black'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid sit quia magni facilis suscipit beatae similique ab qui ipsa. Molestiae?</p>
                    <button className='mt-4 vanila_btn_hover_1  text-white font-bold rounded-md  bg-cyan-400 px-3 py-3 lg:px-7 lg:py-3'><a href="/">About Infinity Log</a></button>
                  </div>
                </SwiperSlide>
                <SwiperSlide style={{ paddingBottom: "2.5rem" }}>
                  <div className='md:pe-32'>
                   <img className='mb-6 md:mx-0 mx-auto rounded-lg' src={IspBusinessSolution_5} alt="" />
                    <h3 className='text-2xl lg:text-4xl text-web-color font-bold mb-4'>Infinity Log</h3>
                    <p className='text-lg  text-black'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid sit quia magni facilis suscipit beatae similique ab qui ipsa. Molestiae?</p>
                    <button className='mt-4 vanila_btn_hover_1  text-white font-bold rounded-md  bg-cyan-400 px-3 py-3 lg:px-7 lg:py-3'><a href="/">About Infinity Log</a></button>
                  </div>
                </SwiperSlide>
                <SwiperSlide style={{ paddingBottom: "2.5rem" }}>
                  <div className='md:pe-32'>
                   <img className='mb-6 md:mx-0 mx-auto rounded-lg' src={IspBusinessSolution_5} alt="" />
                    <h3 className='text-2xl lg:text-4xl text-web-color font-bold mb-4'>Infinity Log</h3>
                    <p className='text-lg  text-black'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid sit quia magni facilis suscipit beatae similique ab qui ipsa. Molestiae?</p>
                    <button className='mt-4 vanila_btn_hover_1  text-white font-bold rounded-md  bg-cyan-400 px-3 py-3 lg:px-7 lg:py-3'><a href="/">About Infinity Log</a></button>
                  </div>
                </SwiperSlide>

              </Swiper>
            </div>

          </div>
          <div className=" mx-auto pt-10 px-6 mb-20 md:mx-16  lg:pt-32 lg:px-28 lg:mb-28 2xl:mx-[27%] 2xl:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              <div className=" ">
                <img className='w-full rounded-lg' src={Human_In_Desk} alt="" />
              </div>
              <div className=' '>
                <div className="mt-8 text-center lg:text-left lg:mt-24 lg:ms-10 align-middle items-center ">
                  <h2 className='text-web-color text-2xl lg:text-2xl font-bold'>Ask Human</h2>
                  <p className='text-base lg:text-xl mt-4'>Our experts are ready to talk and help you fast and with priority.</p>
                  <div className="mt-5 flex justify-center lg:justify-normal lg:text-base   ">
                    <button className='flex-initial vanila_btn_hover_1  text-white font-bold rounded-md  bg-cyan-400 px-3 py-3 lg:px-7 lg:py-3'><a href="/">Talk to an expert</a></button>
                    <button className=' flex-initial vanila_btn_hover_2  font-bold rounded-md  bg-white border border-cyan-400 px-3 py-3 lg:px-7 lg:py-3  ms-2 lg:ms-4'><a href="/"> Talk to an expert</a></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default _08_EducationManagement