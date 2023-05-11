import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdFmdGood } from "react-icons/md";
import { MdCalendarMonth } from "react-icons/md";

const AboutAreaOne = () => {
  const apiKey = "af72e0d33f3297a2d00565cd1d9099e7";
  /* const [inputCity, setInputCity] = useState("jordan") */
   const [weatherSunSet, setWeatherSunSet] = useState("")
   const [weatherSunRise, setWeatherSunRise] = useState("")
   const [weatherSkyCondition, setWeatherSkyCondition] = useState("")
   const [weatherWind, setWeatherWind] = useState("")
   const [weatherCity, setWeatherCity] = useState("")
   const [weatherDate, setWeatherDate] = useState("")

  const [data, setData] = useState({});

  useEffect(() => {
    getWetherDetails();
  }, []);

  const getWetherDetails = (cityName) => {
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      "petra" +
      "&appid=" +
      apiKey;
    axios
      .get(apiURL)
      .then((res) => {
        console.log("response", res.data);
        setData(res.data);
        var sunsetTime = new Date(res.data.sys.sunset * 1000);
        var sunriseTime = new Date(res.data.sys.sunrise * 1000);
        setWeatherSunSet(sunsetTime.toLocaleTimeString("en-US"))
        setWeatherSunRise(sunriseTime.toLocaleTimeString("en-US"))
        setWeatherSkyCondition(res.data.weather[0].main)
        setWeatherWind(res.data.wind.speed)
        setWeatherCity(res.data.name)
        setWeatherDate(sunsetTime.toLocaleDateString("en-US"));
       //console.log(sunsetTime)
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <>
      {/* ================== AboutAreaOne start  ==================*/}
      <div className="about-area pd-top-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div style={{ backgroundColor: "#2c2426" }} className="row">
                <div
                  style={{
                    display: "felx",
                    textAlign: "center",
                    justifyContent: "center",
                  }}
                  className="col-lg-12"
                >
                  <h2 style={{ color: "white",fontSize:"60px" }}>Weather Forecast</h2>
                </div>
                <div style={{marginTop:"2rem"}}></div>
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-6">
                      <div style={{ display: "flex" }}>
                        <MdFmdGood
                          style={{ fontSize: "25px", color: "white" }}
                        />
                        <h6 style={{ marginLeft: "10px", color: "white"  }}>
                          {weatherCity}
                        </h6>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div style={{ display: "flex", marginLeft: "0.5rem" }}>
                        <MdCalendarMonth
                          style={{ fontSize: "25px", color: "white" }}
                        />
                        <h6 style={{color: "white"}}>
                          Today Forecast |{" "}
                          <span style={{ color: "white" }}>{weatherDate}</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: "0.5rem" }}></div>
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-3">
                      <div style={{ display: "flex", padding: "5px" }}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            width: "100%",
                            backgroundColor: "#7c7973",
                            borderRadius: "5px",
                            padding:"5px"
                          }}
                        >
                          <h6 style={{ color: "white" }}>Sunrise</h6>
                          <div style={{ fontSize: "12px" }}>{weatherSunRise}</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div style={{ display: "flex", padding: "5px" }}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            width: "100%",
                            backgroundColor: "#648cbc",
                            borderRadius: "5px",
                            padding:"5px"
                          }}
                        >
                          <h6 style={{ color: "white" }}>Evening</h6>
                          <div style={{ fontSize: "12px" }}>{weatherSunSet}</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div style={{ display: "flex", padding: "5px" }}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            width: "100%",
                            backgroundColor: "#648cbc",
                            borderRadius: "5px",
                            padding:"5px"
                          }}
                        >
                          <h6 style={{ color: "white" }}>Sky</h6>
                          <div style={{ fontSize: "12px" }}>{weatherSkyCondition}</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div style={{ display: "flex", padding: "5px" }}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            width: "100%",
                            backgroundColor: "#648cbc",
                            borderRadius: "5px",
                            padding:"5px"
                          }}
                        >
                          <h6 style={{ color: "white" }}>Wind</h6>
                          <div style={{ fontSize: "12px" }}>{weatherWind} m/s</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-12">
                      <div style={{ minHeight: "100px" }}>
                        <img src="assets/img/about/weather.gif" alt="img" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 "
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1500"
            >
              <div className="section-title mt-5 mt-lg-0">
                {/*  <h6 className="sub-title">ABOUT US</h6> */}
                <h2 className="title">
                  <span>Weather Forecast</span> For The Dubai Balloon At
                  Atlantis
                </h2>
                <p className="content mb-4 mb-xl-5">
                  Your safety and security are our top priority, and there might
                  be times the balloon isn’t allowed to operate. We are aware
                  that this might be an activity that you were looking forward
                  to, and to avoid disappointment, we suggest checking this
                  weather widget on the day of your experience.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="single-about-inner">
                      <div className="thumb mb-3">
                        <img src="assets/img/icon/2.png" alt="img" />
                      </div>
                      <div className="details">
                        {/* <h5>Our Ambition</h5> */}
                        <p>
                          The flight will be grounded when there are
                          thunderstorms or winds above 25 knots.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-about-inner">
                      <div className="thumb mb-3">
                        <img src="assets/img/icon/3.png" alt="img" />
                      </div>
                      <div className="details">
                        {/* <h5>Our Ambition</h5> */}
                        <p>
                          Select the date you want to visit and which time of
                          the day; the animation will change according to the
                          current forecast for the selected time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================== AboutAreaOne End  ==================*/}
    </>
  );
};

export default AboutAreaOne;
