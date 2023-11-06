import React from 'react'
import './Pricing.scss'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
export default function Pricing(props) {
  return (
    <>
    <Navbar bgColor="bg-primary"/>
    <section id="pricing" >
        <div className="container ">
            {/* 1st row  */}
            <div className="row justify-content-center">
                <div className="col-md-7 mb-5 animate__animated animate__fadeInUp">
            <p className='para  my-2 d-block text-center text-uppercase mt-3'>MY PRICING</p>
            <h1 className=' head text-center lh-base  mb-4 '>Pricing & Packages</h1>
            </div>
            </div>
        {/* 2nd row  */}
        <div className="row mt-3 justify-content-center mb-5">
            {/* 1st card  */}
                <div className="col-md-4 px-4">
                <div className="card w-100  shadow-sm animate__animated animate__fadeInUp mt-3" >
                    <div className="card-body text-start p-5">
                    <h5 className="card-title text-center text-uppercase my-4">BASIC PLAN</h5>
                    <div className="price text-center d-flex justify-content-center mb-5"><span>$</span><h1>49K</h1></div>
                    <p className="card-text mb-5 text-center px-3">Far far away, behind the word  mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="text-center"><button type="button" className="btn btn-outline-primary text-uppercase px-4 py-3 shadow">Get Started</button></div>
                     </div>
                    </div>
                </div>
                    {/* 2nd card  */}
                    <div className="col-md-4 px-4">
                <div className="card w-100  shadow-sm animate__animated animate__fadeInUp mt-3" >
                    <div className="card-body text-start p-5">
                    <h5 className="card-title text-center text-uppercase my-4">BEGINNER PLAN</h5>
                    <div className="price text-center d-flex justify-content-center mb-5"><span>$</span><h1>79K</h1></div>
                    <p className="card-text mb-5 text-center px-3">Far far away, behind the word  mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="text-center"><button type="button" className="btn btn-outline-primary text-uppercase px-4 py-3 shadow">Get Started</button></div>
                     </div>
                    </div>
                </div>
                    {/* 3rd card  */}
                    <div className="col-md-4 px-4">
                <div className="card w-100  shadow-sm animate__animated animate__fadeInUp mt-3" >
                    <div className="card-body text-start p-5">
                    <h5 className="card-title text-center text-uppercase my-4">PREMIUM PLAN</h5>
                    <div className="price text-center d-flex justify-content-center mb-5"><span>$</span><h1>109K</h1></div>
                    <p className="card-text mb-5 text-center px-3">Far far away, behind the word  mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="text-center"><button type="button" className="btn btn-outline-primary text-uppercase px-4 py-3 shadow">Get Started</button></div>
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
