import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const TeamAreaGroup = () => {
  return (
    <>
      {/* ================= TeamAreaGroup Start =================*/}
      <div className="team-area bg-relative pd-top-120 pd-bottom-90">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="single-team-inner text-center">
                <div className="thumb">
                  <img src="assets/img/team/1.jpg" alt="img" />
                  <ul className="team-social-inner">
                    <li>
                      <a href="#">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="single-team-inner text-center">
                <div className="thumb">
                  <img src="assets/img/team/2.jpg" alt="img" />
                  <ul className="team-social-inner">
                    <li>
                      <a href="#">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="single-team-inner text-center">
                <div className="thumb">
                  <img src="assets/img/team/3.jpg" alt="img" />
                  <ul className="team-social-inner">
                    <li>
                      <a href="#">
                        <FaFacebookF />
                      </a>
                    </li>
                  
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="single-team-inner text-center">
                <div className="thumb">
                  <img src="assets/img/team/4.jpg" alt="img" />
                  <ul className="team-social-inner">
                    <li>
                      <a href="#">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================= TeamAreaGroup End =================*/}
    </>
  );
};

export default TeamAreaGroup;
