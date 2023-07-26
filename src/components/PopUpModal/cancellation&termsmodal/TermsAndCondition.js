import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

function TermsAndCondition({ termconditionopenModal, closeModal }) {
  return (
    <Modal
      classNames={{
        modal: "modal-body",
      }}
      open={termconditionopenModal}
      onClose={closeModal}
      center
    >
      <div style={{ width: "700px", padding: "20px" }}>
        <div>
          <div>
            <div>
              {/* <div className="image mb-45">
                <img
                  src="assets/images/blog/blog-single.jpg"
                  alt="Blog Single"
                />
              </div> */}
              <h2>PETRA BALLOON TERMS AND CONDITIONS</h2>

              <p>
                By purchasing a ticket and participating in the experience, you
                agree to the following terms and conditions:
              </p>
              <ul className="list-style-two">
                <li>
                  1. By purchasing a ticket and joining the experience, you are
                  deemed to accept the terms and conditions stated below.
                </li>
                <li>
                  2. Prices are in JOD (Jordanian Dinars) and subject to change
                  without notice.
                </li>
                <li>
                  3. Children under three years old can join for free; however,
                  proof of age is required. Children aged 3-12 years are
                  accepted at a lower rate, and children 12 years or older pay
                  the full adult fare.
                </li>
                <li>
                  4. The management of Petra Balloon reserves the right to amend
                  the operational hours without any prior notice due to
                  circumstances including (but not limited to) adverse weather
                  conditions or any required maintenance.
                </li>
                <li>
                  5. Itineraries are correct at the time of publishing and can
                  change without prior notice. Changes to the itinerary could
                  happen due to extreme weather conditions, natural disasters or
                  other factors outside of our control. As we continuously
                  strive to improve guests’ experience, we might also adjust the
                  itineraries when needed. If we cannot offer a product, service
                  or activity detailed in the itinerary, a suitable alternative
                  will be offered where possible.
                </li>
                <li>
                  6. When booking your experience, you will be asked to choose
                  which day you want to join Petra Balloon. The following rules
                  are applicable to the change or cancellation of the
                  experience:<br></br> <b>a)</b> Tickets are valid for one year
                  from the original travel date selected.<br></br> <b>b)</b>{" "}
                  Should you not be able to use the ticket at all, for whatever
                  reason, the ticket will not be eligible for a refund. However,
                  we will give you the option to rebook for any other day within
                  the following one year. This includes flight cancellations due
                  to weather conditions or other causes outside our control.
                  <br></br>
                  <b>c)</b> We strongly recommend that you take out adequate
                  travel insurance to cover you in case of unforeseen
                  circumstances preventing you from joining your experience. We
                  would be more than happy to provide evidence to your insurance
                  company if you could not join us.
                </li>
                <li>
                  6. The staff is present for your safety. Please follow the
                  staff’s safety instructions at all times to prevent the risk
                  of injury to yourself or others.
                </li>
                <li>
                  7. Improper conduct, unruly behaviour and any physical or
                  verbal threats to the safety of other guests and/or staff are
                  not permitted and will result in your removal from the
                  attraction and/or property.
                </li>
                <li>
                  8. By joining Petra Balloon experience, you agree to accept
                  the Pilot or Ground Crew’s authority and their decisions.
                </li>
                <li>
                  9. No refunds will be given if a Pilot or Ground crew asks you
                  to leave the premises.
                </li>
                <li>
                  10. All guests are required to abide by the below safety
                  restrictions:<br></br> a) Attend the safety briefing given by
                  the pilot before the flight. <br></br>b) Sign a waiver stating
                  you understood the safety briefing. Minors will require a
                  parent/legal guarding 21 years of age to sign on their behalf.
                  <br></br> c) Guests with the following conditions can’t use
                  this attraction: if you are prone to motion sickness and/or
                  vertigo, if you have heart disease and/or other chronic
                  conditions, if you are pregnant, if you are under the
                  influence of drugs and alcohol and all other conditions that
                  are aggravated by flight or elevation change.<br></br>d) Do
                  not fly if you suspect your health could be at risk for any
                  reason or if you could aggravate a pre-existing condition of
                  any kind.<br></br> e) Petra Balloon Pilot reserves the right
                  to adjust the flight capacity and the flight height due to
                  adverse weather conditions.<br></br> f) All minors under 12
                  years must be accompanied by a parent, legal guardian, or a
                  responsible adult 18 years or older onboard the flight.
                  <br></br> g) This attraction is wheelchair-friendly and
                  stroller-accessible. The wheelchair or baby stroller must be
                  equipped with a braking/locking system to prevent unsecured
                  movement during flight. The Ground Crew will check and verify
                  this function before allowing guests onto the flight.<br></br>{" "}
                  h) Guests are strictly prohibited from putting their
                  hands/items through the safety net at all times.<br></br> i)
                  Mobile phones are strictly prohibited during the ascent and
                  descent of the flight, as instructed by the pilot onboard.
                  <br></br> j) Smoking of any kind is strictly prohibited in or
                  around Petra Balloon facility and during the flight. This
                  includes (but is not limited to) vaping and e-cigarettes.
                  <br></br> k) Food, beverages and alcohol are prohibited
                  onboard the flight.<br></br> l) Small carry-on bags are
                  permitted onboard, subject to Ground Crew checking the bags
                  and determining if they are suitable. Larger items and bags
                  shall be stored at the allocated storage location.<br></br> m)
                  All guests will need to wear footwear onboard the flight.
                </li>
                <li>
                  11. For the convenience of all guests, queue-jumping or saving
                  a place in the queue is strictly prohibited. Violation of this
                  policy will result in removal from Petra Balloon.{" "}
                </li>
                <li>
                  12. Exiting a queue and returning to the same position for any
                  reason is not allowed. We recommend upgrading to a Fast Pass
                  for those looking to skip the queues.
                </li>
                <li>
                  13. Your dress and appearance must be suitable for this
                  attraction and keep with the culture and values of Jordan.
                </li>
                <li>
                  14. Due to this activity's nature and the Jordan's strict
                  drone regulations, drones are not permitted.
                </li>
                <li>
                  15. Guests using the website who are under the age of 18 shall
                  not transact on the website. The cardholder must retain a copy
                  of transaction records, merchant policies, and rules.
                </li>
                <li>
                  16. We accept payments online using Visa and MasterCard
                  credit/debit cards in JOD. Refunds will be done only through
                  the original method of payment.
                </li>
                <li>
                  17. Any dispute or claim arising out of or in connection with
                  this website shall be governed and construed by the laws of
                  Jordan.
                </li>
                <li>
                  18. Use of Petra Balloon is at own risk. In no event will
                  Petra Balloon take responsibility for loss, death, damage or
                  injury sustained while on the premises.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default TermsAndCondition;
