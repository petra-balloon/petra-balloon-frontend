import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
function CancellationPolicyModal({cancellationopenModal,closeModal}) {
  return (
    <Modal
      classNames={{
        modal: "modal-body",
      }}
      open={cancellationopenModal}
      onClose={closeModal}
      center
    >
      <div style={{width:"700px" ,padding:"20px"}}>
        <div>
          <div>
            <div>
              {/* <div className="image mb-45">
                  <img
                    src="assets/images/blog/blog-single.jpg"
                    alt="Blog Single"
                  />
                </div> */}
              <h2>Cancellation Policy</h2>
              <p>
                When booking your experience, you will be asked to choose which
                day you want to join The Petra Balloon. The following rules are
                applicable to the change or cancellation of the experience:
              </p>
              <ul className="list-style-two">
                <li>
                  Tickets are valid for six months from the original travel date
                  selected.
                </li>
                <li>
                  Should you not be able to use the ticket at all, for whatever
                  reason, the ticket will not be eligible for a refund. However,
                  we will give you the option to rebook for any other day within
                  the following six months. This includes flight cancellations
                  due to weather conditions or other causes outside our control.
                </li>
                <li>
                  We strongly recommend that you take out adequate travel
                  insurance to cover you in case of unforeseen circumstances
                  preventing you from joining your experience. We would be more
                  than happy to provide evidence to your insurance company if
                  you could not join us.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default CancellationPolicyModal;
