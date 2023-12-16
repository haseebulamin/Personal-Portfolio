import React from 'react'
import './Contact.scss'
import contact from '../../images/contact.jpg'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
export default function Contact(props) {
  return (
    <>
    <Navbar bgColor="bg-primary"/>
    <section id='contact'>
        <div className="container-fluid">
            {/* row-------- */}
            <div className="row shadow">
                <div className="col-md-6 p-0 animate__animated animate__fadeInUp">
                    <img src={contact} alt="" className='h-100 w-100 '/>
                </div>
                {/* ------------ */}
                <div className="col-md-6 p-md-5 p-4 animate__animated animate__fadeInUp">
                    <h3>Contact us</h3>
                    <p className="mb-4 mt-3">We're open for any suggestion or just to have a chat</p>
                        {/* -----1 */}
                    <div className="row mb-4 mt-4">
                        <div className="col-md-4 ">
                            <div className=" w-100 d-flex align-items-start">
                                <div className="text">
                                    <p>
                                        <span className='text-uppercase'>my address:</span>
                                        198 West 21th Street, Suite 721 New York NY 10016
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* ----2 */}
                        <div className="col-md-4">
                            <div className=" w-100 d-flex align-items-start">
                                <div className="text ">
                                    <p>
                                        <span className='text-uppercase'>my EMAIL:</span>
                                        <span className="text-wrap"><a href="/" >info@yoursite.com</a></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* ---3 */}
                        <div className="col-md-4">
                            <div className=" w-100 d-flex align-items-start">
                                <div className="text text-dark">
                                    <p className='text-dark'>
                                        <span className='text-uppercase'>my PHONE:</span>
                                        +92 345 355 6598
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* --- */}
                        <form action="">
                        <div className="row mt-1">
                            <div className="col-md-6 mt-3">
                                <input id='name' type="name" autoComplete='off' name='name' className='w-100 input px-3' placeholder='Name'/>
                            </div>
                            <div className="col-md-6 mt-3">
                            <input id='email' type="email" name='email' autoComplete='off'  className='w-100 input px-3 '  placeholder='Email'/>
                            </div>
                            <div className="col-md-12 mt-3">
                            <input id='subject' type="subject" name='subject' autoComplete='off' className='w-100 input px-3 '  placeholder='Subject'/>
                            </div>
                            <div className="col-md-12 mt-3">
                            <textarea autoComplete='off' name="message" autoCorrect='off' className='w-100 textarea px-3 py-2 ' id="message" cols="30" rows="4" placeholder='Create a message here'></textarea>
                            </div>
                            <div className="col-md-12 mt-3 mb-2">
                            <button type="submit" className="btn text-uppercase">Send message</button>
                            </div>
                            <div className="col-md-12 mt-5">
                            <h4 className='mt-2'>Follow me here</h4>
                            <p className='text-wrap social'>
                            <a href="http://www.facebook.com" target="_blank" rel="noreferrer" className='text-uppercase me-2'>Facebook</a>
                            <a href="http://www.instagram.com" target="_blank" rel="noreferrer" className='text-uppercase mx-2'>instagram</a>
                            <a href="http://www.linkedin.com" target="_blank" rel="noreferrer" className='text-uppercase mx-2'>linkedin</a>
                            <a href="http://www.twitter.com" target="_blank" rel="noreferrer" className='text-uppercase ms-2'>twitter</a>
                            </p>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
        
    </section>
    <Footer/>
    </>
  )
}

