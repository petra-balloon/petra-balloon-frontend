import React, { useState, useRef, useEffect } from "react";
import "react-responsive-modal/styles.css";
import "react-calendar/dist/Calendar.css";
import { BsVinyl } from "react-icons/bs";
import { BsTag } from "react-icons/bs";
import { BsVinylFill } from "react-icons/bs";
import { BsChevronExpand } from "react-icons/bs";
import { BsRecord } from "react-icons/bs";

import Calendar from "react-calendar";

const SecondModal = ({ secondmodal, setSecondModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpensecond, setIsOpenSecond] = useState(false);
  const [isOpenthird, setIsOpenThird] = useState(false);
  const [isDiscount, setIsDiscount] = useState(false);
  const [value, onChange] = useState(new Date());
  const [totalbill, setTotalBill] = useState(0);
  const [adultSelectedNumber, setAdultSelectedNumber] = useState(0);
  const [adultPrice, setAdultPrice] = useState(200);
  const [adultSubTotal, setAdultSubTotal] = useState(0)
  const [childPrice, setChildPrice] = useState(100);
  const [childSubtotal, setChildSubTotal] = useState(200);



  const CalculateTotalBill = async () => {

  };

  const AdultPriceAdd = async (value) => {
    setAdultSelectedNumber(value)
    setAdultSubTotal(value*adultPrice)
    setIsOpen(false);
  };

  const ChildPriceAdd = async (value) => {
    setChildSubTotal(value)
    setTotalBill(value*childPrice)
    setIsOpen(false);
  };



  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false);
          setIsOpenSecond(false);
          setIsOpenThird(false)
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const options = [
    { value: "1" },
    { value: "2" },
    { value: "3" },
    { value: "4" },
    { value: "5" },
    { value: "6" },
    { value: "7" },
    { value: "8" },
    { value: "9" },
    { value: "10" },
  ];

  return (
    <div className="second-modal-outer-div">
      <div className="second-modal-main-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="second-popup-heading">
                <div>Sunrise Pass :</div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div ref={wrapperRef} className="col-lg-6">
              <div className="outer-div-lef-side-upper">
                <div
                  onClick={() => {
                    setIsDiscount(true);
                  }}
                  className="left-div-first"
                >
                  {!isDiscount && (
                    <div>
                      <BsVinyl style={{ color: "#354052" }} />
                    </div>
                  )}

                  {isDiscount && (
                    <div>
                      <BsVinylFill style={{ color: "#354052" }} />
                    </div>
                  )}
                  <div className="first-div-tag-text">
                    <BsTag className="first-div-tag" />
                    <div className="tag-div-text">Enter Discount Code</div>
                  </div>
                </div>
                {isDiscount && (
                  <div className="container">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-lg-9">
                          <input className="form-control" />
                        </div>
                        <div className="col-lg-3">
                          <div className="btn-main-class-discount">
                            <button className="discount-btn">Check Code</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="outer-main-adult-div">
                      <div className="row">
                        <div className="adult-wraping-div">
                          <div className="col-lg-8">
                            <div>
                              <div className="all-div-heading-in-middle">
                                Adult
                              </div>
                              <div className="all-div-text-in-middle">
                                12 Years And Above
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="all-div-price-in-middle">
                              200 AED
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="select-person-outer-div">
                              <div className="total-adult-price">{adultSelectedNumber}</div>
                              <div>
                                <BsChevronExpand
                                  onClick={() => {
                                    setIsOpen(isOpen ? false : true);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="select-main-div">
                              <ul className="select-main">
                                {isOpen &&
                                  options.map((value) => {
                                    return (
                                      <li
                                        onClick={() => {
                                          AdultPriceAdd(value.value)
                                        }}
                                        className="select-control"
                                      >
                                        {value.value}
                                      </li>
                                    );
                                  })}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="outer-main-adult-div">
                      <div className="row">
                        <div className="adult-wraping-div">
                          <div className="col-lg-8">
                            <div>
                              <div className="all-div-heading-in-middle">
                                Child
                              </div>
                              <div className="all-div-text-in-middle">
                                3-11 Years
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="all-div-price-in-middle">
                              100 AED
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="select-person-outer-div">
                              <div className="total-adult-price">0</div>
                              <div>
                                <BsChevronExpand
                                  onClick={() => {
                                    setIsOpenSecond(isOpensecond ? false : true);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="select-main-div">
                              <ul className="select-main">
                                {isOpensecond &&
                                  options.map((value) => {
                                    return (
                                      <li
                                        onClick={() => {
                                          setIsOpenSecond(false);
                                        }}
                                        className="select-control"
                                      >
                                        {value.value}
                                      </li>
                                    );
                                  })}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="outer-main-adult-div">
                      <div className="row">
                        <div className="adult-wraping-div">
                          <div className="col-lg-8">
                            <div>
                              <div className="all-div-heading-in-middle">
                                Infant
                              </div>
                              <div className="all-div-text-in-middle">
                                0-2 Years
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="all-div-price-in-middle">Free</div>
                          </div>
                          <div className="col-lg-2">
                            <div className="select-person-outer-div">
                              <div className="total-adult-price">0</div>
                              <div>
                                <BsChevronExpand
                                  onClick={() => {
                                    setIsOpenThird(isOpenthird ? false : true);
                                  }}
                                />
                              </div>
                            </div>
                            <div className="select-main-div">
                              <ul className="select-main">
                                {isOpenthird &&
                                  options.map((value) => {
                                    return (
                                      <li
                                        onClick={() => {
                                          setIsOpenThird(false);
                                        }}
                                        className="select-control"
                                      >
                                        {value.value}
                                      </li>
                                    );
                                  })}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-12">
                  <div>
                    <Calendar onChange={onChange} value={value} />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="main-wrap-class-available">
                    <div className="date-available">
                      <BsRecord className="color-green" />
                      <div className="color-green">Available</div>
                    </div>
                    <div className="date-available">
                      <BsRecord className="color-yellow" />
                      <div className="color-yellow">Limited</div>
                    </div>
                    <div className="date-available">
                      <BsRecord className="color-red" />
                      <div className="color-red">Sold Out</div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="check-box-outer-div">
                    <input className="check-box-input" type="checkbox" />
                    <div>
                      I accept the{" "}
                      <span className="checkbox-text-color">
                        cancellation policy
                      </span>{" "}
                      and{" "}
                      <span className="checkbox-text-color">booking terms</span>{" "}
                      for this booking.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-12">
          <div className="packup-of-div-add-cart">
            <div className="outer-percentage-div">
              <div>UAE VAT 5%</div>
              <div>26.9 AED</div>
            </div>
            <div className="add-to-cart-outer">
              <div>ADD to Cart</div>
              <div className="total-bill">{totalbill}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondModal;
