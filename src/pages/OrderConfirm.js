import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { API_URL } from "../config";
import FooterOne from "../components/FooterOne";

function OrderConfirm() {

  useEffect(() => {
    ComfirmOrder();
  }, []);

  const ComfirmOrder = async (event) => {
    // Get the current URL search (query string)
    const currentSearch = window.location.search;

    // Parse the URL search to extract the query parameters
    const urlParams = new URLSearchParams(currentSearch);

    // Get the value of the orderId parameter
    const orderId = urlParams.get("orderId");

    // Now, 'orderId' will contain the value '12345'
    console.log("Order ID:!!!!!!!!!!!!::::::::", orderId);

     await axios
        .post(`${API_URL}payment/payment-route`, {orderId : orderId})
        .then(async (response) => {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        }); 
  };

  return (
    <>
      <NavBar />
      <div style={{marginTop:"165px"}}>OrderConfirm</div>
      <FooterOne />
    </>
  );
}

export default OrderConfirm;
