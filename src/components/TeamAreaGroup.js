import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const TeamAreaGroup = () => {
const [instaAllFeed,setInstaAllFeed] = useState()
  useEffect(() => {
    getInstagramFeed();
  }, []);


  const getInstagramFeed = async (email, password) => {
    //setIsLoading(true);
    const YOUR_ACCESS_TOKEN = 'IGQVJVQUo1RWFfYURVcU1KbzZAvUDNKbEk3bjZAjWWR3MV93V3paNTlfWVR1bmNSNXVzLWRIS0xIUXBoemRvZAlJLS1pPekFqbFpIT0dPejRRVXNrYTVLMXI0TGlEeU1xX3lsYk5SVHhlVWVFSUF3SHVlRwZDZD'
    await axios
      .get(`https://graph.instagram.com/me/media?fields=id,media_url,caption&access_token=${YOUR_ACCESS_TOKEN}`, {})
      .then(async (response) => {
        console.log("this is response",response.data.data[0].media_url)
        console.log(response.data);
        setInstaAllFeed(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      {/* ================= TeamAreaGroup Start =================*/}
      <div className="team-area bg-relative pd-top-120 pd-bottom-90">
        <div className="container">
          <div className="row">
          {instaAllFeed &&
              instaAllFeed.map((Details) => (
            <div className="col-4">
              <div className="single-team-inner text-center">
                <div className="thumb">
                  <img style={{width:"98%",height:"300px"}} src={Details.media_url} alt="img" />
                  {/* <ul className="team-social-inner">
                    <li>
                      <a href="#">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaInstagram />
                      </a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
            ))}
           {/*  <div className="col-6">
              <div className="single-team-inner text-center">
                <div className="thumb">
                  <img src="assets/img/team/2.jpg" alt="img" />

                </div>
              </div>
            </div> */}
            {/* <div className="col-6">
              <div className="single-team-inner text-center">
                <div className="thumb">
                  <img src="assets/img/team/3.jpg" alt="img" />
                </div>
              </div>
            </div> */}
            {/* <div className="col-6">
              <div className="single-team-inner text-center">
                <div className="thumb">
                  <img src="assets/img/team/4.jpg" alt="img" />
                
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* ================= TeamAreaGroup End =================*/}
    </>
  );
};

export default TeamAreaGroup;
