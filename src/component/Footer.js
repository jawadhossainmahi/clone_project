import React, { Component } from 'react'
// import Footer from "../images/footer-bg.png"
import Footer_Cont_1 from "../images/footer_content_1.png"
import Footer_Cont_2 from "../images/footer_content_2.png"
import Footer_Cont_3 from "../images/footer_content_3.png"
import Footer_Cont_4 from "../images/footer_content_4.png"
import Pay_With from "../images/Pay_with.png";


export class Footer extends Component {
    render() {
        return (
            <>
                <div id="footer" className='footer py-8 px-4 md:px-16 md:py-16 lg:px-32 2xl:px-[27%] bg-blue-400 text-white'>
                    <div className="Child_content">

                        <div className="hidden md:block">
                            <div className='grid grid-cols-4 '>
                                <div className='vanila_bg_color_1 flex justify-center items-center gap-4 px-6 py-6'>
                                    <img className='flex-auto' src={Footer_Cont_1} alt="" /><p className='flex-auto text-white text-md font-bold '>24/7 Customer Support</p>
                                </div>
                                <div className='vanila_bg_color_2 flex justify-center items-center gap-4 px-6 py-6'>
                                    <img className='flex-auto' src={Footer_Cont_2} alt="" /><p className='flex-auto text-white text-md font-bold '>24/7 Customer Support</p>
                                </div>
                                <div className='vanila_bg_color_1 flex justify-center items-center gap-4 px-6 py-6'>
                                    <img className='flex-auto' src={Footer_Cont_3} alt="" /><p className='flex-auto text-white text-md font-bold '>24/7 Customer Support</p>
                                </div>
                                <div className='vanila_bg_color_2 flex justify-center items-center gap-4 px-6 py-6'>
                                    <img className='flex-auto' src={Footer_Cont_4} alt="" /><p className='flex-auto text-white text-md font-bold '>24/7 Customer Support</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 mt-10">
                            <div className=' md:col-span-2'>
                                <h3 className='text-2xl font-bold text-cyan'>Products and Services</h3>
                                <div className='mt-8 font-bold flex flex-col md:flex-row'>
                                    <div className='flex-auto'>
                                        <p className='footer_hover mb-6  text-lg'>  <a href='/' className=' w-auto flex'><span className='text-cyan '><i class="fa fa-chevron-up fa-rotate-90 bold"></i></span> <p className='footer_service_list ms-2'>ISP Digital</p></a></p>
                                        <p className='footer_hover mb-6  text-lg'>  <a href='/' className=' w-auto flex'><span className='text-cyan '><i class="fa fa-chevron-up fa-rotate-90 bold"></i></span> <p className='footer_service_list ms-2'>ISP Digital</p></a></p>
                                        <p className='footer_hover mb-6  text-lg'>  <a href='/' className=' w-auto flex'><span className='text-cyan '><i class="fa fa-chevron-up fa-rotate-90 bold"></i></span> <p className='footer_service_list ms-2'>ISP Digital</p></a></p>
                                    </div >
                                    <div className='flex-auto'>
                                        <p className='footer_hover mb-6  text-lg'>  <a href='/' className=' w-auto flex'><span className='text-cyan '><i class="fa fa-chevron-up fa-rotate-90 bold"></i></span> <p className='footer_service_list ms-2'>ISP Digital</p></a></p>
                                        <p className='footer_hover mb-6  text-lg'>  <a href='/' className=' w-auto flex'><span className='text-cyan '><i class="fa fa-chevron-up fa-rotate-90 bold"></i></span> <p className='footer_service_list ms-2'>ISP Digital</p></a></p>
                                        <p className='footer_hover mb-6  text-lg'>  <a href='/' className=' w-auto flex'><span className='text-cyan '><i class="fa fa-chevron-up fa-rotate-90 bold"></i></span> <p className='footer_service_list ms-2'>ISP Digital</p></a></p>

                                    </div>
                                </div>
                            </div>
                            <div className='my-4 lg:my-0'>
                                <h3 className='text-2xl font-bold text-cyan'>Company</h3>
                                <div className='mt-8 font-bold'>
                                    <p className='footer_hover mb-6  text-lg'>  <a href='/' className=' w-auto flex'><span className='text-cyan '><i class="fa fa-chevron-up fa-rotate-90 bold"></i></span> <p className='footer_service_list ms-2'>About Us</p></a></p>
                                    <p className='footer_hover mb-6  text-lg'>  <a href='/' className=' w-auto flex'><span className='text-cyan '><i class="fa fa-chevron-up fa-rotate-90 bold"></i></span> <p className='footer_service_list ms-2'>About Us</p></a></p>
                                    <p className='footer_hover mb-6  text-lg'>  <a href='/' className=' w-auto flex'><span className='text-cyan '><i class="fa fa-chevron-up fa-rotate-90 bold"></i></span> <p className='footer_service_list ms-2'>About Us</p></a></p>
                                    <p className='footer_hover mb-6  text-lg'>  <a href='/' className=' w-auto flex'><span className='text-cyan '><i class="fa fa-chevron-up fa-rotate-90 bold"></i></span> <p className='footer_service_list ms-2'>About Us</p></a></p>
                                    <p className='footer_hover mb-6  text-lg'>  <a href='/' className=' w-auto flex'><span className='text-cyan '><i class="fa fa-chevron-up fa-rotate-90 bold"></i></span> <p className='footer_service_list ms-2'>About Us</p></a></p>
                                    <p className='footer_hover mb-6  text-lg'>  <a href='/' className=' w-auto flex'><span className='text-cyan '><i class="fa fa-chevron-up fa-rotate-90 bold"></i></span> <p className='footer_service_list ms-2'>About Us</p></a></p>
                                </div>
                            </div>
                            <div>
                                <div className='mb-4'>
                                    <h3 className='text-2xl font-bold text-cyan'>Contact SoftifyBD</h3>
                                    <div className='mt-4 font-bold '>
                                        <p className='ms-2 mb-6 text-lg footer_text_hover_parent '>  <a href='/' className=' w-auto flex'><span className=' '><i class="fa-regular fa-envelope"></i></span> <p className='footer_text_hover_child ms-2'>Get In touch</p></a></p>
                                    </div>
                                </div>
                                <div className='mb-4'>
                                    <h3 className='text-2xl font-bold text-cyan'>Connect Us</h3>
                                    <p className='mt-4 mb-8'>
                                        <span className='mx-2 text-2xl footer_text_hover_parent '><i class="fa-brands fa-square-facebook"></i></span>
                                        <span className='mx-2 text-2xl footer_text_hover_parent '><i class="fa-brands fa-instagram"></i></span>
                                        <span className='mx-2 text-2xl footer_text_hover_parent '><i class="fa-brands fa-linkedin"></i></span>
                                    </p>
                                </div>
                                <div className=''>
                                    <h3 className='text-2xl font-bold text-cyan'>SubsCribe</h3>
                                    <p className='mt-4 mb-8'>
                                        <form action="">
                                            <div className='vanila_border_color_1 rounded-3xl border flex justify-between md:justify-between lg:justify-between  items-center'>
                                                <input className='footer_Input_email w-40 md:w-[7rem] lg:w-32  px-4 md:pe-2 lg:px-4 py-2 bg-transparent border-cyan-700 text-white ' type="email" placeholder='example@mail.com ' required />
                                                <button type="submit" className='vanila_bg_color_3 py-2 px-3 m-1 lg:m-1 rounded-full text-lg'><i class="fa-regular fa-paper-plane"></i></button>
                                            </div>
                                        </form>
                                    </p>
                                </div>



                            </div>
                        </div>
                        <div className='mt-0 mb-4 lg:my-10'>
                            <img src={Pay_With} alt="" />
                        </div>
                        <hr />
                        <div className='lg:flex lg:justify-between mt-4 lg:mt-10 lg:mb-10'>
                            <div className=''>
                                <p className='text-md font-semibold'>©  2023 All Rights Reserved | SoftifyBD Ltd | Developed by: <a className='text-cyan' href="/">Drawoid |</a></p>
                                <p className='text-sm mt-4 hidden lg:visible'>Designed By: <a href="/" className='text-cyan'>Local Designer</a></p>
                            </div>
                            <div className='hidden lg:visible'>
                            <div className='flex justify-center '>
                                <a href="/" className='text-cyan text-lg mx-4 font-semibold'> Returned and Refund Policy</a>
                                <a href="/" className='text-cyan text-lg mx-4 font-semibold'> Privacy Notice</a>
                                <a href="/" className='text-cyan text-lg mx-4 font-semibold'> Terms Of Use</a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default Footer