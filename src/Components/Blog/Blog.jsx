import React from "react";
import "./Blog.scss";
import blog1 from "../../images/blog-1.jpg";
import blog2 from '../../images/blog-2.jpg'
import blog3 from '../../images/blog-3.jpg'
import blog4 from '../../images/blog-4.jpg'
import blog5 from '../../images/blog-5.jpg'
import blog6 from '../../images/blog-6.jpg'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
export default function Blog(props) {
  return (
    <>
    <Navbar bgColor="bg-primary"/>
    <section id="blog" className="pt-2 pb-5">
      <div className="container ">
        {/* row 1 */}
        <div className="row justify-content-center">
          <div className="col-md-7 animate__animated animate__fadeInUp">
            <p className="para  my-2 d-block text-center text-uppercase mt-3">
              our blog
            </p>
            <h1 className=" head text-center lh-base  mb-4 ">
              Recent From Blog
            </h1>
          </div>
        </div>
        {/* row 2 */}
        <div className="row">
          <div className="col-md-6">
            <div className="card w-100 shadow animate__animated animate__fadeInUp mt-5">
              <img src={blog1} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="status text-uppercase ms-3 my-3">
                  <span>
                    <i className="bi bi-calendar-day text-primary "></i>
                    <span className="fw-bold text-secondary ms-1">
                      dec. 31, 2023
                    </span>
                  </span>
                  <span>
                    <i className="bi bi-chat-fill ms-4 text-primary"></i>
                    <span className="fw-bold text-primary ms-1">
                      {" "}
                      3 COMMENTS
                    </span>
                  </span>
                </div>
                <div className="title ms-3 mb-3 mt-4">
                  <h3>Tips About Creating A New Web Design</h3>
                </div>
                <p className="card-text ms-3 mt-4 mb-4 ">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card w-100 shadow animate__animated animate__fadeInUp mt-5">
              <img src={blog2} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="status text-uppercase ms-3 my-3">
                  <span>
                    <i className="bi bi-calendar-day text-primary "></i>
                    <span className="fw-bold text-secondary ms-1">
                      dec. 31, 2023
                    </span>
                  </span>
                  <span>
                    <i className="bi bi-chat-fill ms-4 text-primary"></i>
                    <span className="fw-bold text-primary ms-1">
                      {" "}
                      3 COMMENTS
                    </span>
                  </span>
                </div>
                <div className="title ms-3 mb-3 mt-4">
                  <h3>Tips About Creating A New Web Design</h3>
                </div>
                <p className="card-text ms-3 mt-4 mb-4 ">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* row 3 */}
        <div className="row">
          <div className="col-md-6">
            <div className="card w-100 shadow animate__animated animate__fadeInUp mt-5">
              <img src={blog3} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="status text-uppercase ms-3 my-3">
                  <span>
                    <i className="bi bi-calendar-day text-primary "></i>
                    <span className="fw-bold text-secondary ms-1">
                      dec. 31, 2023
                    </span>
                  </span>
                  <span>
                    <i className="bi bi-chat-fill ms-4 text-primary"></i>
                    <span className="fw-bold text-primary ms-1">
                      {" "}
                      3 COMMENTS
                    </span>
                  </span>
                </div>
                <div className="title ms-3 mb-3 mt-4">
                  <h3>Tips About Creating A New Web Design</h3>
                </div>
                <p className="card-text ms-3 mt-4 mb-4 ">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card w-100 shadow animate__animated animate__fadeInUp mt-5">
              <img src={blog4} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="status text-uppercase ms-3 my-3">
                  <span>
                    <i className="bi bi-calendar-day text-primary "></i>
                    <span className="fw-bold text-secondary ms-1">
                      dec. 31, 2023
                    </span>
                  </span>
                  <span>
                    <i className="bi bi-chat-fill ms-4 text-primary"></i>
                    <span className="fw-bold text-primary ms-1">
                      {" "}
                      3 COMMENTS
                    </span>
                  </span>
                </div>
                <div className="title ms-3 mb-3 mt-4">
                  <h3>Tips About Creating A New Web Design</h3>
                </div>
                <p className="card-text ms-3 mt-4 mb-4 ">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* row 4  */}
        <div className="row">
          <div className="col-md-6">
            <div className="card w-100 shadow animate__animated animate__fadeInUp mt-5">
              <img src={blog5} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="status text-uppercase ms-3 my-3">
                  <span>
                    <i className="bi bi-calendar-day text-primary "></i>
                    <span className="fw-bold text-secondary ms-1">
                      dec. 31, 2023
                    </span>
                  </span>
                  <span>
                    <i className="bi bi-chat-fill ms-4 text-primary"></i>
                    <span className="fw-bold text-primary ms-1">
                      {" "}
                      3 COMMENTS
                    </span>
                  </span>
                </div>
                <div className="title ms-3 mb-3 mt-4">
                  <h3>Tips About Creating A New Web Design</h3>
                </div>
                <p className="card-text ms-3 mt-4 mb-4 ">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card w-100 shadow animate__animated animate__fadeInUp mt-5">
              <img src={blog6} className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="status text-uppercase ms-3 my-3">
                  <span>
                    <i className="bi bi-calendar-day text-primary "></i>
                    <span className="fw-bold text-secondary ms-1">
                      dec. 31, 2023
                    </span>
                  </span>
                  <span>
                    <i className="bi bi-chat-fill ms-4 text-primary"></i>
                    <span className="fw-bold text-primary ms-1">
                      {" "}
                      3 COMMENTS
                    </span>
                  </span>
                </div>
                <div className="title ms-3 mb-3 mt-4">
                  <h3>Tips About Creating A New Web Design</h3>
                </div>
                <p className="card-text ms-3 mt-4 mb-4 ">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
    
  );
}
