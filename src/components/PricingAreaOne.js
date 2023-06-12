import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import axios from "axios";
import { API_URL } from "../config";
import MainPopUpModal from "./PopUpModal/PoPUpModal";

const PricingAreaOne = () => {
  const [openModal, setOpenModal] = useState(false);
  const [secondmodal, setSecondModal] = useState("second");
  const [selectedpass, setSelectedPass] = useState("");
  
  const [allPasses, setAllPasses] = useState();
  useEffect(() => {
    getPass();
  }, []);

  const getPass = async (email, password) => {
    //setIsLoading(true);
    await axios
      .get(`${API_URL}pass-pricing/get`, {})
      .then(async (response) => {
        console.log(response.data.data);
        setAllPasses(response.data.data);
        //setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      {openModal && (
        <MainPopUpModal
          openModal={openModal}
          secondmodal={secondmodal}
          setSecondModal={setSecondModal}
          setOpenModal={setOpenModal}
          setSelectedPass={setSelectedPass}
          selectedpass={selectedpass}
          closeModal={() => {
            setOpenModal(false);
            
          }}
        />
      )}
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
            {allPasses &&
              allPasses.map((Details) => (
                <div className="col-lg-3 col-md-6">
                  <div className="single-pricing-inner style-3">
                    {/* <h2 className='mb-3'>
                        $19 <sub>/mo</sub>
                      </h2> */}
                    <h5>{Details.pass_name}</h5>
                    <p>{Details.Pass_description}</p>
                    <ul>
                      <li>
                        <FaCheck />
                        Adult {Details.adult_price} JOD
                      </li>
                      <li>
                        <FaCheck />
                        Children 3 to 11 years {Details.child_price} JOD
                      </li>
                      <li>
                        <FaCheck />
                        Children Below 3 years of age 0 JOD * Proof of age
                        required at entrance
                      </li>
                      {(() => {
                        if (Details.family_price != null) {
                          return (
                            <li>
                              <FaCheck />
                              Family {Details.family_price} JOD
                            </li>
                          );
                        }
                        return null;
                      })()}
                    </ul>
                    <a
                      className="btn btn-black border-radius border-radius-0 w-100"
                      onClick={async () => {
                        await setSelectedPass(Details);
                        setOpenModal(true);
                      }}
                    >
                      BooK Now
                    </a>
                  </div>
                </div>
              ))}

            {/* <div className="col-lg-3 col-md-6">
              <div className="single-pricing-inner style-3">
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
            </div> */}
          </div>
        </div>
      </div>
      {/* Pricing Area One start */}
    </>
  );
};

export default PricingAreaOne;
