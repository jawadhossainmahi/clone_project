import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class _21_TermsOfServices extends Component {
    render() {
        return (
            <>
                <div id='partnership' className=' px-4  md:px-8 py-10 lg:px-32 lg:py-10  2xl:px-[27%]' >
                    <div id='bradcrumbs' className='hidden mt-6 md:block   bg-white w-fit '>
                        <ul className='flex text-base text-web-color font-semibold'>
                            <li className='home-icon ps-4 pe-6 py-2 me-4'><Link to={"/"}><i class="fa-solid fa-house"></i> </Link></li>
                            <li className='breadcrumbs-icon  px-6 py-2 me-4'><Link to={"/"}>Home</Link></li>
                            <li className='px-6 py-2 me-4'>Terms Of Use</li>
                        </ul>
                    </div>
                    <div className='mx-auto my-20'>
                        <h1 className='text-center text-2xl lg:text-4xl font-bold text-white'>Terms Of Use</h1>
                    </div>
                </div>
                <div className=' px-4  md:px-8 py-10 lg:px-32 lg:py-10  2xl:px-[27%]' >
                    <div className=' p-4 bg-white rounded-3xl shadow-xl drop-shadow-2xl'>
                        <ol className='list-decimal m-4 md:m-8'>
                            <li className='text-lg font-bold text-web-color'>Terms</li>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugit, optio unde alias, saepe doloribus possimus tenetur iusto mollitia modi tempore dolores quos culpa veritatis pariatur doloremque soluta dolor impedit earum perferendis iure. Unde minima optio omnis fugiat, rerum vel.</span>
                            <li className='text-lg font-bold text-web-color'>Terms</li>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugit, optio unde alias, saepe doloribus possimus tenetur iusto mollitia modi tempore dolores quos culpa veritatis pariatur doloremque soluta dolor impedit earum perferendis iure. Unde minima optio omnis fugiat, rerum vel.</span>
                            <li className='text-lg font-bold text-web-color'>Terms</li>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugit, optio unde alias, saepe doloribus possimus tenetur iusto mollitia modi tempore dolores quos culpa veritatis pariatur doloremque soluta dolor impedit earum perferendis iure. Unde minima optio omnis fugiat, rerum vel.</span>
                            <li className='text-lg font-bold text-web-color'>Terms</li>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fugit, optio unde alias, saepe doloribus possimus tenetur iusto mollitia modi tempore dolores quos culpa veritatis pariatur doloremque soluta dolor impedit earum perferendis iure. Unde minima optio omnis fugiat, rerum vel.</span>
                        </ol>
                    </div>
                </div>
            </>
        )
    }
}

export default _21_TermsOfServices