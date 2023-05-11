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
              Enjoy Breathtaking Dubai Skyline Views
            </h2>
          </div>
          <div className="col-12">
            <p style={{fontFamily :"sans-serif" , marginTop:"25px" , fontSize:"20px"}}>
              The Dubai Balloon At Atlantis offers an unbeatable way to marvel
              at several Dubai landmarks. Take in the unique shape of Palm
              Jumeirah, the opulence of Burj Al Arab, the magnificence of Burj
              Khalifa, a bustling coastline and endless ocean views. With ticket
              options to suit everyone who wants to make memories with friends
              and family, we have the 360° aerial adventure just for you.
            </p>
            <p style={{fontFamily :"sans-serif" , marginTop:"23px" , fontSize:"20px"}}>
              Get ready for adventure and feel the rush as the balloon slowly
              ascends higher and higher over Palm Jumeirah. During the flight
              there will be several opportunities to take breathtaking photos.
              After the flight, you can head over to the retail store where you
              can buy merchandise to remember your flight. You can also sit and
              enjoy a refreshment in the lounge.
            </p>
          </div>
        </div>
      </div>

      {/* Team Area Group */}
      <TeamAreaGroup />
      {/* Footer One */}
      <FooterOne />
    </>
  );
};
export default Experience;
