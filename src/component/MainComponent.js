import React, { Component } from 'react';
import Crousel_Main_1 from "../images/crousel_main.jpg";
import Crousel_Main_2 from "../images/crousel_main_1.jpg";
import Crousel_Main_3 from "../images/crousel_main_2.png";
import Crousel_Main_4 from "../images/crousel_main_3.jpg";
import Image1 from "../images/card (1).svg";
import Image2 from "../images/card (2).svg";
import Image3 from "../images/card (3).svg";
import Image4 from "../images/card (4).svg";
import Product_1 from "../images/product_1.png"
import Product_2 from "../images/product_2.png"
import Product_3 from "../images/product_3.png"
import Product_4 from "../images/product_4.png"
import Product_Display_1 from "../images/product_display_1.png"
import Product_Display_2 from "../images/product_display_2.png"
import Product_Display_3 from "../images/product_display_3.png"
import Product_Display_4 from "../images/product_display_4.png"
import Checked from "../images/checked.png"
import Human_In_Desk from "../images/humen_in_desk.svg";
import Chose_Card_1 from "../images/chose_us_card.svg";
import Chose_Card_2 from "../images/chose_us_card (2).svg";
import Chose_Card_3 from "../images/chose_us_card (3).svg";
import Chose_Card_4 from "../images/chose_us_card (4).svg";
import What_WE_Do from "../images/What_WE_Do.png";
import Client_1 from "../images/client_1.png";
import Client_2 from "../images/client_2.png";
import Client_3 from "../images/client_3.png";
import Client_4 from "../images/client_4.png";
import Client_5 from "../images/client_5.png";
import Client_6 from "../images/client_6.png";
import Blog_Main from "../images/blog_main.png";
import Blog_1 from "../images/blog_1.svg";
import Blog_2 from "../images/blog_2.svg";
import Blog_3 from "../images/blog_3.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectFade, Parallax, Pagination, Navigation, Autoplay } from "swiper";



export class MainComponent extends Component {
    constructor() {
        super()
        this.state = {
            theposition: '',
            count: 0,
            counting_done: 0,
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll_1)

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
        let interval = 50;
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
                // let duration = Math.floor(interval / endValue);
                let duration = 0.0000000001;
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

        this.setState({
            theposition: winScroll,
        })

    }

    // our producst section starts
    productsChange(element, id) {
        let all_products = document.getElementsByClassName('all_products');
        for (let index = 0; index < all_products.length; index++) {
            if (index.toString() === id) {
                continue;
            }
            const ele1 = all_products[index];
            ele1.classList.remove('clicked_product')
        }
        let clicked_product = element.target.closest('.all_products');
        clicked_product.classList.add('clicked_product')
        let change_container = document.getElementsByClassName('change_container');
        for (let index = 0; index < change_container.length; index++) {
            if (index.toString() === id) {
                document.getElementById(id).classList.remove('vanila_products_hidden');
                document.getElementById(id).classList.add('vanila_products_vissible');
                continue;
            }
            const ele2 = change_container[index];
            ele2.classList.add('vanila_products_hidden')
            // ele2.classList.add('hidden')
            ele2.classList.remove('vanila_products_vissible')


        }


    }

    // our producst section ends

    // Client comment section starts 
    Read_Less_More(element) {
        let comment = element.target.closest('.comment')
        let dots = comment.getElementsByClassName('dots')[0]
        let more = comment.getElementsByClassName('more')[0]
        let read_less_more_btn = comment.getElementsByClassName('read_less_more_btn')[0]
        if (dots.style.display === 'none') {
            dots.style.display = 'inline';
            more.style.display = "none";
            read_less_more_btn.innerText = "Read More"
        }
        else {
            dots.style.display = 'none';
            more.style.display = 'block'
            read_less_more_btn.innerText = "Read Less"
        }
        setTimeout(() => {
            dots.style.display = 'inline';
            more.style.display = "none";
            read_less_more_btn.innerText = "Read More"
        }, 5000);
    }
    // Client comment section ends 

