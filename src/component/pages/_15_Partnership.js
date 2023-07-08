import React, { Component } from 'react'
import Partnership_0 from "../../images/partnership_0.png";
import Partnership_1 from "../../images/partnership_1.png";
import Partnership_2 from "../../images/partnership_2.png";
import Partnership_3 from "../../images/partnership_3.png";
import Partnership_4 from "../../images/partnership_4.png";
import Partnership_5 from "../../images/partnership_5.png";
import Human_In_Desk from "../../images/humen_in_desk.svg";
import { Link } from 'react-router-dom';

export class _15_Partnership extends Component {
  render() {
    return (
      <>
        <div id='Company' className='text-center lg:text-left ' style={{ backgroundColor: "#EDF0F8" }}>
          <div id='partnership' className=' px-4  md:px-8 py-10 lg:px-32 lg:py-10  2xl:px-[27%]' style={{backgroundImage:`url(${Partnership_0})`}} >
            <div id='bradcrumbs' className='hidden mt-6 md:block   bg-white w-fit '>
              <ul className='flex text-base text-web-color font-semibold'>
                <li className='home-icon ps-4 pe-6 py-2 me-4'><Link to={"/"}><i class="fa-solid fa-house"></i> </Link></li>
                <li className='breadcrumbs-icon  px-6 py-2 me-4'><Link to={"/"}>Home</Link></li>
                <li className='px-6 py-2 me-4'>Partnerships</li>
              </ul>
            </div>
            <div className='mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8'>
              <div className='my-auto'>
                <h3 className='text-white font-bold text-2xl lg:text-4xl mb-4'>The power of partnerships</h3>
                <p className='text-base text-white'>SoftifyBD believes that companies have the best chance of succeeding when businesses work together. There is no better way to solve problems with specialists than to form internal partnerships amongst departments or collaborations across companies.</p>
              </div>
              <div>
                <img className='mx-auto rounded-lg' src={Partnership_1} alt="" />
              </div>
            </div>
          </div>
          <div className=' px-4  md:px-8 py-10 lg:px-32 lg:py-10  2xl:px-[27%]' style={{ background: "white" }}>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6  lg:gap-8 lg:mt-20'>
              <div className='md:text-left text-center'>
                <img className='mx-auto md:mx-0 rounded-lg' src={Partnership_2} alt="" />
                <h3 className='text-2xl text-web-color font-bold my-4'>Find a Partner</h3>
                <p className='text-base mb-4  md:pe-20'>Regardless of your company size or industry our partners can help you buy, build, implement, service, support and run the SoftifyBD solution that best fits your unique needs. Find a trusted professional to work with today.</p> <button className=' vanila_btn_hover_1  font-bold rounded-md  bg-white border  px-3 py-3 lg:px-7 lg:py-3   '><a href="/"> Talk to an expert</a></button>
              </div>
              <div className='md:text-left text-center'>
                <img className='mx-auto md:mx-0 rounded-lg' src={Partnership_3} alt="" />
                <h3 className='text-2xl text-web-color font-bold my-4'>Find a Partner</h3>
                <p className='text-base mb-4  md:pe-20'>Regardless of your company size or industry our partners can help you buy, build, implement, service, support and run the SoftifyBD solution that best fits your unique needs. Find a trusted professional to work with today.</p> <button className=' vanila_btn_hover_1  font-bold rounded-md  bg-white border  px-3 py-3 lg:px-7 lg:py-3   '><a href="/"> Talk to an expert</a></button>
              </div>
              <div className='md:text-left text-center'>
                <img className='mx-auto md:mx-0 rounded-lg' src={Partnership_4} alt="" />
                <h3 className='text-2xl text-web-color font-bold my-4'>Find a Partner</h3>
                <p className='text-base mb-4  md:pe-20'>Regardless of your company size or industry our partners can help you buy, build, implement, service, support and run the SoftifyBD solution that best fits your unique needs. Find a trusted professional to work with today.</p> <button className=' vanila_btn_hover_1  font-bold rounded-md  bg-white border  px-3 py-3 lg:px-7 lg:py-3   '><a href="/"> Talk to an expert</a></button>
              </div>
              <div className='md:text-left text-center'>
                <img className='mx-auto md:mx-0 rounded-lg' src={Partnership_5} alt="" />
                <h3 className='text-2xl text-web-color font-bold my-4'>Find a Partner</h3>
                <p className='text-base mb-4  md:pe-20'>Regardless of your company size or industry our partners can help you buy, build, implement, service, support and run the SoftifyBD solution that best fits your unique needs. Find a trusted professional to work with today.</p> <button className=' vanila_btn_hover_1  font-bold rounded-md  bg-white border  px-3 py-3 lg:px-7 lg:py-3   '><a href="/"> Talk to an expert</a></button>
              </div>
             

            </div>
          </div>

          <div className=' px-4  md:px-8 py-10 lg:px-32 lg:py-10  2xl:px-[27%]' >
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              <div className=" ">
                <img className='w-full rounded-lg' src={Human_In_Desk} alt="" />
              </div>
              <div className=' '>
                <div className="mt-8 text-center lg:text-left lg:mt-24 lg:ms-10 align-middle items-center ">
                  <h2 className='text-web-color text-2xl lg:text-3xl font-bold'>Ask Human</h2>
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

export default _15_Partnership