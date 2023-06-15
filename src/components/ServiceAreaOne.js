import React,{useState,useEffect} from "react";
import axios from 'axios';
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import serviceList from "../scripts/serviceList";

const ServiceAreaOne = () => {
  
  /* const apiKey = "af72e0d33f3297a2d00565cd1d9099e7"
  const [inputCity, setInputCity] = useState("jordan")
  const [data, setData] = useState({})

  useEffect(() => {
    getWetherDetails();
  }, []);

  const getWetherDetails = (cityName) => {
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + "jordan" + "&appid=" + apiKey
    axios.get(apiURL).then((res) => {
      console.log("response", res.data)
      setData(res.data)
    }).catch((err) => {
      console.log("err", err)
    })
  } */

  return (
    <>
      {/*=================== service area start ===================*/}
      <div className='service-area bg-relative pd-top-100'>
        <img
          className='position-bottom-left top_image_bounce'
          src='assets/img/icon/4.png'
          alt='img'
        />
        <div className='container'>
          <div className='section-title text-center'>
            <h6 className='sub-title'>CREATIVE SERVICES</h6>
            {/* <h2 className='title'>
              Your Partner In <span>Digital</span> Success
            </h2> */}
          </div>
          <div className='row'>
            {serviceList.slice(0, 3).map((data, index) => (
              <div className='col-lg-4 col-md-6' key={index}>
                <div className='single-service-inner text-center'>
                  <div className='thumb'>
                    <img src={data.img} alt='img' />
                  </div>
                  <div className='details'>
                    <h5>
                      <Link to='/service-details'>{data.title}</Link>
                    </h5>
                    <p>{data.des}</p>
                    <Link className='btn btn-border-base' to='/'>
                      Touch More 
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* =================== service area end ===================*/}
    </>
  );
};

export default ServiceAreaOne;