    // freequiently ask question section starts
    hiddenClicker(element) {
        let parent = element.target.closest('.Frequently_ask_box_main')
        let icon = parent.getElementsByClassName('fa-solid')[0]
        let boxs = parent.getElementsByClassName('Frequently_ask_box')[0]
        let main_box = document.getElementsByClassName('Frequently_ask_box')
        if (!boxs.classList.contains('Frequently_ask_box_vissible')) {
            for (let index = 0; index < main_box.length; index++) {
                const element = main_box[index];
                if (element.classList.contains('Frequently_ask_box_vissible')) {
                    element.classList.remove('Frequently_ask_box_vissible')
                    let sub_parent = element.closest('.Frequently_ask_box_main')
                    let icon2 = sub_parent.getElementsByClassName('fa-solid')[0]
                    icon2.classList.remove('fa-circle-xmark')
                    icon2.classList.add('fa-chevron-down')
                }
            }
            boxs.classList.add("Frequently_ask_box_vissible")
            icon.classList.remove('fa-chevron-down')
            icon.classList.add('fa-circle-xmark')
        }
        else {
            for (let index = 0; index < main_box.length; index++) {
                const element = main_box[index];
                if (element.classList.contains('Frequently_ask_box_vissible')) {
                    element.classList.remove('Frequently_ask_box_vissible')
                    let sub_parent = element.closest('.Frequently_ask_box_main')
                    let icon2 = sub_parent.getElementsByClassName('fa-solid')[0]
                    icon2.classList.remove('fa-circle-xmark')
                    icon2.classList.add('fa-chevron-down')
                }
            }
            boxs.classList.remove("Frequently_ask_box_vissible")
            icon.classList.add('fa-chevron-down')
            icon.classList.remove('fa-circle-xmark')
        }

    }
    // freequiently ask question section ends
    render() {
        return (
            <>
                <div id='main_component ' className="main_component p-0 mx-0 ">
                    <section id='slider' className='mb-20 ' style={{ height: "80vh" }}>
                        <Swiper
                            style={{
                                "--swiper-navigation-color": "#fff",
                                "--swiper-pagination-color": "#fff",
                            }}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            effect={'fade'}
                            speed={1500}
                            // parallax={true}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, EffectFade, Pagination, Navigation]}
                            className="mySwiper"
                        >

                            <SwiperSlide className='' style={{ height: '40rem', }} >
                                <div slot="container-start" className="vanila_slide_container h-full  w-full " style={{ backgroundImage: `url(${Crousel_Main_1})`, backgroundPosition: 'center', backgroundSize: 'cover', }}>
                                    <div className='pt-16 ps-12 lg:pt-20 lg:ps-32 2xl:mx-[27%]'>
                                        <div className="title font-bold text-3xl lg:text-5xl" data-swiper-parallax="-300">
                                            Slide 1
                                        </div>
                                        <div className="subtitle leading-snug  my-6 text-base w-3/4 lg:w-96 lg:text-sm" data-swiper-parallax="-200">
                                            <p>
                                                Edufy (An education management system) is developed to bridge the information digitally to remove gaps that may exist in the school's management process and automate various school activities.
                                            </p>
                                        </div>
                                        <div className="slide_button  text-base w-3/4 lg:w-96 lg:text-sm" data-swiper-parallax="-100">

                                            <button className=' flex-initial vanila_btn_hover_1  text-white font-bold rounded-md  bg-cyan-400 px-3 py-3 lg:px-7 lg:py-3'><a href="/">Talk to an expert</a></button>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide className='' style={{ height: '40rem' }} >
                                <div slot="container-start" className="vanila_slide_container h-full  w-full " style={{ backgroundImage: `url(${Crousel_Main_2})`, backgroundPosition: 'center', backgroundSize: 'cover', }}>
                                    <div className='pt-16 ps-12 lg:pt-20 lg:ps-32 2xl:mx-[27%]'>
                                        <div className="title font-bold text-3xl lg:text-5xl" data-swiper-parallax="-300">
                                            Slide 2
                                        </div>
                                        <div className="subtitle leading-snug  my-6 text-base w-3/4 lg:w-96 lg:text-sm" data-swiper-parallax="-200">
                                            <p>
                                                Edufy (An education management system) is developed to bridge the information digitally to remove gaps that may exist in the school's management process and automate various school activities.
                                            </p>
                                        </div>
                                        <div className="slide_button  text-base w-3/4 lg:w-96 lg:text-sm" data-swiper-parallax="-100">

                                            <button className=' flex-initial vanila_btn_hover_1  text-white font-bold rounded-md  bg-cyan-400 px-3 py-3 lg:px-7 lg:py-3'><a href="/">Talk to an expert</a></button>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide className='' style={{ height: '40rem' }} >
                                <div slot="container-start" className="vanila_slide_container h-full  w-full " style={{ backgroundImage: `url(${Crousel_Main_3})`, backgroundPosition: 'center', backgroundSize: 'cover', }}>
                                    <div className='pt-16 ps-12 lg:pt-20 lg:ps-32 2xl:mx-[27%]'>
                                        <div className="title font-bold text-3xl lg:text-5xl" data-swiper-parallax="-300">
                                            Slide 3
                                        </div>
                                        <div className="subtitle leading-snug  my-6 text-base w-3/4 lg:w-96 lg:text-sm" data-swiper-parallax="-200">
                                            <p>
                                                Edufy (An education management system) is developed to bridge the information digitally to remove gaps that may exist in the school's management process and automate various school activities.
                                            </p>
                                        </div>
                                        <div className="slide_button  text-base w-3/4 lg:w-96 lg:text-sm" data-swiper-parallax="-100">

                                            <button className=' flex-initial vanila_btn_hover_1  text-white font-bold rounded-md  bg-cyan-400 px-3 py-3 lg:px-7 lg:py-3'><a href="/">Talk to an expert</a></button>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide className='' style={{ height: '40rem' }} >
                                <div slot="container-start" className="vanila_slide_container h-full  w-full " style={{ backgroundImage: `url(${Crousel_Main_4})`, backgroundPosition: 'center', backgroundSize: 'cover', }}>
                                    <div className='pt-16 ps-12 lg:pt-20 lg:ps-32 2xl:mx-[27%]'>
                                        <div className="title font-bold text-3xl lg:text-5xl" data-swiper-parallax="-300">
                                            Slide 4
                                        </div>
                                        <div className="subtitle leading-snug  my-6 text-base w-3/4 lg:w-96 lg:text-sm" data-swiper-parallax="-200">
                                            <p>
                                                Edufy (An education management system) is developed to bridge the information digitally to remove gaps that may exist in the school's management process and automate various school activities.
                                            </p>
                                        </div>
                                        <div className="slide_button  text-base w-3/4 lg:w-96 lg:text-sm" data-swiper-parallax="-100">

                                            <button className=' flex-initial vanila_btn_hover_1  text-white font-bold rounded-md  bg-cyan-400 px-3 py-3 lg:px-7 lg:py-3'><a href="/">Talk to an expert</a></button>
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                        </Swiper>
                    </section>
                    {/* skill section starts  */}
                    <section id="skills">
                        <div className="grid text-center grid-cols-1 gap-8  mx-4 md:grid-cols-2 md:mx-16   lg:grid-cols-4   lg:gap-14 lg:mb-2 lg:px-28 lg:mx-auto 2xl:mx-auto 2xl:px-[27%] 2xl:gap-8">
                            <div className="card vanila_card rounded-lg p-5   xl:w-64  2xl:w-[100%]" >
                                <div className="text-center ">
                                    <img src={Image1} className="mx-auto " alt="..." />
                                </div>
                                <div className="px-3 mt-5 pt-0">
                                    <h5 className="font-bold text-lg xl:text-xl mb-3">Innovative</h5>
                                    <p className="text-center text-md font-extralight" >
                                        Explore new ideas to improve service efficiency & profitability with us.</p>
                                </div>
                            </div>
                            <div className="card vanila_card rounded-lg p-5   xl:w-64   2xl:w-[100%]" >
                                <div className="text-center">
                                    <img src={Image2} className="mx-auto " alt="..." />
                                </div>
                                <div className="px-3 mt-5 pt-0">
                                    <h5 className="font-bold text-lg xl:text-xl mb-3">Innovative</h5>
                                    <p className="text-center text-md font-extralight" >
                                        Explore new ideas to improve service efficiency & profitability with us.</p>
                                </div>
                            </div>
                            <div className="card vanila_card rounded-lg p-5  xl:w-64  2xl:w-[100%]" >
                                <div className="text-center">
                                    <img src={Image3} className="mx-auto " alt="..." />
                                </div>
                                <div className="px-3 mt-5 pt-0">
                                    <h5 className="font-bold text-lg xl:text-xl mb-3">Innovative</h5>
                                    <p className="text-center text-md font-extralight" >
                                        Explore new ideas to improve service efficiency & profitability with us.</p>
                                </div>
                            </div>
                            <div className="card vanila_card rounded-lg p-5  xl:w-64  2xl:w-[100%]" >
                                <div className="text-center">
                                    <img src={Image4} className="mx-auto " alt="..." />
                                </div>
                                <div className="px-3 mt-5 pt-0">
                                    <h5 className="font-bold text-lg xl:text-xl mb-3">Innovative</h5>
                                    <p className="text-center text-md font-extralight" >
                                        Explore new ideas to improve service efficiency & profitability with us.</p>
                                </div>
                            </div>

                        </div>
                    </section>
                    {/* skill section ends  */}
                    {/* our products starts */}
                    <section id='our_products' className='mt-16 lg:mt-28'>
                        <div className=''>
                            <h2 className='text-2xl lg:text-3xl font-bold text-web-color text-center mb-6 lg:mb-20'>Explor Our Products</h2>
                            <div className='vanila_swiper text-center px-4 md:px-16 lg:px-28 2xl:px-[27%]'>
                                <Swiper

                                    slidesPerView={1}
                                    spaceBetween={10}
                                    grabCursor={true}
                                    pagination={true}
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
                                    className="mySwiper  mx-0 px-0 "
                                >
                                    <SwiperSlide className='flex justify-center items-center ' style={{ paddingBottom: "2rem", }}>
                                        <div className=' all_products clicked_product   bg-white  h-28' onClick={(element) => { this.productsChange(element, '0') }} >
                                            <div className='lg:mx-16'>

                                                <img className='p-4 mx-auto w-32' src={Product_1} alt="" />
                                                <h6 className='text-web-color text-md lg:text-lg mb-4'>ISP Digital 1</h6>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className='flex justify-center items-center ' style={{ paddingBottom: "2rem", }}>
                                        <div className=' all_products   bg-white  h-28' onClick={(element) => { this.productsChange(element, '1') }} >
                                            <div className='lg:mx-16'>

                                                <img className='p-4 mx-auto w-32' src={Product_4} alt="" />
                                                <h6 className='text-web-color text-md lg:text-lg mb-4'>ISP Digital 1</h6>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className='flex justify-center items-center ' style={{ paddingBottom: "2rem", }}>
                                        <div className=' all_products   bg-white  h-28' onClick={(element) => { this.productsChange(element, '2') }} >
                                            <div className='lg:mx-16'>

                                                <img className='p-4 mx-auto w-32' src={Product_4} alt="" />
                                                <h6 className='text-web-color text-md lg:text-lg mb-4'>ISP Digital 1</h6>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className='flex justify-center items-center ' style={{ paddingBottom: "2rem", }}>
                                        <div className=' all_products   bg-white  h-28' onClick={(element) => { this.productsChange(element, '3') }} >
                                            <div className='lg:mx-16'>

                                                <img className='p-4 mx-auto w-32' src={Product_4} alt="" />
                                                <h6 className='text-web-color text-md lg:text-lg mb-4'>ISP Digital 1</h6>
                                            </div>
                                        </div>
                                    </SwiperSlide>




                                </Swiper>
                            </div>
                            <div className=' bg-white mt-10'>
                                <div id='0' className='change_container '>
                                    <div className="grid grid-cols-1 px-6 py-4 md:px-16 lg:grid-cols-2 lg:mt-16 lg:px-32 lg:py-16 2xl:px-[27%]">
                                        <div>
                                            <h1 className='text-xl lg:text-3xl text-web-color font-sans  '>Isp digital</h1>
                                            <div className='vanila_underline mt-2 mb-4'></div>
                                            <p className='text-sm lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quia pariatur eum, labore at commodi illum voluptatum. Vitae fugit ad facilis dolor consequuntur aspernatur, illum dolores quos nobis ducimus molestiae ipsum harum ab natus corporis. <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolorum officia, id numquam, error quos atque sit tenetur ipsam a rem quia quidem repellendus, deleniti eveniet dolores doloremque ratione maxime ipsa officiis! Sunt, odio sit?</p>
                                            <div className="grid grid-cols-2 mt-4">
                                                <div className='flex justify-start items-center  mb-4'><img className='w-10 h-10 lg:w-16 lg:h-16' src={Checked} alt="" /> <span className='ms-2 mt-3 text-sm lg:text-base'>Client Satisfaction</span></div>
                                                <div className='flex justify-start items-center  mb-4'><img className='w-10 h-10 lg:w-16 lg:h-16' src={Checked} alt="" /> <span className='ms-2 mt-3 text-sm lg:text-base'>Client Satisfaction</span></div>
                                                <div className='flex justify-start items-center  mb-4'><img className='w-10 h-10 lg:w-16 lg:h-16' src={Checked} alt="" /> <span className='ms-2 mt-3 text-sm lg:text-base'>Client Satisfaction</span></div>
                                                <div className='flex justify-start items-center  mb-4'><img className='w-10 h-10 lg:w-16 lg:h-16' src={Checked} alt="" /> <span className='ms-2 mt-3 text-sm lg:text-base'>Client Satisfaction</span></div>

                                            </div>
                                            <button className='mt-4'><a className='px-4 py-2  vanila_btn_hover_1 text-base  lg:text-lg text-white rounded-[4px]' href="/">Know More</a></button>
                                        </div>
                                        <div>
                                            <div className='mt-8 lg:mt-24 lg:ms-12 rounded-lg'>

                                                <img className='rounded-lg' src={Product_Display_1} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id='1' className='change_container vanila_products_hidden'>
                                    <div className="grid grid-cols-1 px-6 py-4 md:px-16 lg:grid-cols-2 lg:mt-16 lg:px-32 lg:py-16 2xl:px-[27%]">
                                        <div>
                                            <h1 className='text-xl lg:text-3xl text-web-color font-sans  '>Isp digital</h1>
                                            <div className='vanila_underline mt-2 mb-4'></div>
                                            <p className='text-sm lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quia pariatur eum, labore at commodi illum voluptatum. Vitae fugit ad facilis dolor consequuntur aspernatur, illum dolores quos nobis ducimus molestiae ipsum harum ab natus corporis. <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolorum officia, id numquam, error quos atque sit tenetur ipsam a rem quia quidem repellendus, deleniti eveniet dolores doloremque ratione maxime ipsa officiis! Sunt, odio sit?</p>
                                            <div className="grid grid-cols-2 mt-4">
                                                <div className='flex justify-start items-center  mb-4'><img className='w-10 h-10 lg:w-16 lg:h-16' src={Checked} alt="" /> <span className='ms-2 mt-3 text-sm lg:text-base'>Client Satisfaction</span></div>
                                                <div className='flex justify-start items-center  mb-4'><img className='w-10 h-10 lg:w-16 lg:h-16' src={Checked} alt="" /> <span className='ms-2 mt-3 text-sm lg:text-base'>Client Satisfaction</span></div>
                                                <div className='flex justify-start items-center  mb-4'><img className='w-10 h-10 lg:w-16 lg:h-16' src={Checked} alt="" /> <span className='ms-2 mt-3 text-sm lg:text-base'>Client Satisfaction</span></div>
                                                <div className='flex justify-start items-center  mb-4'><img className='w-10 h-10 lg:w-16 lg:h-16' src={Checked} alt="" /> <span className='ms-2 mt-3 text-sm lg:text-base'>Client Satisfaction</span></div>

                                            </div>
                                            <button className='mt-4'><a className='px-4 py-2 vanila_btn_hover_1 text-base  lg:text-lg text-white rounded-[4px]' href="/">Know More</a></button>
                                        </div>
                                        <div>
                                            <div className='mt-8 lg:mt-24 lg:ms-12'>

                                                <img className='rounded-lg' src={Product_Display_2} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id='2' className='change_container vanila_products_hidden '>
                                    <div className="grid grid-cols-1 px-6 py-4 md:px-16 lg:grid-cols-2 lg:mt-16 lg:px-32 lg:py-16 2xl:px-[27%]">
                                        <div>
                                            <h1 className='text-xl lg:text-3xl text-web-color font-sans  '>Isp digital</h1>
                                            <div className='vanila_underline mt-2 mb-4'></div>
                                            <p className='text-sm lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quia pariatur eum, labore at commodi illum voluptatum. Vitae fugit ad facilis dolor consequuntur aspernatur, illum dolores quos nobis ducimus molestiae ipsum harum ab natus corporis. <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolorum officia, id numquam, error quos atque sit tenetur ipsam a rem quia quidem repellendus, deleniti eveniet dolores doloremque ratione maxime ipsa officiis! Sunt, odio sit?</p>
                                            <div className="grid grid-cols-2 mt-4">
                                                <div className='flex justify-start items-center  mb-4'><img className='w-10 h-10 lg:w-16 lg:h-16' src={Checked} alt="" /> <span className='ms-2 mt-3 text-sm lg:text-base'>Client Satisfaction</span></div>
                                                <div className='flex justify-start items-center  mb-4'><img className='w-10 h-10 lg:w-16 lg:h-16' src={Checked} alt="" /> <span className='ms-2 mt-3 text-sm lg:text-base'>Client Satisfaction</span></div>
                                                <div className='flex justify-start items-center  mb-4'><img className='w-10 h-10 lg:w-16 lg:h-16' src={Checked} alt="" /> <span className='ms-2 mt-3 text-sm lg:text-base'>Client Satisfaction</span></div>
                                                <div className='flex justify-start items-center  mb-4'><img className='w-10 h-10 lg:w-16 lg:h-16' src={Checked} alt="" /> <span className='ms-2 mt-3 text-sm lg:text-base'>Client Satisfaction</span></div>

                                            </div>
                                            <button className='mt-4'><a className='px-4 py-2 vanila_btn_hover_1 text-base  lg:text-lg text-white rounded-[4px] ' href="/">Know More</a></button>
                                        </div>
                                        <div>
                                            <div className='mt-8 lg:mt-24 lg:ms-12'>

                                                <img className='rounded-lg' src={Product_Display_3} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id='3' className='change_container vanila_products_hidden'>
                                    <div className="grid grid-cols-1 px-6 py-4 md:px-16 lg:grid-cols-2 lg:mt-16 lg:px-32 lg:py-16 2xl:px-[27%]">
                                        <div>
                                            <h1 className='text-xl lg:text-3xl text-web-color font-sans  '>Isp digital</h1>
                                            <div className='vanila_underline mt-2 mb-4'></div>
                                            <p className='text-sm lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quia pariatur eum, labore at commodi illum voluptatum. Vitae fugit ad facilis dolor consequuntur aspernatur, illum dolores quos nobis ducimus molestiae ipsum harum ab natus corporis. <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolorum officia, id numquam, error quos atque sit tenetur ipsam a rem quia quidem repellendus, deleniti eveniet dolores doloremque ratione maxime ipsa officiis! Sunt, odio sit?</p>
                                            <div className="grid grid-cols-2 mt-4">
                                                <div className='flex justify-start items-center  mb-4'><img className='w-10 h-10 lg:w-16 lg:h-16' src={Checked} alt="" /> <span className='ms-2 mt-3 text-sm lg:text-base'>Client Satisfaction</span></div>
                                                <div className='flex justify-start items-center  mb-4'><img className='w-10 h-10 lg:w-16 lg:h-16' src={Checked} alt="" /> <span className='ms-2 mt-3 text-sm lg:text-base'>Client Satisfaction</span></div>
                                                <div className='flex justify-start items-center  mb-4'><img className='w-10 h-10 lg:w-16 lg:h-16' src={Checked} alt="" /> <span className='ms-2 mt-3 text-sm lg:text-base'>Client Satisfaction</span></div>
                                                <div className='flex justify-start items-center  mb-4'><img className='w-10 h-10 lg:w-16 lg:h-16' src={Checked} alt="" /> <span className='ms-2 mt-3 text-sm lg:text-base'>Client Satisfaction</span></div>

                                            </div>
                                            <button className='mt-4'><a className='px-4 py-2 vanila_btn_hover_1 text-base  lg:text-lg text-white rounded-[4px]' href="/">Know More</a></button>
                                        </div>
                                        <div>
                                            <div className='mt-8 lg:mt-24 lg:ms-12'>

                                                <img className='rounded-lg' src={Product_Display_4} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </section>
                    {/* our products ends */}
                    {/* Asking section starts  */}
                    <section id='Asking_section' className=" mx-auto pt-10 px-6 mb-20 md:mx-16  lg:pt-32 lg:px-28 lg:mb-28 2xl:mx-[27%] 2xl:px-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 ">
                            <div className=" ">
                                <img className='w-full' src={Human_In_Desk} alt="" />
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
                    </section>
                    {/* Asking section ends  */}
                    {/* Client Comment section starts  */}
                    <section id="client_Comments" className='text-center pb-8  lg:p-16   2xl:px-[27%]'>

                        <h1 className='text-white font-bold text-2xl lg:text-3xl pt-7 px-8  mb-6  lg:pt-24 lg:px-72'>Here’s what our clients say about us & hope to see your testimonial here soon!</h1>
                        <div className="lg:h-full mx-8  lg:w-2/3  lg:mx-auto  bg-white px-2 rounded-lg ">
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper "
                            > 
                                <SwiperSlide className='px-12 ' >
                                    <div className=' comment  text-center mb-5  pt-6 pb-2 lg:py-6 lg:px-16  text-black rounded-lg w-full'>
                                        <h3 className='text-2xl font-bold mb-5'>Heading</h3>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel<span className="dots">...</span><span className='more ' style={{ display: "none" }}>erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.fasdfasdfasdfasdfasdf</span>
                                        <p onClick={this.Read_Less_More} className='read_less_more_btn text-cyan mt-3 font-bold cursor-pointer hover:text-sky-700'>Read More</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='px-8' >
                                    <div className='comment text-center mb-5 px-4 pt-6 pb-2 lg:py-6 lg:px-16  text-black rounded-lg w-full'>
                                        <h3 className='text-2xl font-bold mb-5'>Heading</h3>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel<span className="dots">...</span><span className='more ' style={{ display: "none" }}>erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span>
                                        <p onClick={this.Read_Less_More} className='read_less_more_btn text-cyan mt-3 font-bold cursor-pointer hover:text-sky-700'>Read More</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='px-8'>
                                    <div className='comment text-center mb-5 px-4 pt-6 pb-2 lg:py-6 lg:px-16  text-black rounded-lg w-full'>
                                        <h3 className='text-2xl font-bold mb-5'>Heading</h3>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel<span className="dots">...</span><span className='more ' style={{ display: "none" }}>erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span>
                                        <p onClick={this.Read_Less_More} className='read_less_more_btn text-cyan mt-3 font-bold cursor-pointer hover:text-sky-700'>Read More</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='px-8'>
                                    <div className='comment text-center mb-5 px-4 pt-6 pb-2 lg:py-6 lg:px-16  text-black rounded-lg w-full'>
                                        <h3 className='text-2xl font-bold mb-5'>Heading</h3>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel<span className="dots">...</span><span className='more ' style={{ display: "none" }}>erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span>
                                        <p onClick={this.Read_Less_More} className='read_less_more_btn text-cyan mt-3 font-bold cursor-pointer hover:text-sky-700'>Read More</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='px-8'>
                                    <div className='comment text-center mb-5 px-4 pt-6 pb-2 lg:py-6 lg:px-16  text-black rounded-lg w-full'>
                                        <h3 className='text-2xl font-bold mb-5'>Heading</h3>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel<span className="dots">...</span><span className='more ' style={{ display: "none" }}>erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span>
                                        <p onClick={this.Read_Less_More} className='read_less_more_btn text-cyan mt-3 font-bold cursor-pointer hover:text-sky-700'>Read More</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='px-8'>
                                    <div className='comment text-center mb-5 px-4 pt-6 pb-2 lg:py-6 lg:px-16  text-black rounded-lg w-full'>
                                        <h3 className='text-2xl font-bold mb-5'>Heading</h3>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel<span className="dots">...</span><span className='more ' style={{ display: "none" }}>erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span>
                                        <p onClick={this.Read_Less_More} className='read_less_more_btn text-cyan mt-3 font-bold cursor-pointer hover:text-sky-700'>Read More</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='px-8'>
                                    <div className='comment text-center mb-5 px-4 pt-6 pb-2 lg:py-6 lg:px-16  text-black rounded-lg w-full'>
                                        <h3 className='text-2xl font-bold mb-5'>Heading</h3>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel<span className="dots">...</span><span className='more ' style={{ display: "none" }}>erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span>
                                        <p onClick={this.Read_Less_More} className='read_less_more_btn text-cyan mt-3 font-bold cursor-pointer hover:text-sky-700'>Read More</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='px-8'>
                                    <div className='comment text-center mb-5 px-4 pt-6 pb-2 lg:py-6 lg:px-16  text-black rounded-lg w-full'>
                                        <h3 className='text-2xl font-bold mb-5'>Heading</h3>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel<span className="dots">...</span><span className='more ' style={{ display: "none" }}>erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span>
                                        <p onClick={this.Read_Less_More} className='read_less_more_btn text-cyan mt-3 font-bold cursor-pointer hover:text-sky-700'>Read More</p>
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                    </section>
                    {/* Client Comment section ends  */}
                    {/* Why chose us section starts  */}
                    <section id="why_Chose_us" className='px-4 pt-10 bg-white'>
                        <h1 className='text-2xl lg:text-3xl text-web-color text-center font-bold py-10  '>Why Chose Us</h1>
                        <div className="details mb-10 pt-10 ">
                            <div className=" flex flex-col justify-center items-center  lg:pt-20  mb-10 ">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                                    <div className="flex flex-col text-center text-lg lg:text-xl">
                                        <span className=''>We Have</span>
                                        <span className='count text-3xl text-web-color font-bold my-2 lg:mb-4 ' data-val='2000'>0</span>
                                        <span className=' '>Active Software User</span>
                                    </div>
                                    <div className="flex flex-col text-center text-lg lg:text-xl">
                                        <span className=''>We Have</span>
                                        <span className='count text-3xl text-web-color font-bold my-2 lg:mb-4 ' data-val="1000">0</span>
                                        <span className=' '>Active Software User</span>
                                    </div>
                                    <div className="flex flex-col text-center text-lg lg:text-xl">
                                        <span className=''>We Have</span>
                                        <span className='count text-3xl text-web-color font-bold my-2 lg:mb-4 ' data-val='5000'>0</span>
                                        <span className=' '>Active Software User</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center text-md mt-6  mb-10 lg:text-xl lg:w-fit lg:mt-8 lg:mx-auto ">

                                    <div className=' flex flex-col justify-center items-center m-4 lg:m-8'>
                                        <img src={Chose_Card_1} alt="" />
                                        <span className='w-fit text-web-color  mt-2'>Money Back Guarantee</span>
                                    </div>
                                    <div className=' flex flex-col justify-center items-center m-4 lg:m-8'>
                                        <img src={Chose_Card_2} alt="" />
                                        <span className='w-fit text-web-color   mt-2'>100% Client Satisfaction</span>
                                    </div>
                                    <div className=' flex flex-col justify-center items-center m-4 lg:m-8' >
                                        <img src={Chose_Card_3} alt="" />
                                        <span className='w-fit text-web-color   mt-2'>Virus Free Gurantee</span>
                                    </div>
                                    <div className=' flex flex-col justify-center items-center m-4 lg:m-8'>
                                        <img src={Chose_Card_4} alt="" />
                                        <span className='w-fit text-web-color  mt-2'>Customer care & support</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                    {/* Why chose us section ends  */}
                    {/* what we do section starts  */}
                    <section id='WHAT_WE_DO' className='mt-4 p-4 text-center mx-auto lg:mx-0 lg:text-left lg:mt-8 lg:p-32 2xl:px-[27%] pb-5'>
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className='p-3'>
                                <h1 className='text-2xl lg:text-3xl font-bold  text-web-color '>WHAT WE DO</h1>
                                <div className='vanila_underline mt-2 mx-auto lg:mx-0 '></div>
                                <h1 className='text-xl font-bold text-web-color mt-4 '>We digitize your imagination</h1>
                                <p className='mt-8 '>We focus on delivering digital solutions through advanced information systems and innovation. We have completed projects for diverse industrial sectors, including Internet Service Providers, Cable TV Networks, Education, Health, E-commerce, and many more.</p>
                            </div>
                            <div className="md:mx-auto lg:ps-10">
                                <img src={What_WE_Do} alt="" />
                            </div>
                        </div>
                        <div className="grid grid-row-3 mt-6 gap-8 text-left lg:grid-cols-3 lg:mt-20 lg:gap-0 ">
                            <div className='WHAT_WE_DO_BOX h-auto  bg-white p-8 mx-5 '>
                                <h3 className='text-lg lg:text-2xl font-medium text-web-color'>Build Your foundation</h3>
                                <div className='vanila_underline mt-2'></div>
                                <p className='mt-4 w-fit '>It is important that your business is capable of pivoting quickly when circumstances change. Our flexible foundation helps you do just that.</p>
                            </div>
                            <div className='WHAT_WE_DO_BOX   bg-white p-8 mx-5'>
                                <h3 className='text-lg lg:text-2xl font-medium text-web-color '>Build Your foundation</h3>
                                <div className='vanila_underline mt-2'></div>
                                <p className='mt-4 w-fit '>It is important that your business is capable of pivoting quickly when circumstances change. Our flexible foundation helps you do just that.</p>
                            </div>
                            <div className='WHAT_WE_DO_BOX  bg-white p-8 mx-5'>
                                <h3 className='text-lg lg:text-2xl font-medium text-web-color'>Build Your foundation</h3>
                                <div className='vanila_underline mt-2'></div>
                                <p className='mt-4 w-fit '>It is important that your business is capable of pivoting quickly when circumstances change. Our flexible foundation helps you do just that.</p>
                            </div>
                        </div>
                    </section>
                    {/* what we do section ends*/}
                    {/* our clients section starts */}
                    <section id='OUR_CLIENTS' className='bg-white py-10  px-8 md:px-16 lg:py-28 lg:px-10 lg:mb-20 2xl:px-[27%]'>
                        <div className=''>
                            <h1 className=' text-web-color text-center font-semibold text-2xl lg:text-3xl'>Our CLients</h1>
                            <div className='lg:mx-32 mt-10 2xl:mt-20'>
                                <Swiper
                                    slidesPerView={3}
                                    spaceBetween={10}
                                    pagination={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    breakpoints={{
                                        768: {
                                            slidesPerView: 4,
                                            spaceBetween: 10
                                        }
                                    }}
                                    modules={[Autoplay, Pagination]}
                                    className="mySwiper "
                                >
                                    <SwiperSlide className='pb-10'>
                                        <div className='mx-3 w-2/3'><img src={Client_1} alt="" /></div>
                                    </SwiperSlide>
                                    <SwiperSlide className='pb-10'>
                                        <div className='mx-3 w-2/3'><img src={Client_2} alt="" /></div>
                                    </SwiperSlide>
                                    <SwiperSlide className='pb-10'>
                                        <div className='mx-3 w-2/3'><img src={Client_3} alt="" /></div>
                                    </SwiperSlide>
                                    <SwiperSlide className='pb-10'>
                                        <div className='mx-3 w-2/3'><img src={Client_4} alt="" /></div>
                                    </SwiperSlide>
                                    <SwiperSlide className='pb-10'>
                                        <div className='mx-3 w-2/3'><img src={Client_5} alt="" /></div>
                                    </SwiperSlide>
                                    <SwiperSlide className='pb-10'>
                                        <div className='mx-3 w-2/3'><img src={Client_6} alt="" /></div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </section>
                    {/* our clients section ends  */}
                    {/* Frequently_ask_question start  */}
                    <section id='Frequently_ask_question ' className='mt-16 mb-20 mx-8 md:mx-16 2xl:mx-[27%]'>
                        <div className=''>
                            <h3 className='text-2xl lg:text-3xl text-center font-bold text-web-color mb-10'>Freequently Ask Question</h3>
                            <div className=' Frequently_ask_box_main lg:w-[50rem] box-border rounded-md drop-shadow-md  bg-white h-auto mx-4  mb-4 p-4 ps-6  sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto' >
                                <div className='flex justify-between' onClick={this.hiddenClicker} style={{ cursor: 'pointer' }}>
                                    <h5 className='text-base md:text-xl text-web-color font-semibold mb-2'>What exactly we do?</h5>
                                    <span className=' text-web-color font-bold text-2xl'><i className="fa-solid fa-chevron-down"></i></span>
                                </div>
                                <div className=' Frequently_ask_box Frequently_ask_box_vissible'>
                                    <hr />
                                    <p className='ps-1 pt-6 pb-4'>We are working on digitalizing industries through the use of information and technology. We are a full-service software development company that offers solutions mainly to B2B and B2C businesses.</p>
                                </div>
                            </div>
                            <div className=' Frequently_ask_box_main lg:w-[50rem] box-border rounded-md drop-shadow-md  bg-white h-auto mx-4  mb-4 p-4 ps-6  sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto' >
                                <div className='flex justify-between' onClick={this.hiddenClicker} style={{ cursor: 'pointer' }}>
                                    <h5 className='text-base md:text-xl text-web-color font-semibold mb-2'>What exactly we do?</h5>
                                    <span className=' text-web-color font-bold text-2xl'><i className="fa-solid fa-chevron-down"></i></span>
                                </div>
                                <div className=' Frequently_ask_box '>
                                    <hr />
                                    <p className='ps-1 pt-6 pb-4'>We are working on digitalizing industries through the use of information and technology. We are a full-service software development company that offers solutions mainly to B2B and B2C businesses.</p>
                                </div>
                            </div>


                        </div>
                    </section>
                    {/* Frequently_ask_question ends  */}
                    {/* Blog area started  */}
                    <section id='blog_area' className='py-8 px-8 lg:py-28 lg:px-32 2xl:px-[27%]'>
                        <div className="main_blog mb-8 lg:mb-16 rounded-xl">
                            <div className='grid grid-cols-1  md:grid-cols-2  '>
                                <div className='h-fit rounded-xl '>
                                    <img className='shadow-xl drop-shadow-md w-full rounded-xl' src={Blog_Main} alt="" />
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
                                <div className='blogs border-2 bg-white hover:drop-shadow-lg shadow-md rounded-lg'>
                                    <img className='mx-auto w-full rounded-lg' src={Blog_1} alt="" />
                                    <div className=' p-8'>
                                        <h6 className='text-md font-bold text-cyan-500'>Social Media</h6>
                                        <h3 className='text-lg font-semibold text-web-color'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error</h3>
                                        <p className='mt-4'>Todays consumers are exposed to an ongoing feed of content and experiences across digital channels..</p>
                                        <p className='mt-4 text-web-color font-semibold'><span><i class="fa-solid fa-calendar-days"></i></span> 25-05-2023 </p>
                                    </div>
                                </div>
                                <div className='blogs border-2 bg-white hover:drop-shadow-lg shadow-md rounded-lg'>
                                    <img className='mx-auto w-full rounded-lg' src={Blog_2} alt="" />
                                    <div className=' p-8'>
                                        <h6 className='text-md font-bold text-cyan-500'>Social Media</h6>
                                        <h3 className='text-lg font-semibold text-web-color'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error</h3>
                                        <p className='mt-4'>Todays consumers are exposed to an ongoing feed of content and experiences across digital channels..</p>
                                        <p className='mt-4 text-web-color font-semibold'><span><i class="fa-solid fa-calendar-days"></i></span> 25-05-2023 </p>
                                    </div>
                                </div>
                                <div className='blogs border-2 bg-white hover:drop-shadow-lg shadow-md rounded-lg'>
                                    <img className='mx-auto w-full rounded-lg' src={Blog_3} alt="" />
                                    <div className=' p-8'>
                                        <h6 className='text-md font-bold text-cyan-500'>Social Media</h6>
                                        <h3 className='text-lg font-semibold text-web-color'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error</h3>
                                        <p className='mt-4'>Todays consumers are exposed to an ongoing feed of content and experiences across digital channels..</p>
                                        <p className='mt-4 text-web-color font-semibold'><span><i class="fa-solid fa-calendar-days"></i></span> 25-05-2023 </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="flex justify-center mt-8">
                            <span className='px-6 py-3 rounded text-white font-bold vanila_btn_hover_1'> <a href='/' className=' '>See More Article</a></span></div>
                    </section>
                    {/* Blog area End */}

                </div>
            </>
        )
    }
}

export default MainComponent