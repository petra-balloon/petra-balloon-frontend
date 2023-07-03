import React, { useState, useEffect, useRef } from "react";
import { FaCheck } from "react-icons/fa";
import axios from "axios";
import { API_URL, image_url } from "../config";
import MainPopUpModal from "./PopUpModal/PoPUpModal";

const PricingAreaOne = ({}) => {
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
      <div className="pricing-area bg-gray pd-top-120 pd-bottom-90" >
        <div className="container">
          <div className="section-title text-center">
            <h6 className="sub-title">Pricing plan</h6>
            <h2 className="title">
              Best plane to get our <span>Services</span>
            </h2>
          </div>
          <div className="row">
            {allPasses &&
              allPasses.map((Details) => (
                <div
                  className="col-lg-3 col-md-6 "
                 /*  style={{ marginBottom: "20px" }} */
                >
                  <div className="single-pricing-inner style-3">
                    {/* <h2 className='mb-3'>
                        $19 <sub>/mo</sub>
                      </h2> */}
                    <div
                      style={{
                        textAlign: "center",
                        justifyContent: "center",
                        alignItems: "center",
                        /* borderBottom: "1px solid black",
                        boxShadow: "0px 0px 2px 3px black", */
                        zIndex: "999",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "#020263",
                          textAlign: "center",
                        }}
                      >
                        <div>
                          <h5>{Details.pass_name}</h5>
                        </div>
                      </div>

                    </div>
                    <img
                      src={`${image_url}${Details.pass_image}`}
                      style={{ height: "170px", width: "100%" }}
                      alt=""
                    />
                    <p style={{ padding: "0px 15px 0px 15px" }}>
                      {Details.Pass_description}
                    </p>
                    <ul style={{  padding: "0px 15px 0px 15px"  }}>
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
                        return (
                          <li>
                            <FaCheck />
                              Choose other pass for family 
                          </li>
                        );
                      })()}
                    </ul>
                    <a style={{background:"#aa0404"}}
                      className="btn btn-black border-radius border-radius-0 w-100"
                      onClick={async () => {
                        await setSelectedPass(Details);
                        setOpenModal(true);
                      }}
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              ))}

          </div>
        </div>
      </div>
      {/* Pricing Area One start */}
    </>
  );
};

export default PricingAreaOne;
