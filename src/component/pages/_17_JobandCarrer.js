import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Partnership_0 from "../../images/partnership_0.png";
import Company_1_ from "../../images/Company_1.svg";
import Company_2_ from "../../images/Company_2.svg";
import Company_3_ from "../../images/Company_3.svg";
import Company_4_ from "../../images/Company_4.svg";
import Company_5_ from "../../images/Company_5.svg";


export class _17_JobandCarrer extends Component {
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
                    <div className='my-10 md:my-20 text-center text-white'>
                        <h3 className=' font-bold text-2xl lg:text-4xl'>Jobs and Career</h3>
                        <p className='mx-auto mt-6 w-full md:w-2/3'>SoftifyBD (Pvt.) Limited is majorly a B2B and B2C-based company that develops creative and inventive software solutions for individual industries. We have completed projects for diverse industrial sectors, including Internet Service Providers, Cable TV Networks, Education, Health, E-commerce, and many more.</p>
                    </div>
                </div>
                <div className='mx-4  md:mx-8 my-10 lg:mx-32 lg:my-10  2xl:mx-[27%]'>
                    <div className='my-10 lg:my-20'>
                        <div className='grid gird-rows-3 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8'>
                            <div className='blogs border-2 rounded-lg bg-white drop-shadow-lg shadow-md'>
                                <img className='mx-auto  rounded-lg z-20 w-full' src={Company_1_} alt="" />
                                <h3 className='px-8 absolute top-32  z-50 text-xl lg:text-2xl font-semibold text-white hover:text-cyan-400 duration-300 '><Link to={`/`}>ASP .Net Software Developer Needed</Link></h3>
                                <div className=' px-8 py-4'>
                                    <div className='flex flex-wrap flex-row justify-between '>
                                    <span className='flex flex-col text-base'>
                                            <span className='text-xl text-dark font-bold'>BDT 25k-40k</span>
                                            <span>/Month</span>
                                        </span>
                                        <span className='flex flex-col text-base'>
                                            <span>Job Location:</span>
                                            <span>Dhaka</span>
                                        </span>
                                    </div>
                                    <p className='my-4 text-base'>Todays consumers are exposed to an ongoing feed of content and experiences across digital channels..</p>
                                    <Link className='text-base text-cyan-400 font-bold' to={'/'}>Read More...</Link>
                                </div>
                            </div>
                            <div className='blogs border-2 rounded-lg bg-white drop-shadow-lg shadow-md'>
                                <img className='mx-auto  rounded-lg z-20 w-full' src={Company_2_} alt="" />
                                <h3 className='px-8 absolute top-32  z-50 text-xl lg:text-2xl font-semibold text-white hover:text-cyan-400 duration-300 '><Link to={`/`}>ASP .Net Software Developer Needed</Link></h3>
                                <div className=' px-8 py-4'>
                                    <div className='flex flex-wrap flex-row justify-between '>
                                    <span className='flex flex-col flex-wrap text-base'>
                                            <span className='text-xl text-dark font-bold'>BDT 25k-40k</span>
                                            <span>/Month</span>
                                        </span>
                                        <span className='flex flex-col text-base flex-wrap'>
                                            <span>Job Location:</span>
                                            <span>Dhaka</span>
                                        </span>
                                    </div>
                                    <p className='my-4 text-base'>Todays consumers are exposed to an ongoing feed of content and experiences across digital channels..</p>
                                    <Link className='text-base text-cyan-400 font-bold' to={'/'}>Read More...</Link>
                                </div>
                            </div>
                            <div className='blogs border-2 rounded-lg bg-white drop-shadow-lg shadow-md'>
                                <img className='mx-auto  rounded-lg z-20 w-full' src={Company_3_} alt="" />
                                <h3 className='px-8 absolute top-32  z-50 text-xl lg:text-2xl font-semibold text-white hover:text-cyan-400 duration-300 '><Link to={`/`}>ASP .Net Software Developer Needed</Link></h3>
                                <div className=' px-8 py-4'>
                                    <div className='flex flex-wrap flex-row justify-between '>
                                    <span className='flex flex-col text-base'>
                                            <span className='text-xl text-dark font-bold'>BDT 25k-40k</span>
                                            <span>/Month</span>
                                        </span>
                                        <span className='flex flex-col text-base'>
                                            <span>Job Location:</span>
                                            <span>Dhaka</span>
                                        </span>
                                    </div>
                                    <p className='my-4 text-base'>Todays consumers are exposed to an ongoing feed of content and experiences across digital channels..</p>
                                    <Link className='text-base text-cyan-400 font-bold' to={'/'}>Read More...</Link>
                                </div>
                            </div>
                            <div className='blogs border-2 rounded-lg bg-white drop-shadow-lg shadow-md'>
                                <img className='mx-auto  rounded-lg z-20 w-full' src={Company_4_} alt="" />
                                <h3 className='px-8 absolute top-32  z-50 text-xl lg:text-2xl font-semibold text-white hover:text-cyan-400 duration-300 '><Link to={`/`}>ASP .Net Software Developer Needed</Link></h3>
                                <div className=' px-8 py-4'>
                                    <div className='flex flex-wrap flex-row justify-between '>
                                    <span className='flex flex-col text-base'>
                                            <span className='text-xl text-dark font-bold'>BDT 25k-40k</span>
                                            <span>/Month</span>
                                        </span>
                                        <span className='flex flex-col text-base'>
                                            <span>Job Location:</span>
                                            <span>Dhaka</span>
                                        </span>
                                    </div>
                                    <p className='my-4 text-base'>Todays consumers are exposed to an ongoing feed of content and experiences across digital channels..</p>
                                    <Link className='text-base text-cyan-400 font-bold' to={'/'}>Read More...</Link>
                                </div>
                            </div>
                            <div className='blogs border-2 rounded-lg bg-white drop-shadow-lg shadow-md'>
                                <img className='mx-auto  rounded-lg z-20 w-full' src={Company_5_} alt="" />
                                <h3 className='px-8 absolute top-32  z-50 text-xl lg:text-2xl font-semibold text-white hover:text-cyan-400 duration-300 '><Link to={`/`}>ASP .Net Software Developer Needed</Link></h3>
                                <div className=' px-8 py-4'>
                                    <div className='flex flex-wrap flex-row justify-between '>
                                    <span className='flex flex-col text-base'>
                                            <span className='text-xl text-dark font-bold'>BDT 25k-40k</span>
                                            <span>/Month</span>
                                        </span>
                                        <span className='flex flex-col text-base'>
                                            <span>Job Location:</span>
                                            <span>Dhaka</span>
                                        </span>
                                    </div>
                                    <p className='my-4 text-base'>Todays consumers are exposed to an ongoing feed of content and experiences across digital channels..</p>
                                    <Link className='text-base text-cyan-400 font-bold' to={'/'}>Read More...</Link>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default _17_JobandCarrer