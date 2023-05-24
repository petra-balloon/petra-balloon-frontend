import React, { useState, useEffect } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import Moment from "react-moment";
import ReactDOM from "react-dom";
import "react-responsive-modal/styles.css";
import { BsAlarm } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import { BsCreditCard } from "react-icons/bs";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { BsBagFill } from "react-icons/bs";
import { BsGift } from "react-icons/bs";
import { MdOutlineCheckBox } from "react-icons/md";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import Loader from "../Loader/spinloader";

import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

import CountrySelect from "react-bootstrap-country-select";

const ThirdModal = ({ secondmodal, setSecondModal, resData, setOpenModal,setTicketData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState(null);
  const [isopen, setIsOpen] = useState(false);
  const [isValidationComfirm, setIsValidationComfirm] = useState(false);
  const [isPaymentBtn, setIsPaymentBtn] = useState(true);

  const [errors, setErrors] = useState({});
  const [country, setCountry] = useState(null);
  const [second, setSecond] = useState(59);
  const [minutes, setMinutes] = useState(29);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  console.log("this is res qqqqqqqqqq data", resData);

  console.log("first name", firstName);
  function selectCountry(val) {
    setCountry(val);
  }

  useEffect(() => {
    /* var timer = setInterval(() => {
      if (second === 0) {
        if (minutes === 0 && second === 0) {
          clearInterval(timer);
        } else {
          setMinutes(minutes - 1);
          setSecond(59);
        }
      } else {
        setSecond(second - 1);
      }
    }, 1000);
 */
    /*  return () => clearInterval(timer); */
  });

  const API_URL = "http://localhost:5000/api/";
  const handleToken = async (token) => {
    setIsLoading(true)
    await axios
      .post(`${API_URL}ticket/payment`, {
        amount: 1000, // Replace with the desired amount
        currency: "USD", // Replace with the desired currency code
        token,
        user_information: {
          country: country,
          firstName: firstName,
          lastName: lastName,
          email: email,
          mobile: mobile,
          ticketId: resData._id,
        },
      })
      .then(async (response) => {
        console.log(response.data);
        if(response.data.message == "Payment successful"){
          setTicketData(response.data.data)
          setSecondModal("fifth");
          setIsLoading(false)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handlFromValidation = async (token) => {
    if (validateForm()) {
      // Submit the form or perform further actions
      setIsValidationComfirm(true);
      setIsPaymentBtn(false);
      console.log("Form submitted successfully!");
    } else {
      console.log("Form error!!!!!");
    }
  };

  const validateForm = () => {
    let errors = {};

    // Perform validation logic
    if (!firstName) {
      errors.firstName = "First Name is required";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      errors.email = "Invalid email format";
    }

    if (!lastName) {
      errors.lastName = "Last Name is required";
    }
    if (!mobile) {
      errors.mobile = "Mobile Number is required";
    }
    if (!country) {
      errors.country = "Country is required";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const isValidEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="third-modal-outer-div">
      <div className="third-modal-main-container">
        <div className="container">
          <div className="row">
            <div className="heading-wrap">
              <div className="col-lg-3">
                <div className="shoping-cart-top-div">
                  <div className="heading-top">Shopping Cart</div>
                  <div className="timer-main-class">
                    <BsAlarm className="heading-icon" />
                    <div className="running-timer">
                      {minutes < 10 ? "0" + minutes : minutes}:
                      {second < 10 ? "0" + second : second}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9"></div>
            </div>
          </div>
          <div className="third-modal-spacer"></div>
          <div className="row">
            {/* recipt */}
            <div className="col-lg-7">
              <div className="card-outer-div">
                <div className="row">
                  <div className="card-head">
                    <div className="col-lg-8">
                      <div className="third-product-class">Products</div>
                    </div>
                    <div className="col-lg-4">
                      <div className="third-price-class">Price</div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-8">
                    <div className="third-pass-details">Sunrise Pass</div>
                  </div>
                  <div className="col-lg-4">
                    <div className="third-total-recipt-price">
                      {resData.total_amount} JOD
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="third-date">
                      <span className="span-date-class-first">
                        <Moment format="D/MMM/YYYY">{resData.date}</Moment>
                      </span>{" "}
                      TO{" "}
                      <sapn className="span-date-class-second">
                        {" "}
                        <Moment format="D/MMM/YYYY">{resData.date}</Moment>
                      </sapn>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    {/* <div className="card-edit">
                      <BsFillPencilFill className="pencil-margin-left" />
                      <div className="third-edit-text-class">EDIT</div>
                    </div> */}
                  </div>
                  <div className="spacer-card-family"></div>
                  <div className="col-lg-8">
                    <div className="third-selected-family-div">
                      {resData.reservation_details.map((s) => (
                        <div className="margin-for-family">
                          {s.type} {s.quantity}{" "}
                        </div>
                      ))}

                      {/*  <div>3Adults</div>
                      <div className="margin-for-family">3Adults</div>
                      <div className="margin-for-family">3Adults </div> */}
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div
                      className="card-edit"
                       onClick={()=>{setOpenModal(false)}} 
                    >
                      <BsX className="cross-margin-left" />
                      <div className="third-cross-text-class">Remove</div>
                    </div>
                  </div>
                </div>

                <div className="spacer-top-total">
                  <div className="row">
                    <div className="biger-pricing-div">
                      <div className="col-lg-8">
                        <div className="due-now-text">Due Now</div>
                      </div>
                      <div className="col-lg-4">
                        <div className="due-now-text-price">
                          {resData.total_amount} JOD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* redeem gift card */}
                <div className="spacer-top-total">
                  <div className="row">
                    <div className="biger-pricing-div">
                      <div className="col-lg-8"></div>
                      <div className="col-lg-4">
                        <div
                          className="redeem-gift-outer-div"
                          onClick={() => {
                            setSecondModal("fourth");
                          }}
                        >
                          <BsGift className="gift-icon" /> REDEEM GIFT CARD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* contact information */}
            <div className="col-lg-5">
              <div className="row">
                <div className="col-lg-12">
                  <h6 className="contact-info-class">Contact Information</h6>
                </div>
                <div className="outside-info-div">
                  <div className="col-lg-12">
                    <div class="form-group">
                      <label className="third-label-class">First Name *</label>
                      <input
                        type="name"
                        class="form-control"
                        id="name"
                        placeholder="First Name"
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      {errors.firstName && (
                        <span className="error-span-third">
                          {" "}
                          *{errors.firstName}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="input-margin-bottom-spacer"></div>
                  <div className="col-lg-12">
                    <div class="form-group">
                      <label className="third-label-class">Last Name *</label>
                      <input
                        type="name"
                        class="form-control"
                        id="name"
                        placeholder="last Name"
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                    {errors.lastName && (
                      <span className="error-span-third">
                        {" "}
                        *{errors.lastName}
                      </span>
                    )}
                  </div>
                  <div className="input-margin-bottom-spacer"></div>
                  <div className="col-lg-12">
                    <div class="form-group">
                      <label className="third-label-class">Email *</label>
                      <input
                        class="form-control"
                        id="email"
                        placeholder="user@gmail.com"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {errors.email && (
                        <span className="error-span-third">
                          {" "}
                          *{errors.email}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="input-margin-bottom-spacer"></div>
                  <div className="col-lg-12">
                    <div class="form-group">
                      <label className="third-label-class">Mobile *</label>
                      <input
                        class="form-control"
                        id="number"
                        placeholder=""
                        onChange={(e) => setMobile(e.target.value)}
                      />
                      {errors.mobile && (
                        <span className="error-span-third">
                          {" "}
                          *{errors.mobile}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="input-margin-bottom-spacer"></div>
                  <div className="col-lg-12">
                    <div class="form-group">
                      <label className="third-label-class">Country *</label>
                      <CountryDropdown
                        class="form-control"
                        value={country}
                        onChange={(val) => selectCountry(val)}
                      />
                      {errors.country && (
                        <span className="error-span-third">
                          {" "}
                          *{errors.country}
                        </span>
                      )}
                      {/* <label className="third-label-class">Country *</label>
                      <CountrySelect
                        class="form-control"
                        value={value}
                        onChange={setValue}
                      /> */}
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="third-check-box-outer-div">
                      {!isValidationComfirm && (
                        <MdOutlineCheckBoxOutlineBlank
                          onClick={async () => {
                            await handlFromValidation();
                          }}
                          className="check-box-input"
                        />
                      )}
                      {isValidationComfirm && (
                        <MdOutlineCheckBox className="check-box-input after-check-box-input" />
                      )}
                      {/* <input className="check-box-input" type="checkbox" /> */}
                      <div>
                        Send me the latest offers and exclusive discounts.
                      </div>
                    </div>
                  </div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="input-margin-bottom-spacer"></div>
              <div className="row">
                <div className="col-lg-8">
                  <div className="payment-heading">Payment Details</div>
                </div>
                <div className="col-lg-4">
                  <div className="payment-heading">{resData.total_amount} JOD</div>
                </div>
              </div>
              {/* credit card */}
              <div className="input-margin-bottom-spacer"></div>
              {/* <div className="row">
                <div className="outside-info-div">
                  <div className="col-lg-12">
                    <div className="credit-card">
                      <BsCreditCard className="credit-card-icon" />
                      <div>Credit Card</div>
                    </div>
                  </div>
                  <div className="input-margin-bottom-spacer"></div>
                  <div className="col-lg-12">
                    <div class="form-group">
                      <label className="credit-card-labels">
                        Card Number *
                      </label>
                      <input
                        type="number"
                        class="form-control"
                        id="number"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="card-type-class">
                      <FaCcVisa className="visa-card-type" />
                      <FaCcMastercard className="master-card-type" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-6">
                        <div class="form-group">
                          <label className="credit-card-labels">
                            Expiry Date *
                          </label>
                          <input
                            type="number"
                            class="form-control"
                            id="number"
                            placeholder="1234 5678 9012 3456"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div class="form-group">
                          <label className="credit-card-labels">
                            Security Code *
                          </label>
                          <input
                            type="number"
                            class="form-control"
                            id="number"
                            placeholder="1234 5678 9012 3456"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="input-margin-bottom-spacer"></div>
                  <div className="col-lg-12">
                    <div class="form-group">
                      <label className="credit-card-labels">
                        Name on The Card *
                      </label>
                      <input
                        type="number"
                        class="form-control"
                        id="number"
                        placeholder="J.Smith"
                      />
                    </div>
                  </div>
                  <div className="input-margin-bottom-spacer"></div>
                  <div className="col-lg-12">
                    <div className="checkout-btn-outer-div">
                      <BsBagFill className="checkout-icon-class" /> Pay AED 600
                    </div>
                  </div>
                </div>
                <div className="input-margin-bottom-spacer"></div>
              </div> */}
              <div className="row">
                <div className="col-lg-12">
                  <StripeCheckout
                    style={{ width: "100% !important" }}
                    stripeKey="pk_test_51N8h2FBeZw2xmDYe02KYq06IRE39kiGvg4nIHhR0ignR7PmeZjji5DdpdqGAUSxyx8gZH0CmzzbIDuMdP8aA8X5Z000qHCUjIJ"
                    token={handleToken}
                    name="Example Store"
                    disabled={isPaymentBtn}
                    amount={1000}
                    currency="USD"
                  >
                    <div className="checkout-btn-outer-div">
                      <BsBagFill className="checkout-icon-class" /> Pay JOD {resData.total_amount}
                    </div>
                  </StripeCheckout>
                </div>
              </div>
            </div>
            <div className="input-margin-bottom-spacer"></div>
            {/* <button>
              onclick
            </button> */}
          </div>
        </div>
      </div>
      <Loader isLoading={isLoading} />
    </div>
  );
};

export default ThirdModal;
