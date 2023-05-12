import React, { useState } from "react";
import ReactDOM from "react-dom";
import "react-responsive-modal/styles.css";
import SecondModal from "./SecondModal";
import ThirdModal from "./ThirdModal";
import FourthModal from "./FourthModal";
import { BsArrowRight } from "react-icons/bs";

const FirstModal = ({}) => {
  const [secondmodal, setSecondModal] = useState("first");
  const [firstmodalcontent, setFirstModalContent] = useState(true);

  return (
    <div>
      {secondmodal == "first" && (
        <div className="first-modal-main-container">
          <div className="container">
            <div className="row">
              <div>
                <div
                  className="col-lg-12"
                  onClick={() => {
                    setSecondModal("second");
                  }}
                >
                  <div className="popup-heading">
                    <div className="heading-text">Select Products :</div>
                  </div>
                </div>
                <div
                  className="col-lg-12 hover-class"
                  onClick={() => {
                    setSecondModal("second");
                  }}
                >
                  <div className="popup-text">
                    <p>Sunrise Pass :</p>
                    <BsArrowRight />
                  </div>
                </div>
                <div
                  className="col-lg-12 hover-class"
                  onClick={() => {
                    setSecondModal("second");
                  }}
                >
                  <div className="popup-text">
                    <p>Regular Pass :</p>
                    <BsArrowRight />
                  </div>
                </div>
                <div className="col-lg-12 hover-class">
                  <div className="popup-last-text">
                    <p>Fast Pass :</p>
                    <BsArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <button
            onClick={() => {
              setSecondModal("second");
            }}
          >
            Add Me
          </button> */}
        </div>
      )}
      {secondmodal == "second" && (
        <SecondModal
          secondmodal={secondmodal}
          setSecondModal={setSecondModal}
        />
      )}
      {secondmodal == "third" && (
        <ThirdModal secondmodal={secondmodal} setSecondModal={setSecondModal} />
      )}
      {secondmodal == "fourth" && (
        <FourthModal secondmodal={secondmodal} setSecondModal={setSecondModal} />
      )}
    </div>
  );
};

export default FirstModal;
