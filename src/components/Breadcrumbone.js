import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbone = ({  }) => {
  const title = "Pricing"
  return (
    <>
      {/* ================ Breadcrumb Start ================*/}
      <div
        className='breadcrumb-area bg-cover'
        style={{ height :"720px" , backgroundImage: 'url("./assets/img/bg/72.jpg")' }}
      >
        <div className='container'>
          <div className='breadcrumb-inner'>
            <div className='row justify-content-center'>
              <div className='col-lg-4'>
                <h2 style={{color:"white" , textAlign:"center" ,marginTop:"210px", fontSize:"60px" , fontWeight:"790px" }} className='page-title '>{title}</h2>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      {/* ================ Breadcrumb End ================*/}
    </>
  );
};

export default Breadcrumbone;
