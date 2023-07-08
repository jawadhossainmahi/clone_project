import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Partnership_0 from "../../images/partnership_0.png";
import ContactUs_1 from "../../images/ContactUs_1.png";
import ContactUs_2 from "../../images/ContactUs_2.svg";
import ContactUs_3 from "../../images/ContactUs_3.svg";
import ContactUs_4 from "../../images/ContactUs_4.svg";

export class _19_ContactUs extends Component {
    render() {
        return (
            <>
                <div className='px-4  md:px-8 py-10 lg:px-32 lg:py-10  2xl:px-[27%]'>
                    <div id='bradcrumbs' className='hidden mt-6 md:block rounded-md  bg-white w-fit '>
                        <ul className='flex text-base text-web-color font-semibold'>
                            <li className='home-icon ps-4 pe-6 py-2 me-4'><Link to={"/"}><i class="fa-solid fa-house"></i> </Link></li>
                            <li className='breadcrumbs-icon  px-6 py-2 me-4'><Link to={"/"}>Company</Link></li>
                            <li className='px-6 py-2 me-4'>Jobs and Career</li>
                        </ul>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 mt-8 '>
                        <div className='m-auto lg:my-auto mb-8 text-center lg:text-left'>
                            <h3 className='text-2xl font-bold text-web-color lg:text-4xl text-center lg:text-left'>Get in Touch</h3>
                            <p className='mt-6 text-base lg:pe-20 text-center md:text-left'>Use this form to communicate with us. Note: If you need any technical support query, visit us or submit a support case in Service Station.</p>
                            <button className=' text-center lg:text-left vanila_btn_hover_2  font-bold rounded-md  bg-white border hover:border-cyan-400 px-3 py-3 lg:px-7 lg:py-3 mt-4'><a href="/"> Talk to an expert</a></button>

                        </div>
                        <div>
                            <img className='mx-auto rounded-lg' src={ContactUs_1} alt="" />
                        </div>
                    </div>
                </div>

                <div className='px-4  md:px-8 py-10 lg:px-32 lg:py-10  2xl:px-[27%] bg-white'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
                        <div className='flex flex-col mb-8'>
                            <img className='w-[10rem] mx-auto  md:mx-0 rounded-lg' src={ContactUs_2} alt="" />
                            <h4 className='text-xl text-center md:text-left text-web-color font-semibold my-4 lg:text-2xl'>
                                Open a Support Ticket
                            </h4>
                            <p className='text-center md:text-left text-base mb-4'>Our support ticket offers an individual identity to your problem. You can use the ticket ID as a reference to connect with support team. This helps save time as there is no need to repeat the same concern. Our ticket system makes sure the right tickets go to the correct department, leaving you with an efficient solution.
                                ubmit a support case in Service Station.</p>
                            <button className='text-center mx-auto md:mx-0 md:text-left w-[10rem] vanila_btn_hover_2  font-bold rounded-md  bg-white border hover:border-cyan-400 px-3 py-3 lg:px-7 lg:py-3 mt-4'><a href="/">Create Ticket</a></button>
                        </div>
                        <div className='flex flex-col mb-8'>
                            <img className='w-[10rem] mx-auto  md:mx-0 rounded-lg' src={ContactUs_3} alt="" />
                            <h4 className='text-xl text-center md:text-left text-web-color font-semibold my-4 lg:text-2xl'>
                                Open a Support Ticket
                            </h4>
                            <p className='text-center md:text-left text-base mb-4'>Our support ticket offers an individual identity to your problem. You can use the ticket ID as a reference to connect with support team. This helps save time as there is no need to repeat the same concern. Our ticket system makes sure the right tickets go to the correct department, leaving you with an efficient solution.
                                ubmit a support case in Service Station.</p>
                            <button className='text-center mx-auto md:mx-0 md:text-left w-[10rem] vanila_btn_hover_2  font-bold rounded-md  bg-white border hover:border-cyan-400 px-3 py-3 lg:px-7 lg:py-3 mt-4'><a href="/">Create Ticket</a></button>
                        </div>
                        <div className='flex flex-col mb-8'>
                            <img className='w-[10rem] mx-auto  md:mx-0 rounded-lg' src={ContactUs_4} alt="" />
                            <h4 className='text-xl text-center md:text-left text-web-color font-semibold my-4 lg:text-2xl'>
                                Open a Support Ticket
                            </h4>
                            <p className='text-center md:text-left text-base mb-4'>Our support ticket offers an individual identity to your problem. You can use the ticket ID as a reference to connect with support team. This helps save time as there is no need to repeat the same concern. Our ticket system makes sure the right tickets go to the correct department, leaving you with an efficient solution.
                                ubmit a support case in Service Station.</p>
                            <button className='text-center mx-auto md:mx-0 md:text-left w-[10rem] vanila_btn_hover_2  font-bold rounded-md  bg-white border hover:border-cyan-400 px-3 py-3 lg:px-7 lg:py-3 mt-4'><a href="/">Create Ticket</a></button>
                        </div>

                    </div>
                </div >

                <div className='px-4  md:px-8 py-10 lg:px-32 lg:py-10  2xl:px-[27%]  '>
                    <h1 className='text-2xl text-web-color font-bold text-center lg:text-4xl mt-8 mb-4'>Pre Sales Enquires</h1>
                    <p className='text-base text-center'>Questions regarding our services? We're always happy to help.</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 mt-8">
                        <div id='partnership' className=' h-full w-full' style={{ backgroundImage: `url(${Partnership_0})` }}>
                            <div className=' bg-white mx-auto w-[80%]  my-20 pt-8 pb-8 ps-8 rounded-2xl'>
                                <div className='flex flex-row items-center gap-4'>
                                    <div>
                                        <h1 className='text-xl lg:text-2xl mb-3 '>Corporation Office</h1>
                                        <hr className='vanila_underline mb-6'></hr>
                                        <p className='text-base mb-4 flex flex-row vanila_text_hover_1'> <span className='text-base me-4 text-cyan-400 mb-4'><i class="fa-solid fa-location-dot"></i></span> <span>Navana La Shateau De Hussain, Flat # B4, Road # 27, Gulshan-01, Dhaka-1212</span> </p>
                                        <h1 className='text-xl lg:text-2xl mb-3'>Head Office</h1>
                                        <hr className='vanila_underline mb-6'></hr>
                                        <p className='text-base mb-4 flex flex-row'> <span className='text-base me-4 text-cyan-400 mb-4'><i class="fa-solid fa-location-dot"></i></span> <span>Navana La Shateau De Hussain, Flat # B4, Road # 27, Gulshan-01, Dhaka-1212</span> </p>
                                        <h1 className='text-xl lg:text-2xl mb-3'>Corporation Office</h1>
                                        <hr className='vanila_underline mb-6'></hr>
                                        <p className='text-base mb-4 flex flex-row '> <span className='text-base me-4 text-cyan-400 mb-4'><i class="fa-solid fa-envelope"></i></span> <span>Admin@gmail.com <br />Admin2@gmail.com</span> </p>
                                        <p className='text-base mb-4 flex flex-row '> <span className='text-base me-4 text-cyan-400 mb-4'><i class="fa-solid fa-phone"></i></span> <span>Admin@gmail.com <br />Admin2@gmail.com</span> </p>


                                    </div>
                                    <div>
                                        <div className='mb-4  text-center px-6  py-4 text-lg bg-blue-500 text-white'><i class="fa-brands fa-facebook-f"></i></div>
                                        <div className='mb-4 text-center py-4 px-6  text-lg bg-blue-700 text-white'><i class="fa-brands fa-linkedin-in"></i></div>
                                        <div className='mb-4 text-center py-4 px-6  text-lg bg-red-600 text-white'><i class="fa-brands fa-youtube"></i></div>
                                        <div className='mb-4 text-center py-4 px-6  text-lg bg-blue-400 text-white'><i class="fa-brands fa-twitter"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <form className='mt-8  w-2/3 mx-auto lg:mx-8 ' action="">

                                <label class="block mb-4">
                                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                        Full Name
                                    </span>
                                    <input type="text" name="text" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Type Full Name" />
                                </label>
                                <label class="block mb-4">
                                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                        Email Address
                                    </span>
                                    <input type="email" name="email" class="mt-1 px-3 py-2 peer bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Type Email Address" />
                                    <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                                        Please provide a valid email address.
                                    </p>
                                </label>
                                <label class="block mb-4">
                                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                        Your Subject
                                    </span>
                                    <input type="text" name="text" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Type Full Name" />
                                </label>
                                <label class="block mb-4">
                                    <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                        Your Quires
                                    </span>
                                    <textarea name="" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" id="" cols="10" rows="10"></textarea>
                                </label>

                                <button type='submit' className='mt-6 md:my-8 px-6 py-2 text-xl  vanila_btn_hover_1 '>Get a Qutos</button>
                            </form>
                        </div>
                    </div >
                </div >
                <div className='px-4  md:px-8 py-10 lg:px-32 lg:py-10  2xl:px-[27%] bg-white'>
                    <div className="grid grid-cols-3 ">
                        <div className='bg-blue-500 text-center py-8 lg:text-xl text-white'>
                            <span className='mx-4 text-2xl bg-blue-700 rounded-full p-2'><i class="fa-brands fa-telegram"></i></span><span>Join Telegram</span>
                        </div>
                        <div className='bg-cyan-400 text-center py-8 lg:text-xl text-white'>
                            <span className='mx-4 text-2xl bg-white text-cyan-400 rounded-full px-2 py-[6px]'><i class="fa-brands fa-skype"></i></span><span>Join Telegram</span>
                        </div>
                        <div className='bg-blue-500 text-center py-8 lg:text-xl text-white'>
                            <span className='mx-4 text-2xl bg-blue-700 rounded-full p-2'><i class="fa-brands fa-telegram"></i></span><span>Join Telegram</span>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default _19_ContactUs