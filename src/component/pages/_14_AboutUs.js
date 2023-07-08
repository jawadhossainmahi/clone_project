import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import AboutUS_1 from "../../images/AboutUs_1.png";
import AboutUS_2 from "../../images/AboutUs_2.png";
import AboutUS_3 from "../../images/AboutUs_3.png";
import AboutUS_4 from "../../images/AboutUs_8.svg";
import AboutUS_5 from "../../images/AboutUs_9.svg";
import AboutUS_6 from "../../images/AboutUs_10.svg";
import AboutUS_7 from "../../images/AboutUs_4.png";
import AboutUS_8 from "../../images/AboutUs_5.png";
import AboutUS_9 from "../../images/AboutUs_6.svg";
import AboutUS_10 from "../../images/AboutUs_7.svg";
import AboutUS_11 from "../../images/AboutUs_11.svg";



export class _14_AboutUs extends Component {

  constructor() {
    super()
    console.log('Hello I am a constructor form news component')
    this.state = {
      theposition: '',
      count: 0,
      counting_done: 0,
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll_1)
    console.log(this.state.count + " count is updated this is component did mount")

  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll_1)
  }

  listenToScroll_1 = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
    const why_Chose_us = document.getElementById('why_Chose_us');
    const count = why_Chose_us.querySelectorAll('.count');
    let y = why_Chose_us.offsetTop
    let interval = 1000;
    console.log(y, 'pos')
    // const height =
    //     document.documentElement.scrollHeight -
    //     document.documentElement.clientHeight
    // const scrolled = winScroll / height
    // const heigh = document.documentElement.scrollHeight
    // const heigh2 = document.documentElement.clientHeight
    if (y - 400 <= winScroll && this.state.counting_done === 0) {
      count.forEach((element) => {
        let startValue = parseInt(3*element.getAttribute('data-val')/4);
        let endValue = parseInt(element.getAttribute('data-val'));
        let duration = 0.00000000000000000001;
        let counter = setInterval(function () {
          startValue += 1;
          element.innerText = startValue;
          if (startValue === endValue) {
            clearInterval(counter);
          }
        }, duration)
      })
      this.setState({
        counting_done: 1,
      })
    }
    console.log(winScroll)
    this.setState({
      theposition: winScroll,
    })

  }


  render() {
    return (
      <>
        <div id='Company' className='text-center lg:text-left' style={{ backgroundColor: "#EDF0F8" }}>=
          <div className=' px-4  md:px-8 py-10 lg:px-32 lg:py-10  2xl:px-[27%]' >
            <div id='bradcrumbs' className='hidden mt-6 md:block   bg-white w-fit '>
              <ul className='flex text-base text-web-color font-semibold'>
                <li className='home-icon ps-4 pe-6 py-2 me-4'><Link to={"/"}><i class="fa-solid fa-house"></i> </Link></li>
                <li className='breadcrumbs-icon  px-6 py-2 me-4'><Link to={"/"}>Home</Link></li>
                <li className='px-6 py-2 me-4'>About Us</li>
              </ul>
            </div>
            <div className=' grid grid-cols-1 lg:grid-cols-2'>
              <div className='my-8 lg:my-auto'>
                <h1 className='text-2xl text-web-color font-bold lg:text-4xl mb-6'>About Us</h1>
                <p className='text-base'>Softifybd (BIN: 002920132-0302) is one of the leading software firm in Bangladesh. We work for diverse industrial sectors, including Internet Service Providers, Cable TV Networks, Education, Health, E-commerce, and many more.</p>
              </div>
              <div>
                <img className='mx-auto lg:mx-0 rounded-lg' src={AboutUS_1} alt="" />
              </div>
            </div>
          </div>
          <div className=' px-4  md:px-8 py-10 lg:px-32 lg:py-10  2xl:px-[27%]' style={{ backgroundColor: "white" }}>
            <h5 className='text-cyan-400 font-bold text-lg text-center mb-6'>Our Goal</h5>
            <h1 className='text-2xl lg:text-4xl text-web-color font-bold text-center mx-auto lg:w-2/3'>Our focus is on dizitalizing industries and markets</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 mt-24'>
              <div>
                <img className='mx-auto lg:mx-0 rounded-lg' src={AboutUS_2} alt="" />
              </div>
              <div>
                <p className='text-base'>Here at SoftifyBD, we monitor the industry and its market with the way the industry operates industry profiles and databases. We understand the industry's demand and geographically research a specific industry and its need to find room for development, remove errors, and bring sustainability. We follow various research models under consideration to develop and innovate, smoothening the overall growth and process of business execution.
                  SoftifyBD aims to empower your success by providing absolute guidance and offering customers and management the flexibility, with the visibility, control, and insight required to drive real value for any organization. We have started working on several industry solutions, including Internet Service Providers, Cable TV Networks, Education, Health, E-commerce, etc.

                  Softifybd Limited is a regular and custom software development company in Bangladesh specializing in custom software for various industries and technology platforms. We are committed to understanding challenges, recognizing opportunities, and bringing specific solutions to your company.</p>
              </div>
            </div>

          </div>
          <div className=' px-4  md:px-8 py-10 lg:px-32 lg:py-10  2xl:px-[27%]' >
            <div className='grid grid-cols-1 lg:grid-cols-2 my-10 gap-4'>
              <div>
                <h1 className='text-2xl font-bold text-web-color lg:text-4xl mb-6'>What We DO</h1>
                <p className='text-base pe-4'>At Softifybd Limited, we develop innovative and creative products and services that provide total communication and information solutions. Among a plethora of services, web design and development, tailor-made applications, ERPs, CRMs, e-commerce solutions, business to business applications, business to client applications, mobile applications, managed hosting and internet portal management are few that we offer. Satisfied clients around the globe bear testimony to the quality of our work. The general purpose of soft impact is to develop and promote advanced information technologies for multi-user operation. Our main strength is creativity, efficiency, diligence and dedication with teamwork, professionalism and open communication.</p>
              </div>
              <div>
                <img className='mx-auto lg:mx-0 rounded-lg' src={AboutUS_3} alt="" />
              </div>
            </div>
          </div>
          <div id='why_Chose_us' className=' px-4  md:px-8 py-10 lg:px-32 lg:py-10  2xl:px-[27%]' style={{ backgroundColor: "white" }} >
            <div className='grid grid-cols-1 lg:grid-cols-2 my-10 gap-4'>
              <div>
                <h1 className='text-lg text-cyan-400'>Who we are</h1>
                <h1 className='text-xl font-bold text-web-color lg:text-2xl mb-6'>We play with ideas where bringing solutions is our achievement</h1>
                <p className='text-base pe-4'>At Softifybd Limited, we develop innovative and creative products and services that provide total communication and information solutions. Among a plethora of services, web design and development, tailor-made applications, ERPs, CRMs, e-commerce solutions, business to business applications, business to client applications, mobile applications, managed hosting and internet portal management are few that we offer. Satisfied clients around the globe bear testimony to the quality of our work. The general purpose of soft impact is to develop and promote advanced information technologies for multi-user operation. Our main strength is creativity, efficiency, diligence and dedication with teamwork, professionalism and open communication.</p>
              </div>
              <div>
                <div className='flex flex-row lg:flex-col flex-wrap m-auto justify-center items-center gap-8'>
                  <div className='mx-auto flex '><span className='bg-[#EDF0F8] shadow-lg rounded-xl'><img className='m-4  ' src={AboutUS_4} alt="" /></span><span className='mx-4'><p className='text-2xl lg:text-4xl text-cyan-400 font-bold'  ><span className='count' data-val="10000">0</span><span>+</span></p><p className='mt-2 text-base'>Active Software user</p></span></div>
                  <div className='mx-auto flex '><span className='bg-[#EDF0F8] shadow-lg rounded-xl'><img className='m-4  ' src={AboutUS_5} alt="" /></span><span className='mx-4'><p className='text-2xl lg:text-4xl text-cyan-400 font-bold'  ><span className='count' data-val="1000">0</span><span>+</span></p><p className='mt-2 text-base'>Active Software user</p></span></div>
                  <div className='mx-auto flex '><span className='bg-[#EDF0F8] shadow-lg rounded-xl'><img className='m-4  ' src={AboutUS_6} alt="" /></span><span className='mx-4'><p className='text-2xl lg:text-4xl text-cyan-400 font-bold'  ><span className='count' data-val="8">0</span><span>+</span></p><p className='mt-2 text-base'>Active Software user</p></span></div>

                </div>
              </div>
            </div>
            <div>
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                // navigation={true
                modules={[Autoplay, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide style={{ paddingBottom: "3rem", }}>
                  <div className='grid grid-cols-1 lg:grid-cols-3'>
                    <div>
                      <img className='mx-auto w-52 rounded-xl ' src={AboutUS_7} alt="" />
                    </div>
                    <div className='text-black my-8 lg:my-auto col-span-2'>

                      <p className='text-base mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae numquam odit quod tempore aut quas cupiditate deleniti saepe veritatis, libero dignissimos veniam facilis vitae voluptate nostrum et temporibus esse ut?</p>
                      <p className='mb-2 text-lg font-semibold text-web-color'>Jawad Hossain Mahi</p>
                      <p className='text-base'>Web Developer</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide style={{ paddingBottom: "3rem", }}>
                  <div className='grid grid-cols-1 lg:grid-cols-3'>
                    <div>
                      <img className='mx-auto w-52 rounded-xl ' src={AboutUS_8} alt="" />
                    </div>
                    <div className='text-black my-8 lg:my-auto col-span-2'>

                      <p className='text-base mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae numquam odit quod tempore aut quas cupiditate deleniti saepe veritatis, libero dignissimos veniam facilis vitae voluptate nostrum et temporibus esse ut?</p>
                      <p className='mb-2 text-lg font-semibold text-web-color'>Jawad Hossain Mahi</p>
                      <p className='text-base'>Web Developer</p>
                    </div>
                  </div>
                </SwiperSlide>

              </Swiper>
            </div>
          </div>
          <div className='px-4  md:px-8 py-10 lg:px-32 lg:py-10  2xl:px-[27%]'>
            <div className="grid grid-cols-1 lg:grid-cols-2 ">
              <div className='my-auto lg:pe-8'>
                <h3 className="text-2xl lg:text-4xl text-web-color font-bold mb-4">Mission & Vision</h3>
                <p className='text-base'>
                  Our mission is to serve diverse groups dealing with the digital revolution and
                  automation challenges by concentrating on modern technologies in their respective industries.
                  Our company will positively impact each sector and build a new promising horizon.
                </p>
                <br />
                <p className='text-base'>
                  Our mission is to serve diverse groups dealing with the digital revolution and
                  automation challenges by concentrating on modern technologies in their respective industries.
                  Our company will positively impact each sector and build a new promising horizon.
                </p>
              </div>
              <div>
                <img className='rounded-lg' src={AboutUS_9} alt="" />
              </div>
            </div>
          </div>
          <div className='px-4  md:px-8 pt-4 lg:px-32 lg:pt-10  2xl:px-[27%]' style={{ background: "white",}}>
            <div className='mx-auto lg:mt-12 text-center'>
              <p className='text-center text-cyan-400 text-xl font-bold'>We are hiring</p>
              <h1 className='font-bold text-web-color text-center mx-auto my-4 text-2xl lg:text-4xl w-2/3'>If you’re looking for a career with purpose and
                want to make a difference, we’d love to hear from you.</h1>
              <button className=' vanila_btn_hover_1  text-white font-bold rounded-md  bg-cyan-400 px-3 py-3 lg:px-7 lg:py-3'><a href="/">Be A Part OF our team</a></button>
              <div style={{backgroundImage:`url(${AboutUS_11})`,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover" }}>
                <img className='mx-auto pt-32 rounded-lg' src={AboutUS_10} alt="" />

              </div>
            
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default _14_AboutUs