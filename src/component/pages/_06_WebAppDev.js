import React, { Component } from 'react';
import Soft_Development_1 from "../../images/soft_development_1.png";
import Soft_Development_2 from "../../images/soft_development_2.png";
import Soft_Development_3 from "../../images/soft_development_3.png";
import Soft_Development_4 from "../../images/soft_development_4.png";
import Soft_Development_Case_1 from "../../images/soft_development_case_1.png";
import Soft_Development_Case_2 from "../../images/soft_development_case_2.svg";
import Experience_1 from "../../images/experience_1.png";
import Experience_2 from "../../images/experience_2.png";
import Experience_3 from "../../images/experience_3.png";
import Experience_4 from "../../images/experience_4.png";
import Experience_5 from "../../images/experience_5.png";
import Experience_6 from "../../images/experience_6.png";
import Experience_7 from "../../images/experience_7.png";
import Experience_8 from "../../images/experience_8.png";
import Tech_We_Use_1 from "../../images/techonology_we_use_1.png";
import Tech_We_Use_2 from "../../images/techonology_we_use_2.png";
import Tech_We_Use_3 from "../../images/techonology_we_use_3.png";
import Tech_We_Use_4 from "../../images/techonology_we_use_4.png";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

export class _06_WebAppDev extends Component {
  render() {
    return (
        <>
                 <div id='service_details' className='text-center lg:text-left' style={{ backgroundColor: "#EDF0F8" }}>
                    <div className=' px-4  md:px-8 py-4 lg:px-32 lg:py-10  lg:mb-10 2xl:px-[27%]'>
                        <div id='bradcrumbs' className='hidden mt-6 md:block  mx-4 bg-white w-fit '>
                            <ul className='flex text-base text-web-color font-semibold'>
                                <li className='home-icon ps-4 pe-6 py-2 me-4'><Link to={"/"}><i class="fa-solid fa-house"></i> </Link></li>
                                <li className='breadcrumbs-icon  px-6 py-2 me-4'><Link to={"/"}>Home</Link></li>
                                <li className='px-6 py-2 me-4'>Web Application Development</li>
                            </ul>
                        </div>
                        <div className='py-8 md:px-4 md:py-10   lg:mt-20'>
                            <div className='grid grid-cols-1 lg:grid-cols-2'>
                                <div className='mb-4' >
                                    <h3 className='text-web-color text-2xl lg:text-4xl font-bold'>Software - An ISP Management & Billing Solution</h3>
                                    <p className='mt-5 text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusantium minus beatae soluta voluptates quis aliquid perferendis eos, iusto numquam dolorum deleniti tempora explicabo. Porro, ratione. Dolorum recusandae ipsum ullam.</p>
                                    <button className='mt-5 rounded-sm px-6 py-2  text-base vanila_btn_hover_2'>Know More</button>
                                </div>
                                <div className='mt-4 mx-auto'>
                                    <img src={Soft_Development_1} alt="" className='md:mx-6 rounded-lg' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-4  md:px-8 pb-4 pt-16 bg-white lg:px-32 lg:pt-20 lg:pb-10 2xl:px-[27%] '>
                        <div className='grid grid-cols-1 lg:grid-cols-2'>
                            <div className='mx-auto'>
                                <img src={Soft_Development_2} alt="" className='rounded-lg' />
                            </div>
                            <div className='mt-10 lg:ms-6' >
                                <h3 className='text-web-color text-2xl lg:text-4xl  font-bold'>ISP Digital - An ISP Management & Billing Solution</h3>
                                <p className='mt-5 text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusantium minus beatae soluta voluptates quis aliquid perferendis eos, iusto numquam dolorum deleniti tempora explicabo. Porro, ratione. Dolorum recusandae ipsum ullam.</p>
                                <button className='mt-5 rounded-sm px-6 py-2  text-base vanila_btn_hover_1'>Know More</button>
                            </div>

                        </div>
                    </div>
                    <div className='px-4  md:px-8 pt-4 pb-16 bg-white lg:px-32 lg:pt-20 lg:pb-10 2xl:px-[27%]'>
                        <div className='grid grid-cols-1 lg:grid-cols-2'>
                            <div className='mx-auto'>
                                <img src={Soft_Development_3} alt="" className='rounded-lg' />
                            </div>
                            <div className='mt-4 mb-8 lg:me-6' >
                                <h3 className='text-web-color text-2xl lg:text-4xl font-bold'>ISP Digital - An ISP Management & Billing Solution</h3>
                                <p className='mt-5 text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusantium minus beatae soluta voluptates quis aliquid perferendis eos, iusto numquam dolorum deleniti tempora explicabo. Porro, ratione. Dolorum recusandae ipsum ullam.</p>
                                <button className='mt-5 rounded-sm px-6 py-2  text-base vanila_btn_hover_2'>Know More</button>
                            </div>

                        </div>
                    </div>

                    <div className='px-4 py-16  md:px-8 lg:px-32 lg:py-20 2xl:px-[27%] '>
                        <h1 className='text-2xl lg:text-4xl font-bold text-web-color mx-auto text-center  md:w-1/2'>Check out our case study on software development</h1>
                        <div className='mt-10 '>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={10}
                                pagination={{
                                    clickable: true,
                                }}
                                breakpoints={{
                                    768: {
                                        // width: 768,
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    1024: {
                                        // width: 1024,
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide className=''>
                                    <Link to={"/"}>
                                        <div className='bg-white rounded-lg hover:drop-shadow-md hover:shadow-lg'>
                                            <img className='mx-auto  w-[22rem] rounded-lg' src={Soft_Development_Case_1} alt="" />
                                            <div className='p-4 mb-4'>
                                                <span className='text-slate-500'>11-06-2023</span>
                                                <h3 className='mt-2 text-2xl font-bold text-web-color-hover'>Case Study in Isp builling method</h3>
                                            </div>
                                        </div></Link>
                                </SwiperSlide>
                                <SwiperSlide className=''>
                                    <Link to={"/"}>
                                        <div className=' bg-white rounded-lg hover:drop-shadow-md hover:shadow-lg'>
                                            <img className='mx-auto w-[22rem] rounded-lg' src={Soft_Development_Case_2} alt="" />
                                            <div className='p-4 mb-4'>
                                                <span className='text-slate-500'>11-06-2023</span>
                                                <h3 className='mt-2 text-2xl font-bold text-web-color-hover'>Case Study in Isp builling method</h3>
                                            </div>
                                        </div></Link>
                                </SwiperSlide>
                            </Swiper>
                        </div>

                    </div>
                    <div className='bg-white px-4 py-16  md:px-8 lg:px-32 lg:py-20 2xl:px-[27%]'>
                        <div className='text-center mx-auto md:w-1/2'>
                            <h3 className='text-web-color text-2xl lg:text-4xl font-bold'>Our Field Of Experiences</h3>
                            <p className='text-slate-600 text-base mt-6'>Below are some of our software development products. We've created over 20 products, and the majority of them are exceptionally popular in the industry.</p>
                        </div>
                        <div className='flex flex-wrap'>
                            <div className='flex items-center mx-4 my-5'>
                                <div className='w-fit rounded-sm' style={{ backgroundColor: "#EFF2F5" }}><img className='p-3' src={Experience_1} alt="" /></div>
                                <div className='w-fit text-web-color text-lg mx-4'>ISP Management</div>
                            </div>
                            <div className='flex items-center mx-4 my-5'>
                                <div className='w-fit rounded-sm' style={{ backgroundColor: "#EFF2F5" }}><img className='p-3' src={Experience_2} alt="" /></div>
                                <div className='w-fit text-web-color text-lg mx-4'>ISP Management</div>
                            </div>
                            <div className='flex items-center mx-4 my-5'>
                                <div className='w-fit rounded-sm' style={{ backgroundColor: "#EFF2F5" }}><img className='p-3' src={Experience_3} alt="" /></div>
                                <div className='w-fit text-web-color text-lg mx-4'>ISP Management</div>
                            </div>
                            <div className='flex items-center mx-4 my-5'>
                                <div className='w-fit rounded-sm' style={{ backgroundColor: "#EFF2F5" }}><img className='p-3' src={Experience_4} alt="" /></div>
                                <div className='w-fit text-web-color text-lg mx-4'>ISP Management</div>
                            </div>
                            <div className='flex items-center mx-4 my-5'>
                                <div className='w-fit rounded-sm' style={{ backgroundColor: "#EFF2F5" }}><img className='p-3' src={Experience_5} alt="" /></div>
                                <div className='w-fit text-web-color text-lg mx-4'>ISP Management</div>
                            </div>
                            <div className='flex items-center mx-4 my-5'>
                                <div className='w-fit rounded-sm' style={{ backgroundColor: "#EFF2F5" }}><img className='p-3' src={Experience_6} alt="" /></div>
                                <div className='w-fit text-web-color text-lg mx-4'>ISP Management</div>
                            </div>
                            <div className='flex items-center mx-4 my-5'>
                                <div className='w-fit rounded-sm' style={{ backgroundColor: "#EFF2F5" }}><img className='p-3' src={Experience_7} alt="" /></div>
                                <div className='w-fit text-web-color text-lg mx-4'>ISP Management</div>
                            </div>
                            <div className='flex items-center mx-4 my-5'>
                                <div className='w-fit rounded-sm' style={{ backgroundColor: "#EFF2F5" }}><img className='p-3' src={Experience_8} alt="" /></div>
                                <div className='w-fit text-web-color text-lg mx-4'>ISP Management</div>
                            </div>
                        </div>
                    </div>
                    <div className='px-4 pt-16  md:px-8 md:py-16 lg:px-32 lg:py-20 2xl:px-[27%]'>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h3 className='text-web-color  text-2xl lg:text-4xl font-bold'>Request a quote for Software Development</h3>
                                <p className='my-4 '>Get in touch with our online Client Support team for any query.</p>
                                <form className='mt-8 mx-2' action="">
                                    <div className='grid grid-cols-2 gap-8'>
                                        <label class="block">
                                            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                                Full Name
                                            </span>
                                            <input type="text" name="text" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Type Full Name" />
                                        </label>
                                        <label class="block">
                                            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                                Email Address
                                            </span>
                                            <input type="email" name="email" class="mt-1 px-3 py-2 peer bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Type Email Address" />
                                            <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                                                Please provide a valid email address.
                                            </p>
                                        </label>
                                    </div>
                                    <div className=''>
                                        <label class="block">
                                            <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                                Your Quires
                                            </span>
                                            <textarea name="" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" id="" cols="10" rows="10"></textarea>
                                        </label>
                                    </div>
                                    <button type='submit' className='mt-6 md:my-8 px-6 py-2 text-xl  vanila_btn_hover_1 '>Get a Qutos</button>
                                </form>
                            </div>
                            <div>
                                <img className='' src={Soft_Development_4} alt="" />
                            </div>

                        </div>

                    </div>
                    <div className='px-4 pt-8 pb-16  md:px-8 md:py-16 lg:px-32 lg:py-20 2xl:px-[27%]'>
                        <h2 className='text-web-color text-2xl lg:text-4xl font-bold mx-auto text-center'> Technology We are Using</h2>
                        <p className='text-base text-slate-500 mt-4 md:w-1/2 mx-auto'>We have a number of skilled developers on our team who are fluent in a variety of potential languages. Some of the software languages we utilize are listed below.</p>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-4  mt-8'>
                            <div className='w-[100%]  shadow-md' style={{ backgroundColor: "#F4F6F8" }}> <img className='px-4 py-4 mx-auto' src={Tech_We_Use_1} alt="" />
                            </div>
                            <div className='w-[100%] shadow-md' style={{ backgroundColor: "#F4F6F8" }}> <img className='px-4 py-4 mx-auto' src={Tech_We_Use_2} alt="" />
                            </div>
                            <div className='w-[100%] shadow-md' style={{ backgroundColor: "#F4F6F8" }}> <img className='px-4 py-4 mx-auto' src={Tech_We_Use_3} alt="" />
                            </div>
                            <div className='w-[100%] shadow-md' style={{ backgroundColor: "#F4F6F8" }}> <img className='px-4 py-4 mx-auto' src={Tech_We_Use_4} alt="" />
                            </div>
                        </div>
                    </div>


                </div>
            </>
    )
  }
}

export default _06_WebAppDev