import React from "react";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterOne = () => {
  return (
    <>
      {/* ================== Footer One Start ==================*/}
      <footer className="footer-area bg-black bg-cover">
        <div className="footer-subscribe">
          <div className="container">
            <div className="footer-subscribe-inner bg-cover"></div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_about">
                <div className="thumb">
                  <img
                    style={{ height: "130px" }}
                    src="assets/img/logo1.png"
                    alt="img"
                  />
                </div>
                <div className="details">
                  <p>
                    PETRA BALLOON <br></br> PETRA BALLOON ST.<br></br> PETRA 71810 <br></br>JORDAN
                  </p>
                  <p className="mt-3">
                    <FaPhoneAlt /> 0798001088
                  </p>
                  <p className="mt-2">
                    <FaEnvelope /> Hello@petraballoon.com
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6"></div>

            <div className="col-lg-3 col-md-6"></div>

            <div className="col-lg-3 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Quick Links</h4>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/experience">Experiences</Link>
                  </li>
                  <li>
                    <Link to="/plan-your-flight">Plan Your Flight</Link>
                  </li>
                  <li>
                    <Link to="/">Photo Memories</Link>
                  </li>
                  <li>
                    <Link to="/about">Location</Link>
                  </li>
                  <li>
                    <Link to="/terms&condition">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link to="/FAQs">FAQS</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6"></div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 align-self-center">
                <p>
                  <span style={{ marginRight: "5px" }}> @ 2023</span>
                  <a target="_blank">petraballoon</a>
                  <span style={{ marginRight: "5px" }}>
                    design and developed by
                  </span>
                  <a href="https://www.verticalsols.com/" target="_blank">
                    Verticalsols
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* ================== Footer One  end ==================*/}
    </>
  );
};

export default FooterOne;
