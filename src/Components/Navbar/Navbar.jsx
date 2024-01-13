import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  

  return (
    <nav className={`navbar navbar-expand-lg ${props.bgColor} navbar-dark`}>
  <div className="container animate__fadeInDown animate__animated">
    <Link className="navbar-brand " to="/">H.amin</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon mb-1 me-1"> </span>
      <span className="menu">MENU</span></button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
        <li className="nav-item"><Link className="nav-link py-3 px-4 mx-1" aria-current="page" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link py-3 px-4 mx-1" to="/about">About</Link></li>
        <li className="nav-item"><Link className="nav-link py-3 px-4 mx-1" to="/services">Services</Link></li>
        <li className="nav-item"><Link className="nav-link py-3 px-4 mx-1" to="/portfolio">Portfolio</Link></li>
        <li className="nav-item"><Link className="nav-link py-3 px-4 mx-1" to="/pricing">Pricing</Link></li>
        <li className="nav-item"><Link className="nav-link py-3 px-4 mx-1" to="/blog">Blog</Link></li>
        <li className="nav-item"><Link className="nav-link py-3 px-4" to="/contact">Contact</Link></li>
        </ul>
    </div>
  </div>
</nav>
  )
}
