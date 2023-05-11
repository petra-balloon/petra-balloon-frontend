import React from "react";
import { FaCheck } from "react-icons/fa";

const PricingAreaOne = () => {
  return (
    <>
      {/* Pricing Area One start */}
      <div className="pricing-area bg-gray pd-top-120 pd-bottom-90">
        <div className="container">
          {/* <div className="section-title text-center">
            <h6 className="sub-title">Pricing plan</h6>
            <h2 className="title">
              Best plane to get our <span>Services</span>
            </h2>
          </div> */}
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-pricing-inner style-3">
                {/* <h2 className='mb-3'>
                  $19 <sub>/mo</sub>
                </h2> */}
                <h5>REGULAR PASS</h5>
                <p>
                  Marvel at Dubai's record-breaking skyline on a 10-minute
                  flight that offer breathtaking views. After your flight, stop
                  at the retail store and lounge
                </p>
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
                    Children Below 3 years of age 0 JOD * Proof of age required
                    at entrance
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
            <div className="col-lg-3 col-md-6">
              <div className="single-pricing-inner style-3">
                {/* <h2 className='mb-3'>
                  $19 <sub>/mo</sub>
                </h2> */}
                <h5>FAST PASS</h5>
                <p>
                  Enjoy a priority qeue to save time as you jump on your
                  10-minute flight, followed by a complimentary beverage at the
                  lounge and stop at the retail store
                </p>
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
            <div className="col-lg-3 col-md-6">
              <div className="single-pricing-inner style-3">
                {/* <h2 className='mb-3'>
                  $19 <sub>/mo</sub>
                </h2> */}
                <h5>SUNRISE PASS</h5>
                <p>
                  Early bird catches the view! Watch as the sun rises over the
                  Dubai skyline, and receive a complimentary beverage and photo.
                </p>
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
                    Children Below 3 years of age 0 JOD * Proof of age required
                    at entrance
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
            <div className="col-lg-3 col-md-6">
              <div className="single-pricing-inner style-3">
                {/* <h2 className='mb-3'>
                  $19 <sub>/mo</sub>
                </h2> */}
                <h5>EXCLUSIVE USE OF BALLOON</h5>
                <ul>
                  <li>
                    Book the balloon entirely for private use and enjoy a Fast
                    Pass Experience with a 10-minute flight. Inclusive of a
                    complimentary drink in The Dubai Balloon Lounge. FIll out
                    the enquiry form below and one of our Experience Consultants
                    will reach out to you shortly.
                  </li>
                </ul>
                <a
                  className="btn btn-black border-radius border-radius-0 w-100"
                  href="#"
                >
                  Contact Us
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
