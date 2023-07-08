import React, { Component } from 'react'
import Logo from "../images/3302022-125207-PMunnamed.png"
import Logo_White from "../images/logo_white.svg"
import Nav_Button from "../images/nav_button.png"
import { Link } from 'react-router-dom'
export class Navbar extends Component {

    constructor() {
        super()
        this.state = {
            theposition: '',
            count: 0,
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', () => {
            this.listenToScroll();
        })
        // window.addEventListener('scrollend', () => {
        //     // this.listenToScroll();
        //     // this.defaultDropdown();
        // })

    }

    componentWillUnmount() {
        window.removeEventListener('scroll', () => {
            this.listenToScroll();
            this.OffdefaultDropdown();

        })
    }
    listenToScroll = () => {
        window.addEventListener('scroll', () => {
            const winScroll =
                document.body.scrollTop || document.documentElement.scrollTop

            // const height =
            //     document.documentElement.scrollHeight -
            //     document.documentElement.clientHeight
            // const scrolled = winScroll / height
            // const heigh = document.documentElement.scrollHeight
            // const heigh2 = document.documentElement.clientHeight

            this.setState({
                theposition: winScroll,
            })
        }
        )
    }
    clickNavbar = () => {
        let mobile_navbar = document.getElementsByClassName('mobile_navbar')[0];
        let body = document.getElementById('body');
        // let footer= document.getElementsByClassName('footer')[0];
        // main_component.classList.toggle('hidden')
        // footer.classList.toggle('hidden')
        body.classList.toggle('hidden')
        if (document.body.style.backgroundColor !== "white") {
            document.body.style.backgroundColor = "white";
        }
        else {
            body.style.backgroundColor = "#EEF0F8";
        }
        mobile_navbar.classList.toggle('mobile_section')

    }
    defaultDropdown = (element) => {
        let default_dropdown = element.target.closest('.default_dropdown');
        let dropdown_id = default_dropdown.getAttribute('data-dropdown');
        let dropdown_id2 = document.querySelectorAll('.dropdown_id');
        let bradcrumbs = document.getElementById('bradcrumbs');

        if (default_dropdown !== null) {
            if (document.getElementById(`${dropdown_id}`).classList.contains('dropdown_hidden')) {
                for (let index = 0; index < dropdown_id2.length; index++) {
                    const element = dropdown_id2[index];
                    element.classList.add('dropdown_hidden');
                }
                document.getElementById(`${dropdown_id}`).classList.remove('dropdown_hidden');
                if (bradcrumbs !== null) {
                    bradcrumbs.style.display = "none"
                }
            }
            else {
                for (let index = 0; index < dropdown_id2.length; index++) {
                    const element = dropdown_id2[index];
                    element.classList.add('dropdown_hidden');
                }
                if (bradcrumbs !== null) {
                    bradcrumbs.style.display = "block"
                }
            }
        }
    }
    OffdefaultDropdown = () => {
        let bradcrumbs = document.getElementById('bradcrumbs');
        let dropdown_id2 = document.querySelectorAll('.dropdown_id');
        for (let index = 0; index < dropdown_id2.length; index++) {
            const element = dropdown_id2[index];
            if (!element.classList.contains('dropdown_hidden')) {
                element.classList.add('dropdown_hidden');
                if (bradcrumbs !== null) {
                    bradcrumbs.style.display = "block"
                }
            }
        }

    }
    mobileDropDown = (element) => {
        let mobile_parent_drop = element.target.closest('.mobile_parent_drop');
        if (mobile_parent_drop !== null) {
            let fa_solid = mobile_parent_drop.getElementsByClassName('fa-solid')[0];
            let drop_down_child = mobile_parent_drop.getElementsByClassName('drop_down_child')[0];
            drop_down_child.classList.toggle('hidden');
            drop_down_child.classList.toggle('block');
            mobile_parent_drop.classList.toggle('text-cyan')
            fa_solid.classList.toggle('fa-rotate-90')
        }
    }
    OffMobileDropDown = (element) => {
        let mobile_parent_drop = element.target.closest('.mobile_parent_drop');
        let mobile_parent_drop_1 = mobile_parent_drop.parentElement.parentElement.closest('.mobile_parent_drop')
        if (mobile_parent_drop !== null) {
            let fa_solid = mobile_parent_drop.getElementsByClassName('fa-solid')[0];
            let fa_solid_1 = mobile_parent_drop_1.getElementsByClassName('fa-solid')[0];
            let drop_down_child = mobile_parent_drop.getElementsByClassName('drop_down_child')[0];
            let drop_down_child_1 = mobile_parent_drop_1.getElementsByClassName('drop_down_child')[0];
            if (fa_solid.classList.contains('fa-rotate-90')) {
                fa_solid.classList.toggle('fa-rotate-90')
                fa_solid_1.classList.toggle('fa-rotate-90')
            }

            mobile_parent_drop.classList.toggle('text-cyan')
            mobile_parent_drop_1.classList.toggle('text-cyan')

            drop_down_child.classList.toggle('hidden')
            drop_down_child_1.classList.toggle('hidden')
            this.clickNavbar()

        }
    }




    render() {
        return (
            <>
                <div className=" text-md md:text-lg w-full relative bg-white  ">
                    {/* default navbar starts  */}
                    <div className="header grid grid-cols-2  2xl:mx-[27%] gap-8">
                        <Link className='w-44 my-4  mx-4 md:mx-16 md:my-0 md:mt-3  xl:mx-32 2xl:ms-0 ' to={'/'} onClick={this.OffdefaultDropdown} > <img className='header_img ' src={Logo} alt="" /></Link>
                        <div className='text-right flex justify-end items-center'>
                            <div onClick={this.clickNavbar}><img className='flex-auto w-8 h-8 mx-4 block md:hidden' src={Nav_Button} alt="" /></div>
                            <div className=" contact_header hidden me-16 md:flex md:mt-8 lg:mt-8 xl:me-32 xl:mt-8 2xl:me-0 justify-end">
                                <p className='me-2'><i className="fa-solid fa-phone"></i> <span className="ms-1">8801820245632</span> </p>
                                <span className="border border-slate-300 border-start"></span>
                                <p className='ms-2'> <i className="fa-regular fa-envelope"></i> <span className="ms-1" >Contact Us</span></p>
                            </div>
                        </div>
                    </div>
                    <ul className='menu_bar default_menu_bar hidden md:flex md:mx-16 xl:mx-32 2xl:mx-[27%]' >
                        <li className='md:me-7 default_dropdown cursor-pointer' onClick={this.defaultDropdown} data-dropdown="dropdown_1"><div className='a md:py-6 w-fit' >Products & Services </div></li>
                        <li className='md:me-7 default_dropdown cursor-pointer' onClick={this.defaultDropdown} data-dropdown="dropdown_2"><div className='a md:py-6' >Market Specific Solution</div></li>
                        <li className='md:me-7 default_dropdown cursor-pointer' onClick={this.defaultDropdown} data-dropdown="dropdown_3"><div className='a md:py-6' > Company</div></li>
                    </ul>
                    {/* default navbar ends  */}

                    {/* dropdown list starts  */}
                    <div className=''>
                        {/* I added class height  */}
                        <div id='dropdown_1' className='dropdown_id dropdown_hidden h-[12rem] absolute z-50   hidden md:block lg:block pb-10 mt-0 '>
                            <div className='grid md:mx-16 mt-4 lg:mx-32  md:grid-cols-2  2xl:mx-[27%]'>
                                <div id='products' className=''>
                                    <h3 className='text-xl text-slate-500 font-bold mb-2'>Products</h3>
                                    {/* Products Dropdown starts  */}
                                    <ul className='grid grid-cols-2'>
                                        <div className='me-4'>
                                            <li className=' myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/ispDigital`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'>Isp Digital</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>
                                        <div className='me-4'>
                                            <li className=' myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/edufy`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'>Edufy</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>
                                        <div className='me-4'>
                                            <li className=' myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/infinityLog`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'>Infinity Log</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>
                                        <div className='me-4'>
                                            <li className=' myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/biznify`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'>Biznify</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>
                                    </ul>
                                    {/* Products Dropdown ends  */}
                                </div>
                                <div id='services' className=''>
                                    <h3 className='text-xl text-slate-500 font-bold mb-2'>Services</h3>
                                    {/* services Dropdown starts  */}
                                    <ul className='grid grid-cols-1'>
                                        <div className='me-4'>
                                            <li className='myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/softDevelopment`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'>Software Development</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>
                                        <div className='me-4'>
                                            <li className='myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/webappdev`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'>Web Application Development</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>
                                    </ul>
                                    {/* services Dropdown ends  */}
                                </div>
                            </div>
                        </div>
                        <div id='dropdown_2' className=' dropdown_id dropdown_hidden h-[23rem] absolute z-50  hidden md:block lg:block pb-10'>
                            <h3 className='myborder text-xl w-fit text-slate-500 font-bold  hover:text-cyan-400 md:mx-16 lg:mx-32 grid md:grid-cols-2 2xl:mx-[27%]'><Link to={'/pages/GoToMarket'} className=''><span className='pe-4'>Go to market-specific solution</span><i className="fa-solid fa-arrow-right"></i></Link></h3>
                            <div className='md:mx-16 mt-4 lg:mx-32 lg:pb-5 grid md:grid-cols-1 2xl:mx-[27%]'>
                                <div className=''>
                                    <h3 className='text-xl text-slate-500 font-bold mb-2'>Products</h3>
                                    <ul className='grid grid-cols-2'>
                                        <div className='me-4'>
                                            <li className=' myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/ispBusiSolution`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'> ISP Business Solutions</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>
                                        <div className='me-4'>
                                            <li className=' myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/eduManagement`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'> Education Management</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>
                                        <div className='me-4'>
                                            <li className=' myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/ProBasBusi`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'>Product Based Business</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>
                                        <div className='me-4'>
                                            <li className=' myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/CabTvBusiSolu`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'> Cable TV Business Solutions</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>
                                        <div className='me-4'>
                                            <li className=' myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/ServiBasBusi`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'> Service Based Business</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>
                                        <div className='me-4'>
                                            <li className=' myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/E-comSolu`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'> E-commerce Solutions</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>
                                        <div className='me-4'>
                                            <li className=' myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/ContManagSys`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'> Content Management System</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>


                                    </ul>
                                </div>

                            </div>
                        </div>
                        <div id='dropdown_3' className='dropdown_id dropdown_hidden h-[18rem] absolute z-50 hidden md:block lg:block pb-10'>

                            <h3 className='myborder text-xl w-fit text-slate-500 font-bold mb-2 mt-4 hover:text-cyan-400 px-4  md:px-8 lg:px-32 2xl:px-[27%]'><Link to={'/company'} onClick={this.OffdefaultDropdown} className=''><span className='pe-4'>Go to market-specific solution</span><i className="fa-solid fa-arrow-right"></i></Link></h3>
                            <div className='md:mx-16 mt-4 lg:mx-32 lg:pb-5 grid md:grid-cols-2 2xl:mx-[27%]'>
                                <div className=''>
                                    <h3 className='text-xl w-full text-slate-500 font-bold mb-2'>Products</h3>
                                    <ul className='grid grid-cols-2'>
                                        <div className='me-4'>
                                            <li className=' myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/aboutUs`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'>About Us</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>
                                        <div className='me-4'>
                                            <li className=' myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/Partnership`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'>Partnership</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>
                                        <div className='me-4'>
                                            <li className=' myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/lifeAtSoftifybd`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'>Life at Softifybd</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>
                                        <div className='me-4'>
                                            <li className=' myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/JobsAndCareer`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'>Jobs and Career</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>
                                        <div className='me-4'>
                                            <li className=' myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/CompanyOverview`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'>Company Overview</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>
                                        <div className='me-4'>
                                            <li className=' myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/contactUs`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'>Contact Us</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>
                                    </ul>
                                </div>
                                <div className=''>
                                    <h3 className='text-xl text-slate-500 font-bold mb-2'>Resources</h3>
                                    <ul className='grid grid-cols-2'>
                                        <div className='me-4'>
                                            <li className='myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/newsAndblogs`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'>News and Blogs</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>
                                        <div className='me-4'>
                                            <li className='myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/termsofuse`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'>Terms Of Use</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>
                                        <div className='me-4'>
                                            <li className='myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/privacynotice`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'>Privacy Notice</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* dropdown list ends  */}

                </div>
                {/* topfixed navbar starts */}
                <div className={`scrolltainer  text-base lg:text-lg    ${this.state.theposition <= 250 ? "hide" : 'stick'} `}>

                    <div className=" header1 flex items-center justify-between md:justify-center lg:justify-normal 2xl:mx-[27%] ">
                        <Link to={'/'} onClick={this.OffdefaultDropdown} ><img className='header_img w-44 my-4  mx-4 lg:mx-16 md:my-0 md:mt-3 2xl:ms-0' src={Logo_White} alt="" /></Link>
                        <div onClick={this.clickNavbar} className='bg-white w-fit mx-4 '><img className='w-8 h-8  block md:hidden' src={Nav_Button} alt="" /></div>
                        <ul className='menu_bar hidden md:flex  md:mt-4 lg:mx-4 ' >
                            <li className='flex-none me-4 lg:me-7 default_dropdown cursor-pointer' onClick={this.defaultDropdown} data-dropdown="scrool_dropdown_1"><div className='a pb-3 mt-1 lg:pb-5 lg:mt-2 ' style={{ color: 'white' }}>Products & Services </div></li>
                            <li className='flex-none me-4 lg:me-7 default_dropdown cursor-pointer' onClick={this.defaultDropdown} data-dropdown="scrool_dropdown_2"><div className='a pb-3 mt-1 lg:pb-5 lg:mt-2' style={{ color: 'white' }} >Market Specific Solution</div></li>
                            <li className='flex-none me-4 lg:me-7 default_dropdown cursor-pointer' onClick={this.defaultDropdown} data-dropdown="scrool_dropdown_3"><div className='a pb-3 mt-1 lg:pb-5 lg:mt-2' style={{ color: 'white' }}> Company</div></li>
                        </ul>
                    </div>

                    {/* dropdown list starts  */}
                    <div className=''>
                        <div id='scrool_dropdown_1' className='dropdown_id dropdown_hidden h-[12rem] absolute top-[4.8rem]  hidden md:block lg:block pb-10'>
                            <div className='mt-5 md:mx-16 lg:mx-32 lg:pb-5 grid md:grid-cols-2 2xl:mx-[27%]'>
                                <div id='Products' className=''>
                                    <h3 className='text-xl text-slate-500 font-bold mb-2'>Products</h3>
                                    <ul className='grid grid-cols-2'>
                                        <div className='me-4'>
                                            <li className=' myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/ispDigital`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'>Isp Digitals</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>
                                        <div className='me-4'>
                                            <li className=' myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/edufy`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'>Edufy</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>
                                        <div className='me-4'>
                                            <li className=' myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/infinityLog`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'>Infinity Log</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>
                                        <div className='me-4'>
                                            <li className=' myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/biznify`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'>Biznify</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>


                                    </ul>
                                </div>
                                <div id='Services' className=''>
                                    <h3 className='text-xl text-slate-500 font-bold mb-2'>Services</h3>
                                    <ul className='grid grid-cols-1'>
                                        <div className='me-4'>
                                            <li className='myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/softDevelopment`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'>Software Development</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>
                                        <div className='me-4'>
                                            <li className='myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/webappdev`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'>Web Application Development</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id='scrool_dropdown_2' className='dropdown_id dropdown_hidden h-[23rem] absolute top-[4.8rem]  hidden md:block lg:block pb-10'>
                            <div className='md:mx-16 mt-4 lg:mx-32 lg:pb-5 grid md:grid-cols-1 2xl:mx-[27%]'>
                                <div className=''>
                                    <h3 className='myborder text-xl w-fit text-slate-500 font-bold mb-2 hover:text-cyan-400 '><Link to={'/pages/GoToMarket'} className=''><span className='pe-4'>Go to market-specific solution</span><i className="fa-solid fa-arrow-right"></i></Link></h3>
                                    <h3 className='text-xl w-full text-slate-500 font-bold mb-2'>Products</h3>
                                    <ul className='grid grid-cols-2'>
                                        <div className='me-4'>
                                            <li className=' myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/ispBusiSolution`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'> ISP Business Solutions</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>
                                        <div className='me-4'>
                                            <li className=' myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/eduManagement`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'> Education Management</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>
                                        <div className='me-4'>
                                            <li className=' myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/ProBasBusi`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'>Product Based Business</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>
                                        <div className='me-4'>
                                            <li className=' myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/CabTvBusiSolu`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'> Cable TV Business Solutions</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>
                                        <div className='me-4'>
                                            <li className=' myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/ServiBasBusi`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'> Service Based Business</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>
                                        <div className='me-4'>
                                            <li className=' myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/E-comSolu`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'> E-commerce Solutions</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>
                                        <div className='me-4'>
                                            <li className=' myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/ContManagSys`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'> Content Management System</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>


                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id='scrool_dropdown_3' className='dropdown_id dropdown_hidden h-[21rem] absolute top-[4.8rem] hidden md:block lg:block pb-10'>
                            <h3 className='myborder text-xl w-fit text-slate-500 font-bold mb-2 mt-4 hover:text-cyan-400 px-4  md:px-8 lg:px-32 2xl:px-[27%]'><Link to={'/company'} onClick={this.OffdefaultDropdown} className=''><span className='pe-4'>Go to market-specific solution</span><i className="fa-solid fa-arrow-right"></i></Link></h3>
                            <div className='mt-5 md:mx-16 lg:mx-32 lg:pb-5 grid md:grid-cols-2 2xl:mx-[27%]'>
                                <div className=''>

                                    <h3 className='text-xl w-full text-slate-500 font-bold mb-2'>Company</h3>
                                    <ul className='grid grid-cols-2'>
                                        <div className='me-4'>
                                            <li className=' myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/aboutUs`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'>About Us</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>
                                        <div className='me-4'>
                                            <li className=' myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/Partnership`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'>Partnership</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>
                                        <div className='me-4'>
                                            <li className=' myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/lifeAtSoftifybd`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'>Life at Softifybd</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>
                                        <div className='me-4'>
                                            <li className=' myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/JobsAndCareer`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'>Jobs and Career</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>
                                        <div className='me-4'>
                                            <li className=' myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/CompanyOverview`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'>Company Overview</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>
                                        <div className='me-4'>
                                            <li className=' myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/contactUs`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'>Contact Us</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>



                                    </ul>
                                </div>
                                <div className=''>
                                    <h3 className='text-xl text-slate-500 font-bold mb-2'>Resources</h3>
                                    <ul className='grid grid-cols-2'>
                                        <div className='me-4'>
                                            <li className='myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/newsAndblogs`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'>News and Blogs</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>
                                        <div className='me-4'>
                                            <li className='myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/termsofuse`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'>Terms Of Use</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>
                                        <div className='me-4'>
                                            <li className='myborder  border-l-4  border-slate-300 my-4 mx-0 hover:text-cyan-400 hover:border-cyan-400 '><Link to={`/pages/privacynotice`} onClick={this.OffdefaultDropdown} className='flex justify-between pe-4'><span className='mx-4'>Privacy Notice</span> <span className='text-sm'><i className="fa-solid fa-chevron-right"></i></span></Link></li>
                                            <hr />
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* dropdown list ends  */}
                </div>
                {/* topfixed navbar ends */}
                {/* mobile dropdown starts */}
                <div id='mobile_section' className=''>
                    <div className='mobile_navbar bg-white  lg:hidden w-full h-full   z-50 mobile_section mb-20' style={{ height: '' }}>
                        <div className='flex justify-between items-center'>
                            <Link to={'/'} onClick={this.OffdefaultDropdown} ><img className='w-44 my-4  mx-4' src={Logo} alt="" /></Link>
                            <div onClick={this.clickNavbar} className=' text-xl text-web-color mx-4 '><i className="fa-solid fa-circle-xmark"></i></div>
                        </div>
                        <ul className=' ms-4 text-base text-black mb-8' >
                            <li className='mobile_parent_drop ms-5 '><div onClick={this.mobileDropDown} className='py-4  flex justify-between  '><span>Products & Services</span>  <span className='mx-4'><i className="fa-solid fa-caret-right"></i></span></div>
                                <ul className='drop_down_child hidden ms-4  mb-4 text-base text-black ' >
                                    <li className='mobile_parent_drop ms-5 '><div onClick={this.mobileDropDown} className='py-4  flex justify-between  '><span>Products</span>  <span className='mx-4'><i className="fa-solid fa-caret-right"></i></span></div>
                                        <ul className='drop_down_child hidden ms-4  mb-4 text-base text-black ' >
                                            <li className=' ms-5 '><Link to={"/pages/ispDigital"} onClick={this.OffMobileDropDown} className='py-4  flex justify-between  '>Isp Digitals</Link></li>
                                            <hr />
                                            <li className=' ms-5 '><Link to={"/pages/edufy"} onClick={this.OffMobileDropDown} className='py-4  flex justify-between  '>Edufy</Link></li>
                                            <hr />
                                            <li className=' ms-5 '><Link to={"/pages/infinityLog"} onClick={this.OffMobileDropDown} className='py-4  flex justify-between  '>Infinity Log</Link></li>
                                            <hr />
                                            <li className=' ms-5 '><Link to={"/pages/biznify"} onClick={this.OffMobileDropDown} className='py-4  flex justify-between  '>Biznify</Link></li>
                                        </ul>
                                    </li>
                                    <hr />
                                    <li className='mobile_parent_drop ms-5 '><div onClick={this.mobileDropDown} className='py-4  flex justify-between  '><span>Services</span>  <span className='mx-4'><i className="fa-solid fa-caret-right"></i></span></div>
                                        <ul className='drop_down_child hidden ms-4  mb-4 text-base text-black ' >
                                            <li className=' ms-5 '><Link to={"/pages/softDevelopment"} onClick={this.OffMobileDropDown} className='py-4  flex justify-between  '>Software Development</Link></li>
                                            <hr />
                                            <li className=' ms-5 '><Link to={"/pages/webappdev"} onClick={this.OffMobileDropDown} className='py-4  flex justify-between  '>Web Application Development</Link></li>

                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <hr />
                            <li className='mobile_parent_drop ms-5 '><div onClick={this.mobileDropDown} className='py-4  flex justify-between  '><span>Market Specefic Sollution</span>  <span className='mx-4'><i className="fa-solid fa-caret-right"></i></span></div>
                                <ul className='drop_down_child hidden ms-4  mb-4 text-base text-black ' >
                                    <li className='mobile_parent_drop ms-5 '><div onClick={this.mobileDropDown} className='py-4  flex justify-between  '><span>Industry</span>  <span className='mx-4'><i className="fa-solid fa-caret-right"></i></span></div>
                                        <ul className='drop_down_child hidden ms-4  mb-4 text-base text-black ' >
                                            <li className=' ms-5 '><Link to={"/pages/GoToMarket"} onClick={this.OffMobileDropDown} className='py-4  flex   '><span className='pe-4'>Go to market-specific solution</span><i className="fa-solid fa-arrow-right mt-1"></i></Link></li>
                                            <hr />
                                            <li className=' ms-5 '><Link to={"/pages/ispBusiSolution"} onClick={this.OffMobileDropDown} className='py-4  flex justify-between  '>Isp Business Solution</Link></li>

                                            <hr />
                                            <li className=' ms-5 '><Link to={"/pages/eduManagement"} onClick={this.OffMobileDropDown} className='py-4  flex justify-between  '>Education Management</Link></li>
                                            <hr />
                                            <li className=' ms-5 '><Link to={"/pages/ProBasBusi"} onClick={this.OffMobileDropDown} className='py-4  flex justify-between  '>Product Base Solution</Link></li>
                                            <hr />
                                            <li className=' ms-5 '><Link to={"/pages/CabTvBusiSolu"} onClick={this.OffMobileDropDown} className='py-4  flex justify-between  '>Cable Tv Business Solution</Link></li>
                                            <li className=' ms-5 '><Link to={"/pages/ServiBasBusi"} onClick={this.OffMobileDropDown} className='py-4  flex justify-between  '>Service Base Solution</Link></li>
                                            <li className=' ms-5 '><Link to={"/pages/E-comSolu"} onClick={this.OffMobileDropDown} className='py-4  flex justify-between  '>E-Commerce Solution</Link></li>
                                            <li className=' ms-5 '><Link to={"/pages/ContManagSys"} onClick={this.OffMobileDropDown} className='py-4  flex justify-between  '>Content Management System</Link></li>
                                        </ul>
                                    </li>
                                    <hr />

                                </ul>
                            </li>
                            <hr />
                            <li className='mobile_parent_drop ms-5 '><div onClick={this.mobileDropDown} className='py-4  flex justify-between  '><span>Company</span>  <span className='mx-4'><i className="fa-solid fa-caret-right"></i></span></div>
                                <ul className='drop_down_child hidden ms-4  mb-4 text-base text-black ' >
                                    <li className='mobile_parent_drop ms-5 '><div onClick={this.mobileDropDown} className='py-4  flex justify-between  '><span>Company</span>  <span className='mx-4'><i className="fa-solid fa-caret-right"></i></span></div>
                                        <ul className='drop_down_child hidden ms-4  mb-4 text-base text-black ' >
                                            <li className=' ms-5 '><Link to={"/company"} onClick={this.OffMobileDropDown} className='py-4  flex   '><span className='pe-4'>Go to Company</span><i className="fa-solid fa-arrow-right mt-1"></i></Link></li>
                                            <hr />
                                            <li className=' ms-5 '><Link to={"/pages/aboutUs"} onClick={this.OffMobileDropDown} className='py-4  flex justify-between  '>About Us</Link></li>

                                            <hr />
                                            <li className=' ms-5 '><Link to={"/pages/Partnership"} onClick={this.OffMobileDropDown} className='py-4  flex justify-between  '>Partnership</Link></li>
                                            <hr />
                                            <li className=' ms-5 '><Link to={"/pages/lifeAtSoftifybd"} onClick={this.OffMobileDropDown} className='py-4  flex justify-between  '>Life at Softyfybd</Link></li>
                                            <hr />
                                            <li className=' ms-5 '><Link to={"/pages/JobsAndCareer"} onClick={this.OffMobileDropDown} className='py-4  flex justify-between  '>Jobs and Career</Link></li>
                                            <li className=' ms-5 '><Link to={"/pages/CompanyOverview"} onClick={this.OffMobileDropDown} className='py-4  flex justify-between  '>Company Overview</Link></li>
                                            <hr />
                                            <li className=' ms-5 '><Link to={"/pages/contactUs"} onClick={this.OffMobileDropDown} className='py-4  flex justify-between  '>Contact Us</Link></li>

                                        </ul>
                                    </li>
                                    <hr />
                                    <li className='mobile_parent_drop ms-5 '><div onClick={this.mobileDropDown} className='py-4  flex justify-between  '><span>Resourse</span>  <span className='mx-4'><i className="fa-solid fa-caret-right"></i></span></div>
                                        <ul className='drop_down_child hidden ms-4  mb-4 text-base text-black ' >
                                            <li className=' ms-5 '><Link to={"/company"} onClick={this.OffMobileDropDown} className='py-4  flex   '><span className='pe-4'>Go to Company</span><i className="fa-solid fa-arrow-right mt-1"></i></Link></li>
                                            <hr />
                                            <li className=' ms-5 '><Link to={"/pages/newsAndblogs"} onClick={this.OffMobileDropDown} className='py-4  flex justify-between  '>News and Blogs</Link></li>

                                            <hr />
                                            <li className=' ms-5 '><Link to={"/pages/termsofuse"} onClick={this.OffMobileDropDown} className='py-4  flex justify-between  '>Terms Of Use</Link></li>
                                            <hr />
                                            <li className=' ms-5 '><Link to={"/pages/privacynotice"} onClick={this.OffMobileDropDown} className='py-4  flex justify-between  '>Privacy Notice</Link></li>
                                            <hr />
                                        </ul>
                                    </li>
                                    <hr />

                                </ul>
                            </li>
                            <hr />


                        </ul>
                    </div>
                </div>
                {/* mobile dropdown ends */}



            </>
        )
    }
}

export default Navbar