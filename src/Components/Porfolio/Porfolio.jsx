import React from 'react'
import './Porfolio.scss'
import blog1 from '../../images/blog-1.jpg'
import blog2 from '../../images/blog-2.jpg'
import blog3 from '../../images/blog-3.jpg'
import blog4 from '../../images/blog-4.jpg'
import blog5 from '../../images/blog-5.jpg'
import blog6 from '../../images/blog-6.jpg'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
// import Student from './Student/Student'
export default function Porfolio(props) {
  return (
    <>
    <Navbar bgColor="bg-primary"/>
    <section id="portfolio"  className='pt-4'>
    <div className="container ">
        {/* 1st row  */}
        <div className="row justify-content-center">
        <div className="col-md-7 mb-4 animate__animated animate__fadeInUp">
        <p className='para text-primary my-2 d-block text-center text-uppercase '>portfolio</p>
        <h1 className=' head text-center lh-base  mb-4 '>My Latest Work</h1>
        </div>
        </div>
    {/* 2nd row  */}
    <div className="row mt-2 justify-content-center">
        {/* -----------1 */}
            <div className="col-md-6 my-3 ">
            <div className="card w-100 rounded-0 border-0 d-flex justify-content-center align-items-center animate__animated animate__flipInY" style={{backgroundImage: `url(${blog1})`}} >
              <div className="overlay"></div>
              <div className="text text-center p-4 ">
                <h3><a href="/">Branding &amp; Illustration Design</a></h3>
                <span className='text-white-50 fw-bold fs-4'>Web Design</span>
              </div>
            </div>
            </div>
        {/* -----------2 */}
        <div className="col-md-6 my-3 ">
            <div className="card w-100 rounded-0 border-0 d-flex justify-content-center align-items-center animate__animated animate__flipInY" style={{backgroundImage: `url(${blog2})`}} >
              <div className="overlay"></div>
              <div className="text text-center p-4 ">
                <h3><a href="/">Branding &amp; Illustration Design</a></h3>
                <span className='text-white-50 fw-bold fs-4'>Web Design</span>
              </div>
            </div>
            </div>
    </div>
     {/* 3rd row  */}
     <div className="row mt-2 justify-content-center">
        {/* -----------3 */}
            <div className="col-md-6 my-3 ">
            <div className="card w-100 rounded-0 border-0 d-flex justify-content-center align-items-center animate__animated animate__flipInY" style={{backgroundImage: `url(${blog3})`}} >
              <div className="overlay"></div>
              <div className="text text-center p-4 ">
                <h3><a href="/">Branding &amp; Illustration Design</a></h3>
                <span className='text-white-50 fw-bold fs-4'>Web Design</span>
              </div>
            </div>
            </div>
        {/* -----------4 */}
        <div className="col-md-6 my-3 ">
            <div className="card w-100 rounded-0 border-0 d-flex justify-content-center align-items-center animate__animated animate__flipInY" style={{backgroundImage: `url(${blog4})`}} >
              <div className="overlay"></div>
              <div className="text text-center p-4 ">
                <h3><a href="/">Branding &amp; Illustration Design</a></h3>
                <span className='text-white-50 fw-bold fs-4'>Web Design</span>
              </div>
            </div>
            </div>
    </div>
     {/* 4th row  */}
     <div className="row mt-2 justify-content-center">
        {/* -----------5 */}
            <div className="col-md-6 my-3 ">
            <div className="card w-100 rounded-0 border-0 d-flex justify-content-center align-items-center animate__animated animate__flipInY" style={{backgroundImage: `url(${blog5})`}} >
              <div className="overlay"></div>
              <div className="text text-center p-4 ">
                <h3><a href="/">Branding &amp; Illustration Design</a></h3>
                <span className='text-white-50 fw-bold fs-4'>Web Design</span>
              </div>
            </div>
            </div>
        {/* -----------6 */}
        <div className="col-md-6 my-3 ">
            <div className="card w-100 rounded-0 border-0 d-flex justify-content-center align-items-center animate__animated animate__flipInY" style={{backgroundImage: `url(${blog6})`}} >
              <div className="overlay"></div>
              <div className="text text-center p-4 ">
                <h3><a href="/">Branding &amp; Illustration Design</a></h3>
                <span className='text-white-50 fw-bold fs-4'>Web Design</span>
              </div>
            </div>
            </div>
    </div>

</div>
</section>
<Footer/>
</>
  )
}
