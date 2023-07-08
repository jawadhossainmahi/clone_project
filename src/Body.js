import React, { Component } from 'react'
import { Navbar } from './component/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './component/Footer'


export class Body extends Component {
  componentDidMount(){
    window.addEventListener('scroll',()=>{
      const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop
            let scrolling_top = document.getElementById('scrolling-top');
            if(winScroll >1000){
              scrolling_top.classList.remove('invisible');
              scrolling_top.classList.add('visible');
            }
            else{
              scrolling_top.classList.remove('visible');
              scrolling_top.classList.add('invisible');
            }
    })
  }

  scrolling=()=>{
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  render() {
    return (
      <div>
        <Navbar/>
        <div id='body'>

        <Outlet/>
        <span id='scrolling-top' onClick={this.scrolling} className='bg-[#29CCC0] px-4 py-3 rounded-md invisible  fixed bottom-14 right-10 z-50 text-lg duration-300 hover:bg-[#164B77] text-white cursor'><i class="fa-solid fa-chevron-up" ></i></span>
        <Footer/>
        </div>
      </div>
    )
  }
}

export default Body