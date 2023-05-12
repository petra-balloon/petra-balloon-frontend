import React, { useState, useEffect } from "react";
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
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

import CountrySelect from "react-bootstrap-country-select";

const ThirdModal = ({ secondmodal, setSecondModal }) => {
  const [value, setValue] = useState(null);
  const [country, setCountry] = useState(null);
  const [second, setSecond] = useState(59);
  const [minutes, setMinutes] = useState(29);

  function selectCountry(val) {
    setCountry(val);
  }

  useEffect(() => {
    var timer = setInterval(() => {
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

    return () => clearInterval(timer);
  });

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
                    <div className="third-total-recipt-price">0.00 AED</div>
                  </div>
                  <div className="col-lg-8">
                    <div className="third-date">
                      <span className="span-date-class-first">
                        May 11, 2023
                      </span>{" "}
                      TO{" "}
                      <sapn className="span-date-class-second">
                        {" "}
                        May 11, 2023
                      </sapn>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card-edit">
                      <BsFillPencilFill className="pencil-margin-left" />
                      <div className="third-edit-text-class">EDIT</div>
                    </div>
                  </div>
                  <div className="spacer-card-family"></div>
                  <div className="col-lg-8">
                    <div className="third-selected-family-div">
                      <div>3Adults</div>
                      <div className="margin-for-family">3Adults</div>
                      <div className="margin-for-family">3Adults </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card-edit">
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
                        <div className="due-now-text-price">200.00 AED</div>
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
                      />
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
                      />
                    </div>
                  </div>
                  <div className="input-margin-bottom-spacer"></div>
                  <div className="col-lg-12">
                    <div class="form-group">
                      <label className="third-label-class">Email *</label>
                      <input
                        class="form-control"
                        id="email"
                        placeholder="user@gmail.com"
                      />
                    </div>
                  </div>
                  <div className="input-margin-bottom-spacer"></div>
                  <div className="col-lg-12">
                    <div class="form-group">
                      <label className="third-label-class">Mobile *</label>
                      <input class="form-control" id="number" placeholder="" />
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
                      <input className="check-box-input" type="checkbox" />
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
                  <div className="payment-heading">300.00 AED</div>
                </div>
              </div>
              {/* credit card */}
              <div className="input-margin-bottom-spacer"></div>
              <div className="row">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdModal;
