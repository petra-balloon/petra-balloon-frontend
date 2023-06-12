import React from "react";
import AboutAreaOne from "../components/AboutAreaOne";
import ContactAreaOne from "../components/ContactAreaOne";
import CounterAreaOne from "../components/CounterAreaOne";
import FooterOne from "../components/FooterOne";
import NavBar from "../components/NavBar";
import TeamAreaOne from "../components/TeamAreaOne";
import WorkProcessOne from "../components/WorkProcessOne";
import Breadcrumbtwo from "../components/Breadcrumbtwo";
import FaqAreaFour from "../components/FaqAreaFour";

const PhotoMemory = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumbtwo />

      {/* FAQ Area One */}
      <FaqAreaFour />

      {/* About Area One */}
      {/* <AboutAreaOne /> */}

      {/* <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 style={{ marginTop: "34px" }}>What To Wear?</h2>
            <p style={{ fontSize: "18px" }}>
              Dubai is lucky enough to have sunny weather year-round. However,
              some months are warmer than others. As The Dubai Balloon At
              Atlantis will operate throughout the year, ensure you are aware of
              the weather conditions during your visit.
            </p>
            <p style={{ fontSize: "18px" }}>
              October to April is considered winter, and the temperatures are
              pleasant, with the coldest months being November to January. Bring
              a jacket, as it might be cooler once the balloon reaches its
              maximum height, especially at night. Comfortable, casual clothing
              such as shorts, t-shirts and dresses are recommended.
            </p>
            <p style={{ fontSize: "18px" }}>
              From May to September, always wear cool, loose clothing during the
              summer. If you are visiting from Aquaventure Waterpark, you are
              allowed to embark on the flight in respectable swimming clothes
              permitted by the waterpark.
            </p>
            <p style={{ fontSize: "18px" }}>
              Big bags will not be permitted onboard; however, backpacks and
              purses will be allowed. We suggest to avoid wearing high heels.
            </p>
          </div>
        </div>
      </div> */}

      {/* <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 style={{ marginTop: "34px" }}>
              Wheelchair And Stroller Accessibility
            </h2>
            <p style={{ fontSize: "18px" }}>
              The Dubai Balloon At Atlantis is accessible for wheelchairs and
              baby strollers. Please speak to a Ground Crew member for
              assistance loading and unloading the balloon gondola. The
              wheelchair/stroller must have a braking/locking system to prevent
              unsecured movement in flight. This function will be checked and
              verified by the ground crew before boarding. If your wheelchair
              doesn't fit in the gondola, there is no need to worry as will have
              extra wheelchairs on-site which you are welcome to use for the
              duration of the flight.
            </p>
          </div>
        </div>
      </div> */}

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default PhotoMemory;
