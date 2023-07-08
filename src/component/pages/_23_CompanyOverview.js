import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import Company_Overview from '../../images/company_overview_1.png';
export class _23_CompanyOverview extends Component {
    render() {
        return (
            <>
                <div id='partnership' className=' px-4  md:px-8 py-10 lg:px-32 lg:py-10  2xl:px-[27%]' >
                    <div id='bradcrumbs' className='hidden mt-6 md:block   bg-white w-fit '>
                        <ul className='flex text-base text-web-color font-semibold'>
                            <li className='home-icon ps-4 pe-6 py-2 me-4'><Link to={"/"}><i className="fa-solid fa-house"></i> </Link></li>
                            <li className='breadcrumbs-icon  px-6 py-2 me-4'><Link to={"/"}>Home</Link></li>
                            <li className='px-6 py-2 me-4'>Company Overview</li>
                        </ul>
                    </div>
                    <div className='mx-auto my-20'>
                        <h1 className='text-center text-2xl lg:text-4xl font-bold text-white'>Company Overview</h1>
                    </div>
                </div>
                <div className='px-4  md:px-8 py-10 lg:px-32 lg:py-20  2xl:px-[27%]'>
                    <div className='md:w-1/2 w-full'>
                        <h1 className='text-2xl text-web-color font-bold lg:text-3xl mb-4'>History of SoftifyBD Limited</h1>
                        <p className="text-base">
                            SoftifyBD Limited turned up and started operations as a start-up software-based firm in the year 2017 in Narayanganj, Bangladesh. Perceiving the seriousness of IT empowering the industry groups, we commenced our journey to automate diverse fields of operations through digital solutions.
                        </p>
                    </div>
                    <div className='lg:mt-20 mt-10'>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            freeMode={true}
                            grabCursor={true}
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
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide style={{paddingBottom:'4rem'}}>
                                <img className='border-2 py-4 px-6 mb-8 rounded-lg bg-[#FFFFFF]' src={Company_Overview} alt="" />
                                <div>
                                    <span className='text-xl text-cyan-400 mb-4'>- 2022</span>
                                    <h1 className='text-2xl text-web-color font-bold'>Crossing Global Boundaries</h1>
                                    <p className='mt-4 text-base text-black'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur officiis quas odit nisi vero tempore? Vel, nostrum. Porro, consequatur! Corrupti, exercitationem dolorem quia soluta libero praesentium similique labore sequi quam debitis minus quisquam quod assumenda incidunt voluptate consectetur fuga accusantium?</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide style={{paddingBottom:'4rem'}}>
                                <img className='border-2 py-4 px-6 mb-8 rounded-lg bg-[#FFFFFF]' src={Company_Overview} alt="" />
                                <div>
                                    <span className='text-xl text-cyan-400 mb-4'>- 2022</span>
                                    <h1 className='text-2xl text-web-color font-bold'>Crossing Global Boundaries</h1>
                                    <p className='mt-4 text-base text-black'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur officiis quas odit nisi vero tempore? Vel, nostrum. Porro, consequatur! Corrupti, exercitationem dolorem quia soluta libero praesentium similique labore sequi quam debitis minus quisquam quod assumenda incidunt voluptate consectetur fuga accusantium?</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide style={{paddingBottom:'4rem'}}>
                                <img className='border-2 py-4 px-6 mb-8 rounded-lg bg-[#FFFFFF]' src={Company_Overview} alt="" />
                                <div>
                                    <span className='text-xl text-cyan-400 mb-4'>- 2022</span>
                                    <h1 className='text-2xl text-web-color font-bold'>Crossing Global Boundaries</h1>
                                    <p className='mt-4 text-base text-black'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur officiis quas odit nisi vero tempore? Vel, nostrum. Porro, consequatur! Corrupti, exercitationem dolorem quia soluta libero praesentium similique labore sequi quam debitis minus quisquam quod assumenda incidunt voluptate consectetur fuga accusantium?</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide style={{paddingBottom:'4rem'}}>
                                <img className='border-2 py-4 px-6 mb-8 rounded-lg bg-[#FFFFFF]' src={Company_Overview} alt="" />
                                <div>
                                    <span className='text-xl text-cyan-400 mb-4'>- 2022</span>
                                    <h1 className='text-2xl text-web-color font-bold'>Crossing Global Boundaries</h1>
                                    <p className='mt-4 text-base text-black'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur officiis quas odit nisi vero tempore? Vel, nostrum. Porro, consequatur! Corrupti, exercitationem dolorem quia soluta libero praesentium similique labore sequi quam debitis minus quisquam quod assumenda incidunt voluptate consectetur fuga accusantium?</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide style={{paddingBottom:'4rem'}}>
                                <img className='border-2 py-4 px-6 mb-8 rounded-lg bg-[#FFFFFF]' src={Company_Overview} alt="" />
                                <div>
                                    <span className='text-xl text-cyan-400 mb-4'>- 2022</span>
                                    <h1 className='text-2xl text-web-color font-bold'>Crossing Global Boundaries</h1>
                                    <p className='mt-4 text-base text-black'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur officiis quas odit nisi vero tempore? Vel, nostrum. Porro, consequatur! Corrupti, exercitationem dolorem quia soluta libero praesentium similique labore sequi quam debitis minus quisquam quod assumenda incidunt voluptate consectetur fuga accusantium?</p>
                                </div>
                            </SwiperSlide>
                         
                            
                        </Swiper>
                    </div>
                </div>
                <div className='px-4  md:px-8 py-10 lg:px-32 lg:py-20  2xl:px-[27%] bg-[#F9F9FF]'>
                    <h1 className='text-2xl text-web-color font-bold lg:text-3xl mb-14 mx-auto text-center'>Overview of SoftifyBD Limited</h1>
                    <ul className='text-base text-web-color'>
                        <li className='px-6 py-4 bg-[#E8EDF1] w-full  flex flex-wrap'><span className='w-full sm:w-[30%] '>Name of The Company</span> <b className='w-full sm:w-[70%]'>SoftifyBD Limited</b></li>
                        <li className='px-6 py-4  w-full  flex flex-wrap'><span className='w-full sm:w-[30%] '>Year Established</span> <b className='w-full sm:w-[70%]'>22 May, 2018</b></li>
                        <li className='px-6 py-4 bg-[#E8EDF1] w-full  flex flex-wrap'><span className='w-full sm:w-[30%] '>Type Of Business</span> <b className='w-full sm:w-[70%]'>Private Limited Company</b></li>
                        <li className='px-6 py-4 w-full  flex flex-wrap'><span className='w-full sm:w-[30%] '>Chairman</span> <b className='w-full sm:w-[70%]'>MD. Motashim Billah Morshed</b></li>
                        <li className='px-6 py-4 bg-[#E8EDF1] w-full  flex flex-wrap '><span className='w-full sm:w-[30%] '>Founder &amp; CEO</span> <b className='w-full sm:w-[70%]'>Md. Mostaim Billah Murad</b></li>
                        <li className='px-6 py-4  w-full  flex flex-wrap'><span className='w-full sm:w-[30%] '>Co-Founder &amp; CTO</span> <b className='w-full sm:w-[70%]'>Kazi Rifat</b></li>
                        <li className='px-6 py-4 bg-[#E8EDF1] w-full  flex flex-wrap'><span className='w-full sm:w-[30%] '>DIRECTOR &amp; COO</span> <b className='w-full sm:w-[70%]'>Md. Ashaduzzaman</b></li>
                        <li className='px-6 py-4  w-full  flex flex-wrap'><span className='w-full sm:w-[30%] '>Head Office</span> <b className='w-full sm:w-[70%]'>Hazi Motaleb Plaza, S.S. Shah Road,Bandar, Narayanganj - 1410</b></li>
                        <li className='px-6 py-4 bg-[#E8EDF1] w-full  flex flex-wrap'><span className='w-full sm:w-[30%] '>Corporate Office&#x9;</span> <b className='w-full sm:w-[70%]'>Flat B4, House No 71, Road 27, Gulshan-1, Dhaka-1212, Bangladesh.</b></li>
                        <li className='px-6 py-4  w-full  flex flex-wrap'><span className='w-full sm:w-[30%] '>Departments</span> <b className='w-full sm:w-[70%]'>Software Department, Administration &amp; HR Department, Marketing &amp; Support Department</b></li>
                        <li className='px-6 py-4 bg-[#E8EDF1] w-full  flex flex-wrap'><span className='w-full sm:w-[30%] '>Company Email</span> <b className='w-full sm:w-[70%]'>info@softifybd.com, sales@softifybd.com, support@softifybd.com</b></li>
                        <li className='px-6 py-4  w-full  flex flex-wrap'><span className='w-full sm:w-[30%] '>Market Coverage</span> <b className='w-full sm:w-[70%]'>Worldwide</b></li>
                        <li className='px-6 py-4 bg-[#E8EDF1] w-full  flex flex-wrap'><span className='w-full sm:w-[30%] '>Company Phone</span> <b className='w-full sm:w-[70%]'>&#x2B;8801730797262, &#x2B;880811998241</b></li>
                        <li className='px-6 py-4  w-full  flex flex-wrap'><span className='w-full sm:w-[30%] '>Company Hotline</span> <b className='w-full sm:w-[70%]'>&#x2B;8809613228899</b></li>
                        <li className='px-6 py-4 bg-[#E8EDF1] w-full  flex flex-wrap'><span className='w-full sm:w-[30%] '>Expertise Areas</span> <b className='w-full sm:w-[70%]'>Software Development, Website Development, Mobile Apps Development, Graphics Design, Bulk SMS Service, Hosting Service</b></li>
                        <li className='px-6 py-4  w-full  flex flex-wrap'><span className='w-full sm:w-[30%] '>Technologies we use</span> <b className='w-full sm:w-[70%]'>C#, ASP.NET, PHP, Java, Ajax, SQL, MySQL, SQL Server, HTML5, CSS3, SASS, JavaScript, Jquery, RESTFul APIs</b></li>
                        <li className='px-6 py-4 bg-[#E8EDF1] w-full  flex flex-wrap'><span className='w-full sm:w-[30%] '>Total Employees</span> <b className='w-full sm:w-[70%]'>50-60 Employees</b></li>

                    </ul>
                </div>
            </>
        )
    }
}

export default _23_CompanyOverview