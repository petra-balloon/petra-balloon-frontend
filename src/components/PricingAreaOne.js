import React from "react";
import { FaCheck } from "react-icons/fa";

const PricingAreaOne = () => {
  return (
    <>
      {/* Pricing Area One start */}
      <div className="pricing-area bg-gray pd-top-120 pd-bottom-90">
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title">Pricing plan</h6>
            <h2 className="title">
              Best plane to get our <span>Services</span>
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-inner style-3">
                {/* <h2 className='mb-3'>
                  $19 <sub>/mo</sub>
                </h2> */}
                <h5>REGULAR PASS</h5>
                <ul>
                  <li>
                    <FaCheck />
                    Adult 175 JOD
                  </li>
                  <li>
                    <FaCheck />
                    Children 3 to 11 years 75 JOD
                  </li>
                  <li>
                    <FaCheck />
                    Children Below 3 years of age 0 JOD
                  </li>
                </ul>
                <a
                  className="btn btn-black border-radius border-radius-0 w-100"
                  href="#"
                >
                  BooK Now
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-inner style-3 price-active">
                {/* <h2 className='mb-3'>
                  $19 <sub>/mo</sub>
                </h2> */}
                <h5>FAST PASS</h5>
                <ul>
                  <li>
                    <FaCheck />
                    Adult 175 JOD
                  </li>
                  <li>
                    <FaCheck />
                    Children 3 to 11 years 75 JOD
                  </li>
                  <li>
                    <FaCheck />
                    Children Below 3 years of age 0 JOD
                  </li>
                </ul>
                <a
                  className="btn btn-black border-radius border-radius-0 w-100"
                  href="#"
                >
                  Started
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-pricing-inner style-3">
                {/* <h2 className='mb-3'>
                  $19 <sub>/mo</sub>
                </h2> */}
                <h5>EXCLUSIVE USE OF BALLOON</h5>
                <ul>
                  <li>
                    <FaCheck />
                    Book the balloon entirely for private use and enjoy a Fast
                    Pass Experience with a 10-minute flight.
                  </li>
                </ul>
                <a
                  className="btn btn-black border-radius border-radius-0 w-100"
                  href="#"
                >
                  Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pricing Area One start */}
    </>
  );
};

export default PricingAreaOne;
