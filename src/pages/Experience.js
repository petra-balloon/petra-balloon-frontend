import { FaInstagram } from "react-icons/fa";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import NavBar from "../components/NavBar";
import TeamAreaGroup from "../components/TeamAreaGroup";

const Experience = () => {
  return (
    <>
      {/* Navigation Bar */}

      <NavBar />

      {/* Breadcrumb */}

      <Breadcrumb />

      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2
              style={{
                color: "#363a47",
                fontFamily: "sans-serif !important",
                fontSize: "55px",
                fontWeight: "600px",
                marginTop: "40px",
              }}
            >
              Enjoy Breathtaking Petra historical site & Skyline Views
            </h2>
          </div>
          <div className="col-12">
            <p
              style={{
                fontFamily: "sans-serif",
                marginTop: "25px",
                fontSize: "20px",
              }}
            >
              The Petra Balloon At the red rose city offers an unbeatable way at
              several Petra History and landmarks. Take in the unique with Petra
              Red Rose Mountains & desert, The Treasury, Castle Bint, and Al
              Deir. With ticket options to suit everyone who wants to make
              memories with friends and family, we have the 360° aerial
              adventure just for you.
            </p>
            <p
              style={{
                fontFamily: "sans-serif",
                marginTop: "23px",
                fontSize: "20px",
              }}
            >
              Get ready for adventure and feel the rush as the balloon slowly
              ascends higher and higher over Petra city. During the flight there
              will be several opportunities to take breathtaking photos. After
              the flight, you can head over to the retail store where you can
              buy merchandise to remember your flight. You can also sit and
              enjoy a refreshment in the lounge.
            </p>
          </div>
        </div>
      </div>

      {/* Team Area Group */}
      <TeamAreaGroup />
      <div className="container">
        <div className="row">
          <div className="col-5"></div>
          <div className="col-4">
            <div class="col col-xs-6 col-sm-4 col-md-3 p-2">
              <div
                style={{ border: "1px solid black" ,backgroundColor:"black"}}
                href="#"
                class="btn btn-social btn-instagram"
              >
                <div>
                  <div
                    style={{
                      width: "150px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      color:"white"
                    }}
                  >
                    {" "}
                    instagram
                    <FaInstagram
                      style={{
                        color: "#f09433",
                        width: "20px",
                        height: "20px",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "centers",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer One */}
      <FooterOne />
    </>
  );
};
export default Experience;
