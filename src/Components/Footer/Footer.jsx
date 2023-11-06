import React from 'react'
import './Footer.scss'
export default function Footer() {
  return (
    <section id="footer">
        <div className="container my-5">
            <div className="row  ">
                <div className="col-md-4 animate__animated animate__fadeInUp">
                  <h2 className='head mb-5'>H.Amin</h2>
                  <p className="content">
                  A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                  <div className="icon d-flex my-4 ">
                    <span className="box rounded-circle me-1"><i className="bi bi-twitter"></i></span>
                    <span className="box rounded-circle mx-1"><i className="bi bi-facebook"></i></span>
                    <span className="box rounded-circle mx-1"><i className="bi bi-instagram"></i></span>
                    <span className="box rounded-circle ms-1"><i className="bi bi-linkedin"></i></span>
                  </div>
                </div>
                <div className="col-md-4  animate__animated animate__fadeInUp">
                <h2 className='heading mb-5 '>Services</h2>
                <ul className='d-block list-unstyled d-flex flex-column ' >
                  <li><a href="/" className="service-a"><span><i className="bi bi-arrow-right-short text-primary"></i></span>Web Design</a></li>
                  <li><a href="/" className="service-a"><span><i className="bi bi-arrow-right-short text-primary"></i></span>Web Development</a></li>
                  <li><a href="/" className="service-a"><span><i className="bi bi-arrow-right-short text-primary"></i></span>Graphic Design</a></li>
                  <li><a href="/" className="service-a"><span><i className="bi bi-arrow-right-short text-primary"></i></span>UI/UX Design</a></li>
                </ul>
                </div>
                <div className="col-md-4  animate__animated animate__fadeInUp">
                <h2 className='heading mb-5 '>Have a Questions?</h2>
                <ul className='d-block list-unstyled  ps-2' >
                  <li className='d-flex mb-2'>
                   <i className=" icon bi bi-map-fill text-primary"></i>
                    <div className='info ms-4'>203 Fake St. Mountain View, San Francisco, California, USA</div>
                  </li>
                  <li className='d-flex mb-2'>
                    <i className="icon bi bi-telephone-fill text-primary"></i>
                  <div className='info ms-2'>+2 392 3929 210</div>
                  </li>
                  <li className='d-flex mb-2'>
                    <i className=" icon bi bi-send-fill text-primary"></i>
                    <div className='info ms-2'>info@yourdomain.com</div>
                  </li>
                </ul>
                </div>
            </div>
        </div>
        <hr />
        <div className="container-fluid text-center p-5 animate__animated animate__fadeInUp">
         <p>Copyright  <i className="bi bi-c-circle"></i> 2023 All rights reserved | This template is made with <i className="bi bi-heart-fill text-danger"></i> by <a href="https://www.instagram.com/hasii_choudhary/" target='_blank' rel="noreferrer">Haseeb Ul Amin</a></p>
        </div>
    </section>
  )
}
