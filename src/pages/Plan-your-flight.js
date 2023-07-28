import React from "react";
import AboutAreaOne from "../components/AboutAreaOne";
import ContactAreaOne from "../components/ContactAreaOne";
import CounterAreaOne from "../components/CounterAreaOne";
import FooterOne from "../components/FooterOne";
import NavBar from "../components/NavBar";
import TeamAreaOne from "../components/TeamAreaOne";
import WorkProcessOne from "../components/WorkProcessOne";
import Breadcrumbtwo from "../components/Breadcrumbtwo";
import FaqAreaThree from "../components/FaqAreaThree";

const PlanYourFlight = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumbtwo />

      {/* FAQ Area One */}
      <FaqAreaThree />

      {/* About Area One */}
      <AboutAreaOne />

      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 style={{ marginTop: "34px" }}>What To Wear?</h2>
            <p style={{ fontSize: "18px" }}>
              Petra enjoys sunny weather throughout the year, though some months
              are warmer than others. As you plan to experience The Petra
              Balloon, it's important to consider the weather conditions during
              your visit. In the summer months from May to September, choose
              cool and loose-fitting.
            </p>
            <p style={{ fontSize: "18px" }}>
              Please note that large bags are not allowed onboard, but backpacks
              and purses are permitted. It is recommended to avoid wearing high
              heels for your comfort and safety.
            </p>
            <p style={{ fontSize: "18px" }}>
              From May to September, always wear cool, loose clothing during the
              summer.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 style={{ marginTop: "34px" }}>
              Wheelchair And Stroller Accessibility
            </h2>
            <p style={{ fontSize: "18px" }}>
              The Petra Balloon in Petra City is designed to be accessible for
              individuals using wheelchairs and baby strollers. Our dedicated
              Ground Crew members are available to assist you with loading and
              unloading the balloon gondola. Please ensure that your wheelchair
              or stroller has a functioning braking/locking system to ensure
              stability during the flight. Our ground crew will verify and check
              this function before boarding. If your wheelchair is unable to fit
              in the gondola, there's no need to worry. We have additional
              wheelchairs available on-site that you are welcome to use
              throughout the entire flight. Your comfort and accessibility are
              our priority, and we strive to make the Petra Balloon experience
              inclusive for all.
            </p>
          </div>
        </div>
      </div>

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default PlanYourFlight;
