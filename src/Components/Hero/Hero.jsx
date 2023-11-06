import React from "react";
import "./Hero.scss";
import Navbar from "../Navbar/Navbar";
import ContactBox from "../ContactBox/ContactBox";
import Footer from "../Footer/Footer" 
export default function Hero(props) {


  return (
    <>
      <section id="home" className="hero_wrap ">
        <Navbar />
        <div className="overlay"></div>
        <div className="container d-flex align-items-center">
          <div className="row ">
            <div className="col-md-7 ">
              <div className="text animate__animated animate__fadeInUp">
                <div className="msg_box my-3 animate__fadeInU">
                  <span className="box">Hi There!</span>
                  <span className="icon"><i className="bi bi-caret-down-fill"></i></span>
                </div>
                <h1 className="mb-4 ">I am Haseeb Ul Amin <br /> <span>I Love to Develop._</span></h1>
                <div className="content w-100 mb-4">
                  <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                </div>
                <div className="btns my-5">
                  <a href="/" className="btn btn-primary p-4 ">
                    Hire Me <span><i className="bi bi-arrow-right fw-bolder ms-2"></i></span>
                  </a>
                  <a href="/" className="btn btn-light text-primary ms-4 p-4 ">
                   view portfolio <span><i className="bi bi-arrow-right fw-bolder ms-2"></i></span>
                  </a>
                </div>
                <div className="social-media mt-5">
                   <a href="http://www.facebook.com" target="_blank" rel="noreferrer">
                    <span><i className="bi bi-plus"></i></span>Facebook</a>
                   <a href="http://www.instagram.com" target="_blank" rel="noreferrer">
                    <span><i className="bi bi-plus"></i></span>instagram</a>
                   <a href="http://www.linkedin.com" target="_blank" rel="noreferrer">
                    <span><i className="bi bi-plus"></i></span>linkedin</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactBox/>
      <Footer/>
    </>
  );
}
