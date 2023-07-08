import React, { Component } from 'react'
import Blog_Main from "../../images/blog_main.png";
import Blog_1 from "../../images/blog_1.svg";
import Blog_2 from "../../images/blog_2.svg";
import Blog_3 from "../../images/blog_3.svg";
import { Link } from 'react-router-dom';


export class _20_NewsAndBlogs extends Component {
    render() {
        return (
            <>
                <div className='px-4  md:px-8 py-10 lg:px-32 lg:py-10  2xl:px-[27%]'>
                    <div id='bradcrumbs' className='hidden mt-6 md:block   bg-white w-fit '>
                        <ul className='flex text-base text-web-color font-semibold'>
                            <li className='home-icon ps-4 pe-6 py-2 me-4'><Link to={"/"}><i class="fa-solid fa-house"></i> </Link></li>
                            <li className='breadcrumbs-icon  px-6 py-2 me-4'><Link to={"/"}>Home</Link></li>
                            <li className='px-6 py-2 me-4'>News & Blogs</li>
                        </ul>
                    </div>
                    <div className="main_blog mt-20 mb-8 lg:mb-16">
                        <div className='grid grid-cols-1  md:grid-cols-2  '>
                            <div className='h-fit'>
                                <img className='drop-shadow-md rounded-lg' src={Blog_Main} alt="" />
                            </div>
                            <div className=' md:ms-4  lg:ms-8 lg:pt-12 '>
                                <h6 className='text-lg mb-6 catagory_blog font-bold'>Technology</h6>
                                <h2 className='text-xl lg:text-2xl font-bold text-web-color vanila_text_hover_1'>Definition of Internet Service Provider (ISP)</h2>
                                <p className='mt-4'>Creativity has the power to create changes in the world in big and small ways. It has the power to..</p>
                                <p className="mt-4 text-web-color"><span className='me-2'><i class="fa-solid fa-calendar-days"></i></span>25-05-2023</p>
                            </div>
                        </div>
                    </div>
                    <div className='sub_blogs mt-8'>
                        <div className='grid gird-rows-3 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8'>
                            <div className='blogs border-2 bg-white hover:drop-shadow-lg shadow-md'>
                                <img className='mx-auto rounded-lg' src={Blog_1} alt="" />
                                <div className=' p-8'>
                                    <h6 className='text-md font-bold text-cyan-500'>Social Media</h6>
                                    <h3 className='text-lg font-semibold text-web-color'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error</h3>
                                    <p className='mt-4'>Todays consumers are exposed to an ongoing feed of content and experiences across digital channels..</p>
                                    <p className='mt-4 text-web-color font-semibold'><span><i class="fa-solid fa-calendar-days"></i></span> 25-05-2023 </p>
                                </div>
                            </div>
                            <div className='blogs border-2 bg-white hover:drop-shadow-lg shadow-md'>
                                <img className='mx-auto rounded-lg' src={Blog_2} alt="" />
                                <div className=' p-8'>
                                    <h6 className='text-md font-bold text-cyan-500'>Social Media</h6>
                                    <h3 className='text-lg font-semibold text-web-color'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error</h3>
                                    <p className='mt-4'>Todays consumers are exposed to an ongoing feed of content and experiences across digital channels..</p>
                                    <p className='mt-4 text-web-color font-semibold'><span><i class="fa-solid fa-calendar-days"></i></span> 25-05-2023 </p>
                                </div>
                            </div>
                            <div className='blogs border-2 bg-white hover:drop-shadow-lg shadow-md'>
                                <img className='mx-auto rounded-lg' src={Blog_3} alt="" />
                                <div className=' p-8'>
                                    <h6 className='text-md font-bold text-cyan-500'>Social Media</h6>
                                    <h3 className='text-lg font-semibold text-web-color'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error</h3>
                                    <p className='mt-4'>Todays consumers are exposed to an ongoing feed of content and experiences across digital channels..</p>
                                    <p className='mt-4 text-web-color font-semibold'><span><i class="fa-solid fa-calendar-days"></i></span> 25-05-2023 </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default _20_NewsAndBlogs 