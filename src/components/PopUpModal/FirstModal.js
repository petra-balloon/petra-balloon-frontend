import React, { useState } from "react";
import ReactDOM from "react-dom";
import "react-responsive-modal/styles.css";
import SecondModal from "./SecondModal";
import ThirdModal from "./ThirdModal";
import FourthModal from "./FourthModal";
import { BsArrowRight } from "react-icons/bs";

const FirstModal = ({}) => {
  const [secondmodal, setSecondModal] = useState("first");
  const [passName, setPassName] = useState("");
  const [firstmodalcontent, setFirstModalContent] = useState(true);

  const [resData, setResData] = useState('');

  /*   const getFastPass = async (email, password) => {
    await axios
      .post(`${API_URL}admin/login`, {})
      .then(async response => {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  } */

  return (
    <div>
      {secondmodal == "first" && (
        <div className="first-modal-main-container">
          <div className="container">
            <div className="row">
              <div>
                <div className="col-lg-12">
                  <div className="popup-heading">
                    <div className="heading-text">Select Products :</div>
                  </div>
                </div>
                <div
                  className="col-lg-12 hover-class"
                  onClick={async() => {
                    await setPassName("sunrise_pass");
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
                    setPassName("fast_pass");
                  }}
                >
                  <div className="popup-text">
                    <p>Fast Pass :</p>
                    <BsArrowRight />
                  </div>
                </div>
                <div
                  className="col-lg-12 hover-class"
                  onClick={() => {
                    setSecondModal("second");
                    setPassName("regular_pass");
                  }}
                >
                  <div
                    className="popup-last-text"
                    onClick={() => {
                      setSecondModal("second");
                      setPassName("regular_pass");
                    }}
                  >
                    <p>Regular Pass :</p>
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
          passName={passName}
          resData={resData}
          setResData={setResData}
          setSecondModal={setSecondModal}
        />
      )}
      {secondmodal == "third" && (
        <ThirdModal
          secondmodal={secondmodal}
          setSecondModal={setSecondModal}
          resData={resData}
          setResData={setResData}
        />
      )}
      {secondmodal == "fourth" && (
        <FourthModal
          secondmodal={secondmodal}
          setSecondModal={setSecondModal}
        />
      )}
    </div>
  );
};

export default FirstModal;
