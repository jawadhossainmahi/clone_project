import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Edufy_1 from ".././../images/ispDigital_1.png";
import Edufy_2 from ".././../images/ispDigital_2.png";
import Edufy_3 from ".././../images/ispDigital_3.png";
import Edufy_4 from ".././../images/ispDigital_4.svg";
import Edufy_5 from ".././../images/ispDigital_5.png";

export class _02_Edufy extends Component {
  // freequiently ask question section starts
  hiddenClicker(element) {
    let parent = element.target.closest('.Frequently_ask_box_main')
    if (parent !== null) {
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
  }
  // freequiently ask question section ends


  render() {
    return (
      <>
        <div id='service_details' className='text-center lg:text-left ' style={{ backgroundColor: "#EDF0F8" }}>
          <div className='px-4 md:px-16 py-4 lg:px-32 lg:py-10  lg:mb-10 2xl:px-[27%]'>
            <div id='bradcrumbs' className='hidden mt-6 md:block  mx-4 bg-white w-fit '>
              <ul className='flex text-base text-web-color font-semibold'>
                <li className='home-icon ps-4 pe-6 py-2 me-4'><Link to={"/"}><i class="fa-solid fa-house"></i> </Link></li>
                <li className='breadcrumbs-icon  px-6 py-2 me-4'><Link to={"/"}>Home</Link></li>
                <li className='px-6 py-2 me-4'>Edufys</li>
              </ul>
            </div>
            <div className='px-4 py-10   lg:mt-20'>
              <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div >
                  <h3 className='text-web-color text-xl md:text-3xl lg:text-4xl font-bold'>Edufy - An ISP Management & Billing Solution</h3>
                  <p className='mt-5 text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusantium minus beatae soluta voluptates quis aliquid perferendis eos, iusto numquam dolorum deleniti tempora explicabo. Porro, ratione. Dolorum recusandae ipsum ullam.</p>
                  <button className='mt-5 rounded-sm px-6 py-2  text-base vanila_btn_hover_2'>Know More</button>
                </div>
                <div className='mt-4 mx-auto'>
                  <img src={Edufy_1} alt="" className='md:mx-6 rounded-lg' />
                </div>
              </div>
            </div>
          </div>
          <div className='px-4 md:px-16 py-16 bg-white lg:px-32 lg:pt-20 lg:pb-10 2xl:px-[27%]'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <div className='mx-auto'>
                <img src={Edufy_2} alt="" className='rounded-lg' />
              </div>
              <div className='mt-10 lg:ms-6' >
                <h3 className='text-web-color text-xl md:text-3xl lg:text-4xl font-bold'>Edufy - An ISP Management & Billing Solution</h3>
                <p className='mt-5 text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusantium minus beatae soluta voluptates quis aliquid perferendis eos, iusto numquam dolorum deleniti tempora explicabo. Porro, ratione. Dolorum recusandae ipsum ullam.</p>
                <button className='mt-5 rounded-sm px-6 py-2  text-base vanila_btn_hover_1'>Know More</button>
              </div>

            </div>
          </div>
          <div className='px-4 md:px-16 pb-16 bg-white lg:px-32 lg:pb-20 lg:pt-10 2xl:px-[27%]'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <div className='mt-4 mb-8 lg:me-6' >
                <h3 className='text-web-color text-xl md:text-3xl lg:text-4xl font-bold'>Edufy - An ISP Management & Billing Solution</h3>
                <p className='mt-5 text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusantium minus beatae soluta voluptates quis aliquid perferendis eos, iusto numquam dolorum deleniti tempora explicabo. Porro, ratione. Dolorum recusandae ipsum ullam.</p>
                <button className='mt-5 rounded-sm px-6 py-2  text-base vanila_btn_hover_2'>Know More</button>
              </div>
              <div className='mx-auto'>
                <img src={Edufy_3} alt="" className='rounded-lg'/>
              </div>
            </div>
          </div>

          <div id='knowMOre_about_ispDigital' className='px-4 md:px-16 py-20 lg:px-32 lg:py-20 2xl:px-[27%]' style={{ backgroundColor: "#EDF0F8" }}>
            <h1 className='text-center text-web-color font-semibold text-xl md:text-3xl lg:text-4xl'>Know More About Edufy</h1>
            <div className='mt-10 grid grid-cols-1 lg:grid-cols-2'>
              <div className='mx-auto'>
                <img className='h-full rounded-lg' src={Edufy_4} alt="" />
              </div>
              <div className='mt-6 lg:ms-6 '>
                <div className=' Frequently_ask_box_main box-border rounded-md drop-shadow-md w-full  bg-white px-4 py-2 my-5'  >
                  <div className='flex justify-between' onClick={this.hiddenClicker} style={{ cursor: 'pointer' }}>
                    <h5 className='text-base md:text-xl text-web-color font-semibold mb-2'>What exactly we do?</h5>
                    <span className=' text-web-color font-bold text-2xl'><i className="fa-solid fa-chevron-down"></i></span>
                  </div>
                  <div className=' Frequently_ask_box Frequently_ask_box_vissible'>
                    <hr />
                    <p className='ps-1 pt-6 pb-4'>We are working on digitalizing industries through the use of information and technology. We are a full-service software development company that offers solutions mainly to B2B and B2C businesses.</p>
                  </div>
                </div>
                <div className=' Frequently_ask_box_main box-border rounded-md drop-shadow-md w-full  bg-white px-4 py-2 my-5'  >
                  <div className='flex justify-between' onClick={this.hiddenClicker} style={{ cursor: 'pointer' }}>
                  <h5 className='text-base md:text-xl text-web-color font-semibold mb-2'>What exactly we do?</h5>
                    <span className=' text-web-color font-bold text-2xl'><i className="fa-solid fa-chevron-down"></i></span>
                  </div>
                  <div className=' Frequently_ask_box'>
                    <hr />
                    <p className='ps-1 pt-6 pb-4'>We are working on digitalizing industries through the use of information and technology. We are a full-service software development company that offers solutions mainly to B2B and B2C businesses.</p>
                  </div>
                </div>
                <div className=' Frequently_ask_box_main box-border rounded-md drop-shadow-md w-full  bg-white px-4 py-2 my-5'  >
                  <div className='flex justify-between' onClick={this.hiddenClicker} style={{ cursor: 'pointer' }}>
                  <h5 className='text-base md:text-xl text-web-color font-semibold mb-2'>What exactly we do?</h5>
                    <span className=' text-web-color font-bold text-2xl'><i className="fa-solid fa-chevron-down"></i></span>
                  </div>
                  <div className=' Frequently_ask_box'>
                    <hr />
                    <p className='ps-1 pt-6 pb-4'>We are working on digitalizing industries through the use of information and technology. We are a full-service software development company that offers solutions mainly to B2B and B2C businesses.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className='px-4 md:px-16 py-14 bg-white lg:px-32 lg:pb-20 lg:pt-10 2xl:px-[27%]'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <div className='mt-6 mb-6 lg:me-6' >
                <h3 className='text-web-color text-xl md:text-3xl lg:text-4xl font-bold'>Edufy - An ISP Management & Billing Solution</h3>
                <p className='mt-5 text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusantium minus beatae soluta voluptates quis aliquid perferendis eos, iusto numquam dolorum deleniti tempora explicabo. Porro, ratione. Dolorum recusandae ipsum ullam.</p>
                <button className='mt-5 rounded-sm px-6 py-2  text-base vanila_btn_hover_1'>Know More</button>
              </div>
              <div className='mx-auto'>
                <img src={Edufy_5} alt="" className='rounded-lg' />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default _02_Edufy