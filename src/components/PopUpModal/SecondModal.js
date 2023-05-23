import React, { useState, useRef, useEffect } from "react";
import moment from "react-moment";
import "react-responsive-modal/styles.css";
import "react-calendar/dist/Calendar.css";
import { BsVinyl } from "react-icons/bs";
import { BsTag } from "react-icons/bs";
import { BsVinylFill } from "react-icons/bs";
import { BsChevronExpand } from "react-icons/bs";
import { BsRecord } from "react-icons/bs";

import Calendar from "react-calendar";
import axios from "axios";

const SecondModal = ({
  secondmodal,
  setSecondModal,
  selectedpass,
  resData,
  setResData,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [apiData, setApiData] = useState("");
  const [isOpensecond, setIsOpenSecond] = useState(false);
  const [isOpenthird, setIsOpenThird] = useState(false);
  const [isOpenfourth, setIsOpenFourth] = useState(false);
  const [isDiscount, setIsDiscount] = useState(false);
  const [value, onChange] = useState(new Date());
  const [totalbill, setTotalBill] = useState(0);
  const [adultSelectedNumber, setAdultSelectedNumber] = useState(0);
  const [chiledSelectedNumber, setChiledSelectedNumber] = useState(0);
  const [infantSelectedNumber, setInfantSelectedNumber] = useState(0);
  const [familySelectedNumber, setFamilySelectedNumber] = useState(0);
  const [adultPrice, setAdultPrice] = useState(selectedpass.adult_price);
  const [infantPrice, setInfantPrice] = useState(selectedpass.infant_price);
  const [childPrice, setChildPrice] = useState(selectedpass.child_price);
  const [familyPrice, setFamilyPrice] = useState(selectedpass.family_price);
  const [adultSubTotal, setAdultSubTotal] = useState(0);
  const [infantSubTotal, setInfantSubTotal] = useState(0);
  const [childSubtotal, setChildSubTotal] = useState(0);
  const [familySubtotal, setFamilySubTotal] = useState(0);
  const [totalTicketAmount, setTotalTicketAmount] = useState(0);
  const [taxAmount, setTaxAmount] = useState(0);

  const [ticketDetails, setTicketDetails] = useState([]);

  console.log("this is passName", selectedpass);

  const API_URL = "http://localhost:5000/api/";
  useEffect(() => {
    /*
    if (passName === "fast_pass") {
      const getfastPass = async () => {
        await axios
          .get(`${API_URL}pricing/fastpass/get`, {})
          .then(async (response) => {
            console.log(response.data.data);
            setApiData(response.data.data);
            setAdultPrice(response.data.data.adult_price);
            setChildPrice(response.data.data.child_price);
            setInfantPrice(response.data.data.infant_price);
          })
          .catch(function (error) {
            console.log(error);
          });
      };
      getfastPass();
    }
    if (passName === "regular_pass") {
      const getregularPass = async () => {
        await axios
          .get(`${API_URL}pricing/regularpass/get`, {})
          .then(async (response) => {
            console.log(response.data.data);
            setApiData(response.data.data);
            setAdultPrice(response.data.data.adult_price);
            setChildPrice(response.data.data.child_price);
            setInfantPrice(response.data.data.infant_price);
          })
          .catch(function (error) {
            console.log(error);
          });
      };
      getregularPass();
    } */
  }, [selectedpass]);

  useEffect(() => {
    CalculateTotalBill();
  }, []);

  //submit button

  const createTicket = async () => {
    await axios
      .post(`${API_URL}ticket/create`, {
        selected_pass: apiData.pass_name,
        discount_amount: 20,
        reservation_details: ticketDetails,
        date: value,
        total_amount: totalTicketAmount,
        tax_amount: taxAmount,
      })
      .then(async (response) => {
        console.log(response.data.data);
        setResData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const CalculateTotalBill = async () => {
    //setTotalTicketAmount(parseInt(adultSubTotal) + parseInt(childSubtotal));
    var totalAmountOfSubTotal = 0;
    for (let i = 0; i < ticketDetails.length; i++) {
      var totalAmountOfSubTotal =
        totalAmountOfSubTotal + ticketDetails[i].Sub_total;
    }
    console.log("this is tickect details", ticketDetails);

    setTotalTicketAmount(totalAmountOfSubTotal);
    console.log("this is total", totalAmountOfSubTotal);
    setIsOpen(false);
    console.log(ticketDetails);
  };

  const AdultPriceAdd = async (value) => {
    console.log(value);
    console.log(adultPrice);

    setAdultSelectedNumber(value);
    setAdultSubTotal(value * adultPrice);

    console.log("this is woo", value, adultPrice);

    for (let i = 0; i < ticketDetails.length; i++) {
      if (ticketDetails[i].type == "adult") {
        ticketDetails.splice(i, 1);
      }
    }

    ticketDetails.push({
      type: "adult",
      quantity: value,
      Sub_total: value * adultPrice,
    });
    CalculateTotalBill();
  };

  const ChildPriceAdd = async (value) => {
    console.log(value);
    setChiledSelectedNumber(value);
    setChildSubTotal(value * childPrice);

    for (let i = 0; i < ticketDetails.length; i++) {
      if (ticketDetails[i].type == "child") {
        ticketDetails.splice(i, 1);
      }
    }

    ticketDetails.push({
      type: "child",
      quantity: value,
      Sub_total: value * childPrice,
    });
    CalculateTotalBill();
  };

  const InfantPriceAdd = async (value) => {
    console.log(value);
    setInfantSelectedNumber(value);
    setChildSubTotal(value * infantPrice);

    for (let i = 0; i < ticketDetails.length; i++) {
      if (ticketDetails[i].type == "infant") {
        ticketDetails.splice(i, 1);
      }
    }

    ticketDetails.push({
      type: "infant",
      quantity: value,
      Sub_total: value * infantPrice,
    });
    CalculateTotalBill();
  };
  const FamilyPriceAdd = async (value) => {
    console.log(value);
    setFamilySelectedNumber(value);
    setFamilySubTotal(value * familyPrice);

    for (let i = 0; i < ticketDetails.length; i++) {
      if (ticketDetails[i].type == "family") {
        ticketDetails.splice(i, 1);
      }
    }

    ticketDetails.push({
      type: "family",
      quantity: value,
      Sub_total: value * familyPrice,
    });
    CalculateTotalBill();
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false);
          setIsOpenSecond(false);
          setIsOpenThird(false);
          setIsOpenFourth(false);
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
                <div>{selectedpass.pass_name} :</div>
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
                              {selectedpass.adult_price} JOD
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="select-person-outer-div">
                              <div className="total-adult-price">
                                {adultSelectedNumber}
                              </div>
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
                                          AdultPriceAdd(value.value);
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
                              {selectedpass.child_price} JOD
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="select-person-outer-div">
                              <div className="total-adult-price">
                                {chiledSelectedNumber}
                              </div>
                              <div>
                                <BsChevronExpand
                                  onClick={() => {
                                    setIsOpenSecond(
                                      isOpensecond ? false : true
                                    );
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
                                          ChildPriceAdd(value.value);
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
                            <div className="all-div-price-in-middle">
                              {apiData.infant_price} Free
                            </div>
                          </div>
                          <div className="col-lg-2">
                            <div className="select-person-outer-div">
                              <div className="total-adult-price">
                                {infantSelectedNumber}
                              </div>
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
                                          InfantPriceAdd(value.value);
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
                  {selectedpass.family_price != null &&
                      <div className="col-lg-12">
                        <div className="outer-main-adult-div">
                          <div className="row">
                            <div className="adult-wraping-div">
                              <div className="col-lg-8">
                                <div>
                                  <div className="all-div-heading-in-middle">
                                    Family
                                  </div>
                                  <div className="all-div-text-in-middle">
                                    2 Adults and 2 Children (3 - 11 Years)
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-2">
                                <div className="all-div-price-in-middle">
                                  {selectedpass.family_price}
                                </div>
                              </div>
                              <div className="col-lg-2">
                                <div className="select-person-outer-div">
                                  <div className="total-adult-price">
                                    {familySelectedNumber}
                                  </div>
                                  <div>
                                    <BsChevronExpand
                                      onClick={() => {
                                        setIsOpenFourth(
                                          isOpenfourth ? false : true
                                        );
                                      }}
                                    />
                                  </div>
                                </div>
                                <div className="select-main-div">
                                  <ul className="select-main">
                                    {isOpenfourth &&
                                      options.map((value) => {
                                        return (
                                          <li
                                            onClick={() => {
                                              FamilyPriceAdd(value.value);
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
                    }
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
                    {/*  <div className="date-available">
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
                    </div> */}
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
            {/* <div className="outer-percentage-div">
              <div>UAE VAT 5%</div>
              <div>20 JOD</div>
            </div> */}
            <div className="add-to-cart-outer">
              <div
                className="row"
                onClick={async () => {
                  await createTicket();
                  setSecondModal("third");
                }}
              >
                <div className="col-lg-10">
                  <div>ADD to Cart</div>
                </div>
                <div className="col-lg-2">
                  <div className="calculated-bill">
                    <div className="total-bill">{totalTicketAmount}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondModal;
