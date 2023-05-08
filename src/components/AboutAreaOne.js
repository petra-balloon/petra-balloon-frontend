import React from "react";

const AboutAreaOne = () => {
  return (
    <>
      {/* ================== AboutAreaOne start  ==================*/}
      <div className="about-area pd-top-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="about-thumb-inner pe-xl-5 me-xl-5 "
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="1500"
              >
                <img
                  className="animate-img-1 top_image_bounce"
                  src="assets/img/about/2.png"
                  alt="img"
                />
                <img
                  className="animate-img-2 left_image_bounce"
                  src="assets/img/about/3.png"
                  alt="img"
                />
                <img
                  className="animate-img-3 top_image_bounce"
                  src="assets/img/banner/5.svg"
                  alt="img"
                />
                <img
                  className="main-img"
                  src="assets/img/about/1.png"
                  alt="img"
                />
              </div>
            </div>
            <div
              className="col-lg-6 "
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <div className="section-title mt-5 mt-lg-0">
                {/*  <h6 className="sub-title">ABOUT US</h6> */}
                <h2 className="title">
                  <span>Weather Forecast</span> For The Dubai Balloon At
                  Atlantis
                </h2>
                <p className="content mb-4 mb-xl-5">
                  Your safety and security are our top priority, and there might
                  be times the balloon isn’t allowed to operate. We are aware
                  that this might be an activity that you were looking forward
                  to, and to avoid disappointment, we suggest checking this
                  weather widget on the day of your experience.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="single-about-inner">
                      <div className="thumb mb-3">
                        <img src="assets/img/icon/2.png" alt="img" />
                      </div>
                      <div className="details">
                        {/* <h5>Our Ambition</h5> */}
                        <p>
                          The flight will be grounded when there are
                          thunderstorms or winds above 25 knots.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-about-inner">
                      <div className="thumb mb-3">
                        <img src="assets/img/icon/3.png" alt="img" />
                      </div>
                      <div className="details">
                        {/* <h5>Our Ambition</h5> */}
                        <p>
                          Select the date you want to visit and which time of
                          the day; the animation will change according to the
                          current forecast for the selected time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================== AboutAreaOne End  ==================*/}
    </>
  );
};

export default AboutAreaOne;
