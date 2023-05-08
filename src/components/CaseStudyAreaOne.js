import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CaseStudyAreaOne = () => {
  return (
    <>
      {/*================== case-study area start ==================*/}
      <div className="case-study-area bg-relative pd-top-110">
        <img
          className="animate-img-1 top_image_bounce"
          src="assets/img/banner/2.png"
          alt="img"
        />
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title">GALLERY HERE</h6>
            <h2 className="title">
              The <span>Dubai</span> Balloon Experiences
            </h2>
            <div className="row">
              <div className="col-lg-12">
                <p>
                  Each experience offers stunning views over the iconic Palm
                  Jumeirah, the Dubai skyline and its record-breaking landmarks
                  like the stunning Atlantis The Royal, Burj Al Arab, Burj
                  Khalifa, Ain Dubai,and many more. This aerial adventure is
                  easy to fit in your itinerary and fun and safe for all ages,
                  making it the ideal activity for family and friends.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-case-study-inner">
                <div className="thumb">
                  <img src="assets/img/case-study/download3.jpg" alt="img" />
                </div>
                <div className="details">
                  <h5>
                    <Link to="/case-study-details">Tecnology Farms</Link>
                  </h5>
                  <a className="cat" href="#">
                    Las vegas
                  </a>
                  <a className="right-arrow" href="#">
                    <FaAngleDoubleRight />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-case-study-inner">
                <div className="thumb">
                  <img src="assets/img/case-study/download.jpg" alt="img" />
                </div>
                <div className="details">
                  <h5>
                    <Link to="/case-study-details">Tecnology Farms</Link>
                  </h5>
                  <a className="cat" href="#">
                    Las vegas
                  </a>
                  <a className="right-arrow" href="#">
                    <FaAngleDoubleRight />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-case-study-inner">
                <div className="thumb">
                  <img src="assets/img/case-study/download1.jpg" alt="img" />
                </div>
                <div className="details">
                  <h5>
                    <Link to="/case-study-details">Tecnology Farms</Link>
                  </h5>
                  <a className="cat" href="#">
                    Las vegas
                  </a>
                  <a className="right-arrow" href="#">
                    <FaAngleDoubleRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================== case-study area end ==================*/}
    </>
  );
};

export default CaseStudyAreaOne;
