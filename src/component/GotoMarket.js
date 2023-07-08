import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Market_Specific_sollution_1 from '../images/market_Specific_sollution_1.png'
import Market_Specific_sollution_2 from '../images/market_Specific_sollution_2.png'
import Market_Specific_sollution_3 from '../images/market_Specific_sollution_3.svg'
import Market_Specific_sollution_4 from '../images/market_Specific_sollution_4.svg'
import Market_Specific_sollution_5 from '../images/market_Specific_sollution_5.png'

export class GotoMarket extends Component {
    constructor() {
        super();
        this.state = {
            src: `${Market_Specific_sollution_4}`,
            changeElement: null,
        }
    }
    HoverEffect = (element) => {

        if (element.target.getElementsByTagName('img')[0] !== undefined) {
            element.target.getElementsByTagName('img')[0].src = `${Market_Specific_sollution_3}`

        }
    }
    HoverEffectRemove = (element) => {
        if (element.target.getElementsByTagName('img')[0] !== undefined) {
            element.target.getElementsByTagName('img')[0].src = `${Market_Specific_sollution_4}`
            if (this.state.changeElement !== null) {
                let changeElement = this.state.changeElement;
                changeElement.src = `${this.state.src}`;
            }
        }
    }
    MainClickChanges = (element) => {
        let hover_class = document.querySelectorAll('.hover_class');
        for (let index = 0; index < hover_class.length; index++) {
            const element = hover_class[index].getElementsByTagName('img')[0];

            if (element !== undefined) {
                element.src = `${Market_Specific_sollution_4}`;
                hover_class[index].classList.remove('bg-[#134B77]')
                hover_class[index].classList.remove('text-white')
            }
        }
        let mainElement = element.target.closest('.hover_class')
        let imgElement = element.target.closest('.hover_class').getElementsByTagName('img')[0];
        if (imgElement !== undefined) {
            imgElement.src = `${Market_Specific_sollution_3}`;
            mainElement.classList.toggle('bg-[#134B77]');
            mainElement.classList.toggle('text-white');
            mainElement.removeAttribute('onMouseLeave');
            this.setState({
                src: `${Market_Specific_sollution_3}`,
                changeElement: imgElement,
            })
            mainElement.classList.remove('bg-white')
            mainElement.classList.add('bg-[#134B77]')
        }
    }
    ShowHide = (element, idName) => {
        let need_to_show_container = document.getElementById(idName);
        let change_container = document.getElementsByClassName('change_container');
        Array.from(change_container).forEach(e => {
            if (e !== undefined || e !== null) {
                e.classList.add('vanila_products_hidden');
                e.classList.remove('vanila_products_vissible')
            }
        })
        if (need_to_show_container !== null || need_to_show_container !== undefined) {
            need_to_show_container.classList.remove('vanila_products_hidden');
            need_to_show_container.classList.add('vanila_products_vissible');

        }
    }
    render() {

        return (
            <>
                <div className=' px-4  md:px-8 py-10 lg:px-32 lg:py-10  2xl:px-[27%]'>
                    <div id='bradcrumbs' className='hidden mt-6 md:block rounded-md  bg-white w-fit '>
                        <ul className='flex text-base text-web-color font-semibold'>
                            <li className='home-icon ps-4 pe-6 py-2 me-4'><Link to={"/"}><i class="fa-solid fa-house"></i> </Link></li>
                            <li className='breadcrumbs-icon  px-6 py-2 me-4'><Link to={"/"}>Company</Link></li>
                            <li className='px-6 py-2 me-4'>Jobs and Career</li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className='my-auto lg:text-left text-center'>
                            <h1 className='text-2xl text-cyan font-bold lg:text-4xl lg:pe-20 mb-4 '>Market-Specific Solution</h1>
                            <p className="text-base lg:pe-20">We serve with the purpose of digitizing our country to adopt the 5th industrial revolution. To make this happen, we are focusing on industry-specific solutions.</p>
                        </div>
                        <div className='mx-auto lg:mx-0 mt-8 lg:mt-0'><img className='rounded-lg' src={Market_Specific_sollution_1} alt="" /></div>
                    </div>
                </div>
                <div className=' px-4  md:px-8 py-10 lg:px-32 lg:py-10  2xl:px-[27%] bg-white'>
                    <h1 className='text-center text-2xl text-web-color font-bold lg:text-3xl'>Focus on Industries and Markets</h1>
                    <div className='grid grid-cols-1 lg:grid-cols-2 mt-16'>
                        <div className='mx-auto lg:mx-0'><img src={Market_Specific_sollution_2} alt="" /></div>
                        <div className='mt-8 lg:mt-0 text-base'><p>Here at SoftifyBD, we monitor the industry and its market with the way the industry operates industry profiles and databases. We understand the industry's demand and geographically research a specific industry and its need to find room for development, remove errors, and bring sustainability. We follow various research models under consideration to develop and innovate, smoothening the overall growth and process of business execution.


                            SoftifyBD aims to empower your success by providing absolute guidance and offering customers and management the flexibility, with the visibility, control, and insight required to drive real value for any organization. We have started working on several industry solutions, including Internet Service Providers, Cable TV Networks, Education, Health, E-commerce, and many more.</p></div>
                    </div>
                </div>
                <div className="px-4  md:px-8 py-10 lg:px-32 lg:py-10  2xl:px-[27%]">
                    <div className='flex flex-wrap justify-center items-center'>

                        <div className='hover_class p-4 w-[15%]  duration-300 text-white bg-[#134B77]  hover:text-white hover:bg-[#134B77]' onMouseEnter={(element) => { this.HoverEffect(element) }} onMouseLeave={(element) => { this.HoverEffectRemove(element) }} onClick={(element) => { this.MainClickChanges(element); this.ShowHide(element, 'id_1'); }}>
                            <img className='mx-auto rounded-lg' src={Market_Specific_sollution_3} alt="" />
                            <h1 className='text-xl lg:text-xl text-center mt-2'>Isp Business Solution</h1>
                        </div>
                        <div className='hover_class p-4 w-[15%] bg-white duration-300  hover:text-white hover:bg-[#134B77]' onMouseEnter={(element) => { this.HoverEffect(element) }} onMouseLeave={(element) => { this.HoverEffectRemove(element) }} onClick={(element) => { this.MainClickChanges(element); this.ShowHide(element, 'id_2'); }}>
                            <img className='mx-auto rounded-lg' src={Market_Specific_sollution_4} alt="" />
                            <h1 className='text-xl lg:text-xl text-center mt-2'>Isp Business Solution</h1>
                        </div>
                        <div className='hover_class p-4 w-[15%] bg-white duration-300  hover:text-white hover:bg-[#134B77]' onMouseEnter={(element) => { this.HoverEffect(element) }} onMouseLeave={(element) => { this.HoverEffectRemove(element) }} onClick={(element) => { this.MainClickChanges(element); this.ShowHide(element, 'id_3'); }}>
                            <img className='mx-auto rounded-lg' src={Market_Specific_sollution_4} alt="" />
                            <h1 className='text-xl lg:text-xl text-center mt-2'>Isp Business Solution</h1>
                        </div>
                        <div className='hover_class p-4 w-[15%] bg-white duration-300  hover:text-white hover:bg-[#134B77]' onMouseEnter={(element) => { this.HoverEffect(element) }} onMouseLeave={(element) => { this.HoverEffectRemove(element) }} onClick={(element) => { this.MainClickChanges(element); this.ShowHide(element, 'id_4'); }}>
                            <img className='mx-auto ' src={Market_Specific_sollution_4} alt="" />
                            <h1 className='text-xl lg:text-xl text-center mt-2'>Isp Business Solution</h1>
                        </div>
                        <div className='hover_class p-4 w-[15%] bg-white duration-300  hover:text-white hover:bg-[#134B77]' onMouseEnter={(element) => { this.HoverEffect(element) }} onMouseLeave={(element) => { this.HoverEffectRemove(element) }} onClick={(element) => { this.MainClickChanges(element); this.ShowHide(element, 'id_5'); }}>
                            <img className='mx-auto rounded-lg' src={Market_Specific_sollution_4} alt="" />
                            <h1 className='text-xl lg:text-xl text-center mt-2'>Isp Business Solution</h1>
                        </div>
                        <div className='hover_class p-4 w-[15%] bg-white duration-300  hover:text-white hover:bg-[#134B77]' onMouseEnter={(element) => { this.HoverEffect(element) }} onMouseLeave={(element) => { this.HoverEffectRemove(element) }} onClick={(element) => { this.MainClickChanges(element); this.ShowHide(element, 'id_6'); }}>
                            <img className='mx-auto rounded-lg' src={Market_Specific_sollution_4} alt="" />
                            <h1 className='text-xl lg:text-xl text-center mt-2'>Isp Business Solution</h1>
                        </div>
                      



                    </div>
                </div>
                <div className='px-4 md:px-8 py-10 lg:px-32 lg:py-10  2xl:px-[27%]'>
                    <div id='id_1' className="change_container  grid gird-cols-1 grid-cols-2 mt-8">
                        <div>
                            <img className='mx-auto rounded-lg' src={Market_Specific_sollution_5} alt="" />
                        </div>
                        <div className='mt-8'>
                            <div className='flex justify-between mb-4 '>
                                <h2 className='text-2xl lg:text-3xl text-web-color'>ISP Digital</h2>
                                <button className='flex-initial vanila_btn_hover_1  text-white font-bold rounded-md  bg-cyan-400 px-3 py-3 lg:px-7 lg:py-3'><a href="/">Talk to an expert</a></button>
                            </div>
                            <div className='mt-6 text-base'><p><b>ISP Digital</b> (A Management & Billing Solution) is a complete software solution designed for your ISP company. It helps run your ISP business more efficiently and effectively with a single piece of software. ISP Digital assists with the management and includes complete authorization, operations, billing management modules, Accounting, inventory and many more core features that make management more accessible and offer smoother operations on every activity.</p></div>
                        </div>
                    </div>
                    <div id='id_2' className="change_container vanila_products_hidden grid gird-cols-1 grid-cols-2 mt-8 ">
                        <div>
                            <img className='mx-auto rounded-lg' src={Market_Specific_sollution_5} alt="" />
                        </div>
                        <div className='mt-8'>
                            <div className='flex justify-between mb-4 '>
                                <h2 className='text-2xl lg:text-3xl text-web-color'>ISP Digital</h2>
                                <button className='flex-initial vanila_btn_hover_1  text-white font-bold rounded-md  bg-cyan-400 px-3 py-3 lg:px-7 lg:py-3'><a href="/">Talk to an expert</a></button>
                            </div>
                            <div className='mt-6 text-base'><p><b>ISP Digital</b> (A Management & Billing Solution) is a complete software solution designed for your ISP company. It helps run your ISP business more efficiently and effectively with a single piece of software. ISP Digital assists with the management and includes complete authorization, operations, billing management modules, Accounting, inventory and many more core features that make management more accessible and offer smoother operations on every activity.</p></div>
                        </div>
                    </div>
                    <div id='id_3' className="change_container vanila_products_hidden grid gird-cols-1 grid-cols-2 mt-8 ">
                        <div>
                            <img className='mx-auto rounded-lg' src={Market_Specific_sollution_5} alt="" />
                        </div>
                        <div className='mt-8'>
                            <div className='flex justify-between mb-4 '>
                                <h2 className='text-2xl lg:text-3xl text-web-color'>ISP Digital</h2>
                                <button className='flex-initial vanila_btn_hover_1  text-white font-bold rounded-md  bg-cyan-400 px-3 py-3 lg:px-7 lg:py-3'><a href="/">Talk to an expert</a></button>
                            </div>
                            <div className='mt-6 text-base'><p><b>ISP Digital</b> (A Management & Billing Solution) is a complete software solution designed for your ISP company. It helps run your ISP business more efficiently and effectively with a single piece of software. ISP Digital assists with the management and includes complete authorization, operations, billing management modules, Accounting, inventory and many more core features that make management more accessible and offer smoother operations on every activity.</p></div>
                        </div>
                    </div>
                    <div id='id_4' className="change_container vanila_products_hidden grid gird-cols-1 grid-cols-2 mt-8 ">
                        <div>
                            <img className='mx-auto rounded-lg' src={Market_Specific_sollution_5} alt="" />
                        </div>
                        <div className='mt-8'>
                            <div className='flex justify-between mb-4 '>
                                <h2 className='text-2xl lg:text-3xl text-web-color'>ISP Digital</h2>
                                <button className='flex-initial vanila_btn_hover_1  text-white font-bold rounded-md  bg-cyan-400 px-3 py-3 lg:px-7 lg:py-3'><a href="/">Talk to an expert</a></button>
                            </div>
                            <div className='mt-6 text-base'><p><b>ISP Digital</b> (A Management & Billing Solution) is a complete software solution designed for your ISP company. It helps run your ISP business more efficiently and effectively with a single piece of software. ISP Digital assists with the management and includes complete authorization, operations, billing management modules, Accounting, inventory and many more core features that make management more accessible and offer smoother operations on every activity.</p></div>
                        </div>
                    </div>
                    <div id='id_5' className="change_container vanila_products_hidden grid gird-cols-1 grid-cols-2 mt-8 ">
                        <div>
                            <img className='mx-auto rounded-lg' src={Market_Specific_sollution_5} alt="" />
                        </div>
                        <div className='mt-8'>
                            <div className='flex justify-between mb-4 '>
                                <h2 className='text-2xl lg:text-3xl text-web-color'>ISP Digital</h2>
                                <button className='flex-initial vanila_btn_hover_1  text-white font-bold rounded-md  bg-cyan-400 px-3 py-3 lg:px-7 lg:py-3'><a href="/">Talk to an expert</a></button>
                            </div>
                            <div className='mt-6 text-base'><p><b>ISP Digital</b> (A Management & Billing Solution) is a complete software solution designed for your ISP company. It helps run your ISP business more efficiently and effectively with a single piece of software. ISP Digital assists with the management and includes complete authorization, operations, billing management modules, Accounting, inventory and many more core features that make management more accessible and offer smoother operations on every activity.</p></div>
                        </div>
                    </div>
                    <div id='id_6' className="change_container vanila_products_hidden grid gird-cols-1 grid-cols-2 mt-8 ">
                        <div>
                            <img className='mx-auto rounded-lg' src={Market_Specific_sollution_5} alt="" />
                        </div>
                        <div className='mt-8'>
                            <div className='flex justify-between mb-4 '>
                                <h2 className='text-2xl lg:text-3xl text-web-color'>ISP Digital</h2>
                                <button className='flex-initial vanila_btn_hover_1  text-white font-bold rounded-md  bg-cyan-400 px-3 py-3 lg:px-7 lg:py-3'><a href="/">Talk to an expert</a></button>
                            </div>
                            <div className='mt-6 text-base'><p><b>ISP Digital</b> (A Management & Billing Solution) is a complete software solution designed for your ISP company. It helps run your ISP business more efficiently and effectively with a single piece of software. ISP Digital assists with the management and includes complete authorization, operations, billing management modules, Accounting, inventory and many more core features that make management more accessible and offer smoother operations on every activity.</p></div>
                        </div>
                    </div>
                    
                </div>
            </>

        )
    }
}

export default GotoMarket