import React from 'react'
import './About.scss'
import Experiance from './Experiance/Experiance'
import Navbar from '../Navbar/Navbar'
// import AboutMe from './AboutMe/AboutMe'
// import Skills from './Skills/Skills'
import Footer from '../Footer/Footer'
export default function About(props) {
  return (
    <>
    <Navbar bgColor="bg-primary"/>
    <section id="about" className='py-5'>
      <div className="container">
        <div className="row ">
            <div className="col-md-6 mt-5 px-4">
              <div id='image' className="image animate__animated animate__fadeInUp" >
              </div>
            </div>
            <div className="col-md-6 mt-5 px-5 animate__animated animate__fadeInUp">
              <div className="row ">
                <div className="col-md-12 d-flex align-items-start mt-3 ">
                <div className="msg_box my-3 me-2 shadow-lg" >
                  <span className="box text-uppercase">About Me</span>
                </div>
                <div className="msg_box my-3 mx-3 shadow-lg">
                  <span className="box text-uppercase">skills</span>
                </div>
                <div className="msg_box my-3 ms-2 shadow-lg">
                  <span className="box text-uppercase">experiance</span>
                </div>
                </div>
              </div>
              <div className=''>
              {/* <AboutMe /> */}
              {/* <Skills /> */}
              <Experiance />
              </div>
            </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  )
}
