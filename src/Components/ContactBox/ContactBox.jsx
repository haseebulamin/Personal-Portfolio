import React from 'react'
import './ContactBox.scss'
export default function ContactBox() {
  return (
    <>
    <section id="contactBox">
        <div className="container ">
            <div className="row d-flex align-items-center py-5">
                <div className="col-md-8 animate__animated animate__fadeInUp">
                    <h2>Have any works you want to done by me?</h2>
                    <p className='text-white-50'>Far far away, behind the word mountains</p>
                </div>
                <div className="col-md-4 d-flex align-items-center animate__animated animate__fadeInUp">
                <button type="button" className="btn w-100 py-3 text-uppercase">Contact me</button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
