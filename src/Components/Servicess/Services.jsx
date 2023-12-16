import React from 'react'
import './Services.scss'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
export default function Services(props) {
  return (
    <>
    <Navbar bgColor="bg-primary"/>
    <section id="service" className='pt-4'>
        <div className="container ">
            {/* 1st row  */}
            <div className="row justify-content-center">
                <div className="col-md-7 mb-5 animate__animated animate__fadeInUp">
            <p className='para text-primary my-2 d-block text-center text-uppercase '>services</p>
            <h1 className=' head text-center lh-base  mb-4 '>This is My Expertise, The Services I'll Provide My Clientss</h1>
            </div>
            </div>
        {/* 2nd row  */}
        <div className="row mt-3 justify-content-center">
                <div className="col-md-4 px-4">
                <div className="card w-100  animate__animated animate__fadeInUp shadow mt-3" >
                    <div className="card-body text-start p-5">
                    <div className="box"><i className="bi bi-boxes"></i></div>
                    <h4 className="card-title ">UI & UX Design</h4>
                    <p className="card-text mb-4">Far far away, behind the word  mountains, far from the  countries Vokalia and  Consonantia, there live the blind  texts.</p>
                    <p className="mb-3"><a href="/" className="card-link">Read more<i className="bi bi-arrow-right"></i></a></p>
                     </div>
                    </div>
                </div>
                <div className="col-md-4 px-4">
                <div className="card w-100  animate__animated animate__fadeInUp shadow mt-3" >
                    <div className="card-body text-start p-5">
                    <div className="box"><i className="bi bi-code-slash"></i></div>
                    <h4 className="card-title ">Web Development</h4>
                    <p className="card-text mb-4">Far far away, behind the word mountains, far from the countries Vokalia and  Consonantia, there live the blind texts.</p>
                    <p className="mb-3"><a href="/" className="card-link">Read more<i className="bi bi-arrow-right"></i></a></p>
                     </div>
                    </div>
                </div>
                <div className="col-md-4 px-4">
                <div className="card w-100  animate__animated animate__fadeInUp shadow mt-3" >
                    <div className="card-body text-start p-5">
                    <div className="box"><i className="bi bi-window-stack"></i></div>
                    <h4 className="card-title ">Graphic Design</h4>
                    <p className="card-text mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <p className="mb-3"><a href="/" className="card-link">Read more<i className="bi bi-arrow-right"></i></a></p>
                     </div>
                    </div>
                </div>
            </div>
            {/* 3rd row */}
            <div className="row my-5 py-5 justify-content-center">
             <div className="col-md-8 animate__animated animate__fadeInUp">
                <p className=' text-secondary'><strong>Have any works you want to done by me? <a href="/">Contect me!</a></strong></p>
                <p >Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
             </div>
            </div>
        </div>

    </section>
    <section id="rank">
        <div className="overlay"></div>
        <div className="container">
            <div className="row animate__animated animate__fadeInUp">
                <div className="col-sm-6  col-md-4">
                    <div className="wrap d-flex py-2">
                        <div className="icon">
                            <i className="bi bi-person-vcard"></i>
                        </div>
                        <div className="text">
                            <h2>3,000</h2>
                            <span>HAPPY CUSTOMER</span>
                        </div>
                    </div>

                </div>
                <div className="col-sm-6  col-md-4">
                    <div className="wrap d-flex py-2">
                        <div className="icon">
                            <i className="bi bi-folder2-open"></i>
                        </div>
                        <div className="text">
                            <h2>320</h2>
                            <span>PROJECT COMPLETED</span>
                        </div>
                    </div>

                </div>
                <div className="col-sm-6  col-md-4">
                    <div className="wrap d-flex py-2">
                        <div className="icon">
                            <i className="bi bi-cup-hot"></i>
                        </div>
                        <div className="text">
                            <h2>1,000</h2>
                            <span>CUPS OF COFFEE</span>
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
