import React from "react";
import QRCode from "react-qr-code";

const ticketHTML = `
Petra Balloon
Name  : Qasim
`;
const TicketCreate = () => {
  return (
    <>
      <div className="ticket-outer-class">
        <div style={{ display: "flex" }}>
          <div className="img-div">
            <img style={{ height: "206px" }} src="assets/img/team/4.jpg"></img>
          </div>
          <div className="outer-ticket-content-div">
            <div className="logo-div-tiket"></div>
            <div className="ticket-div-info">
              <div className="qr-code-div">
                <QRCode size={60} value={ticketHTML} />
              </div>
              <div className="inside-content-div">
                02 july 2023 - Ticket 28642 <br></br> <b>Adult +12 years</b>
              </div>
            </div>
            <div className="company-info-div"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketCreate;
