import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { API_URL } from "../config";

const TeamAreaGroup = () => {
  const [instaAllFeed, setInstaAllFeed] = useState();
  useEffect(() => {
    getTocken();
  }, []);

  const getTocken = async (event) => {
    await axios
      .get(`${API_URL}social-token/get`, {})
      .then(async (response) => {
        var tokenDb = response.data.data[0].tocken;
        console.log("this is tocken!!!!!!!!!", response.data.data);

        getInstagramFeed(tokenDb);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getInstagramFeed = async (tokenDb) => {
    //setIsLoading(true);
    //IGQVJXU3hnRXNSS194dENDYzhCWFJWSWtMZAHd1a0NvSnVXVFh6aEdQWEpZAaXM3eUZABWjlZAQ2VTX1dxZA09XSDF2ODVwN0NyaE9oOElhazBCR3JmZA3NEQnprWEkzeWg0VVRubUtfS0JKTGZASSzgya1VkOAZDZD
    //IGQVJVQUo1RWFfYURVcU1KbzZAvUDNKbEk3bjZAjWWR3MV93V3paNTlfWVR1bmNSNXVzLWRIS0xIUXBoemRvZAlJLS1pPekFqbFpIT0dPejRRVXNrYTVLMXI0TGlEeU1xX3lsYk5SVHhlVWVFSUF3SHVlRwZDZD
    //IGQVJWY1hQcG9qZAnVpa1dRZAERYNjdYcmpzYjRpd0NVRGw4dXZA6bkJmbXBKMU00azdTdGN3dVR6UU5iTmhieWJveDhmYUlnMXk4cE1lb3VqOUFQY0J3RjhaYVVOSEdZANUNXQ3hFMjdHcHdKUDdKc2xPcQZDZD
    //const YOUR_ACCESS_TOKEN =
    // "IGQVJXdVNFV1JINkh1NTQ3UmxXMGgtZAXVEMjdyejRkV0RJQjVPdmxrUVdicTE4NTF1dDFsUlVIRzlQM2pOTThGckx3cW1yYlEwMWlOVFlDN2VjYm9wOEZAlc2I1Ukdlb082Q085NGJtQnIybll2MDBycwZDZD";
    await axios
      .get(
        `https://graph.instagram.com/me/media?fields=id,media_url,caption&access_token=${tokenDb}`,
        {}
      )
      .then(async (response) => {
        console.log(response.data);
        console.log("this is response", response.data.data[0].media_url);
        //setInstaAllFeed(response.data.data);
        //pleaeeee
        const mediaData = response.data.data;
        const fetchMediaItems = async () => {
          const updatedMediaItems = await Promise.all(
            mediaData.map(async (item) => {
              try {
                const response = await fetch(item.media_url);
                if (response.ok) {
                  const contentType = response.headers.get("content-type");
                  if (contentType && contentType.startsWith("image")) {
                    return { ...item, type: "image" };
                  } else if (contentType && contentType.startsWith("video")) {
                    return { ...item, type: "video" };
                  }
                }
              } catch (error) {
                console.error("Error fetching media:", error);
              }
              return { ...item, type: "unsupported" };
            })
          );
          console.log("updatedMediaItems<<>>>>>>>>>>>>",updatedMediaItems);
          const images = updatedMediaItems.filter(itemB => itemB.type == "image" );
          setInstaAllFeed(images);
        };
        fetchMediaItems();
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
                <div className="col-lg-4 col-sm-12  col-md-6">
                  <div className="single-team-inner text-center">
                    <div className="thumb">
                      <img
                        style={{ width: "98%", height: "300px" }}
                        src={Details.media_url}
                        alt="img"
                      />
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
