import React, { useRef } from "react";
import { FaInstagram } from "react-icons/fa";
import AboutAreaOne from "../components/AboutAreaOne";
import BannerOne from "../components/BannerOne";
import BlogAreaOne from "../components/BlogAreaOne";
import CaseStudyAreaOne from "../components/CaseStudyAreaOne";
import ContactAreaOne from "../components/ContactAreaOne";
import CounterAreaOne from "../components/CounterAreaOne";
import FaqAreaOne from "../components/FaqAreaOne";
import FooterOne from "../components/FooterOne";
import NavBar from "../components/NavBar";
import PricingAreaOne from "../components/PricingAreaOne";
import ServiceAreaOne from "../components/ServiceAreaOne";
import TeamAreaOne from "../components/TeamAreaOne";
import WorkProcessOne from "../components/WorkProcessOne";
import TeamAreaGroup from "../components/TeamAreaGroup";

const HomeOne = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Banner One */}
      <BannerOne />

      {/* About Area One */}
      {/*  <AboutAreaOne /> */}

      {/* Service Area One */}
      {/*  <ServiceAreaOne /> */}

      {/* FAQ Area One */}
      <FaqAreaOne />

      {/* Case Study Area One */}
      {/*  <CaseStudyAreaOne /> */}

      {/* Team Area One */}

      {/* <TeamAreaOne /> */}

      <TeamAreaGroup />
      <div className="container">
        <div className="row" >
          <div style={{display:"flex", justifyContent:"center" , alignItems:"center"}}>
            <div
              style={{
                border: "1px solid black",
                backgroundColor: "rgb(170, 4, 4)",
              }}
              href="#"
              class="btn btn-social btn-instagram"
            >
              <div>
                <div
                  style={{
                    width: "150px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  {" "}
                  instagram
                  <FaInstagram
                    style={{
                      color: "#f09433",
                      width: "20px",
                      height: "20px",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "centers",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Counter Area One */}

      {/* <CounterAreaOne /> */}

      {/* Contact Area One */}

      {/* <ContactAreaOne /> */}

      {/* Work Process One */}

      {/*  <WorkProcessOne /> */}

      {/* Pricing Area One */}
      {/* <PricingAreaOne /> */}

      {/* Blog Area One */}
      {/* <BlogAreaOne /> */}

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default HomeOne;
