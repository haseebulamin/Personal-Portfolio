import React from 'react'
import './Skills.scss'
export default function Skills() {
  return (
   <div id='skills'>
     <div className="row animate__animated animate__fadeInUp">
       <div className="col-md-12">
        <h1 className='head my-4'>Skills</h1>
        <p className='para my-4'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
        <div className="row">
            <div className="col-md-6 my-3">
            <label htmlFor="progress" className='d-flex justify-content-between my-2 ms-1 me-2 '><span>HTML/CSS</span><span className='text-primary '>94%</span></label>
            <div className="progress"> 
            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Basic example" style={{width: "94%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            <div className="col-md-6 my-3">
            <label htmlFor="progress" className='d-flex justify-content-between my-2 ms-1 me-2'><span>BootStrap</span><span className='text-primary'>90%</span></label>
            <div className="progress"> 
            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Basic example" style={{width: "90%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6 my-3">
            <label htmlFor="progress" className='d-flex justify-content-between my-2 ms-1 me-2 '><span>JavaScript</span><span className='text-primary '>85%</span></label>
            <div className="progress"> 
            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Basic example" style={{width: "85%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            <div className="col-md-6 my-3">
            <label htmlFor="progress" className='d-flex justify-content-between my-2 ms-1 me-2'><span>React JS</span><span className='text-primary'>80%</span></label>
            <div className="progress"> 
            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Basic example" style={{width: "80%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
        </div>
        <div className="row ">
            <div className="col-md-6 my-3">
            <label htmlFor="progress" className='d-flex justify-content-between my-2 ms-1 me-2 '><span>C++</span><span className='text-primary '>88%</span></label>
            <div className="progress"> 
            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Basic example" style={{width: "88%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            <div className="col-md-6 my-3">
            <label htmlFor="progress" className='d-flex justify-content-between my-2 ms-1 me-2'><span>OOP</span><span className='text-primary'>79%</span></label>
            <div className="progress"> 
            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Basic example" style={{width: "79%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
        </div>
        
       </div>
    </div>
   </div>
  )
}
