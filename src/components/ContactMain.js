import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
const ContactMain = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Please See Documentation for more information
    emailjs
      .sendForm(
        "service_yipk4xg", //YOUR_SERVICE_ID
        "template_71bgc2q", //YOUR_TEMPLATE_ID
        form.current,
        "cwf8kROl5o3__96Ti" //YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            toast.success("Massage Sent Successfully!");
            form.current[0].value = "";
            form.current[1].value = "";
            form.current[2].value = "";
            form.current[3].value = "";
          }
        },
        (error) => {
          if (error.text !== "OK") {
            toast.success("Massage Not Sent!");
          }
        }
      );
  };
  return (
    <>
      {/* ================= Contact Main start =================*/}
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="contact-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="contact-page-inner bg-gray">
            <div className="section-title mb-4 pb-2">
              <h2 className="title">About Us and Our Location</h2>
              <p className="content mb-0">
                The Petra Balloon At Jordan is a tethered balloon experience in
                Petra. It's an experience that offers visitors the opportunity
                to rise above Petra Mountains. It’s an observation point that
                lets guests feel on top of the world as they take in 360° views
                of the Red Rose City of Petra and its iconic landmarks. The
                balloon is securely anchored to the ground and operated manually
                by our experienced Pilots. Being partnered with industry leaders
                when it comes to aviation and flight safety, all guests can rest
                assured that they are in the best hands.
              </p>
            </div>
            {/*  <form ref={form} onSubmit={sendEmail}>
              <div className="row">
                <div className="col-md-12">
                  <div className="single-input-inner">
                    <input
                      id="name"
                      name="user_name"
                      type="text"
                      placeholder="Enter Your Name."
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="single-input-inner">
                    <input
                      id="email"
                      name="user_email"
                      type="email"
                      placeholder="Enter Your Email."
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="single-input-inner">
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Enter Your Subject."
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="single-input-inner">
                    <textarea
                      name="message"
                      id="massage"
                      cols="1"
                      rows="5"
                      placeholder="Enter Your Massage ..."
                      required
                    />
                  </div>
                </div>
                <div className="col-12 text-center">
                  <button
                    className="btn btn-base border-radius-5"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form> */}
          </div>
        </div>
      </div>

      {/* contact list */}
      <div className="contact-page-list">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="media single-contact-list">
                <div className="media-left">
                  <img src="assets/img/icon/13.svg" alt="img" />
                </div>
                <div className="media-body">
                  <h5>Contacts us</h5>
                  <h6>0798001088</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="media single-contact-list">
                <div className="media-left">
                  <img src="assets/img/icon/14.svg" alt="img" />
                </div>
                <div className="media-body">
                  <h5>Email</h5>
                  <h6>Hello@petraballoon.com</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="media single-contact-list">
                <div className="media-left">
                  <img src="assets/img/icon/15.svg" alt="img" />
                </div>
                <div className="media-body">
                  <h5>Location</h5>
                  <h6>PETRA BALLOON ST. PETRA 71810 JORDAN</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Map  */}
      <div className="contact-g-map">
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55092.17348489064!2d35.41791971388405!3d30.34353592616969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15016ef1703b6071%3A0x199bf908679a2291!2sPetra!5e0!3m2!1sen!2s!4v1683818508609!5m2!1sen!2s"></iframe> */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d13523.798006832227!2d35.446055659314055!3d30.330317661689698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spetra!5e1!3m2!1sen!2s!4v1683819008377!5m2!1sen!2s"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d29208.601361499546!2d90.3598076!3d23.7803374!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1589109092857!5m2!1sen!2sbd" /> */}
      </div>

      {/* ================= Contact Main End =================*/}
    </>
  );
};

export default ContactMain;
