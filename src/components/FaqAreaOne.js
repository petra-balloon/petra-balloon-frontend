import React from "react";

const FaqAreaOne = () => {
  return (
    <>
      {/*==================== Faq area start ====================*/}
      <div
        className="faq-area faq-area-margin-top bg-cover pd-top-90 pd-bottom-110"
        style={{ backgroundImage: 'url("./assets/img/bg/3.png")' }}
      >
        <div className="container">
          <div className="row pd-top-120">
            <div
              className="col-xl-5 col-lg-6 col-md-8 order-lg-last"
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <div className="about-thumb-inner pt-lg-3">
                <img
                  className="main-img"
                  src="assets/img/about/rainbow.jpg"
                  alt="img"
                />
               {/*  <img
                  className="animate-img-bottom-right top_image_bounce"
                  src="assets/img/about/5.png"
                  alt="img"
                /> */}
              </div>
            </div>
            <div
              className="col-xl-7 col-lg-6"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <div className="section-title mb-0 mt-4 mt-lg-0">
                {/* <h6 className="sub-title">SOME FAQ'S</h6> */}
                <h2 className="title">
                  <span>Dubai Balloon </span> Ride With Breathtaking Skyline
                  Views Creating
                </h2>
                <p className="content">
                  Feel on top of the world and experience wonder at
                  adrenaline-rushing heights of up to a spectacular 300 meters,
                  or a 100-storey building. Marvel at the stunning shape of Palm
                  Jumeirah and take in incredible views of Dubai and its
                  glistening skyline with an experience that offers more than
                  just an observation point. The Dubai Balloon At Atlantis can
                  be found at the world’s most iconic entertainment destination,
                  Atlantis, the Palm and the record-breaking Aquaventure
                  Waterpark. Make memories with friends and bring the whole
                  family for a bucket list experience as kids under the age of
                  three get to enjoy The Dubai Balloon for free.
                </p>
              </div>
              {/*  <div
                className="accordion accordion-inner style-2 accordion-icon-left mt-3"
                id="accordionExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What services do you offer?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, search for
                      'lorem ipsum' will uncover
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      How long does it take for you to complete a project?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, search for
                      'lorem ipsum' will uncover
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      How much does it cost to work with your agency?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, search for
                      'lorem ipsum' will uncover
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Faq area end ====================*/}
    </>
  );
};

export default FaqAreaOne;
