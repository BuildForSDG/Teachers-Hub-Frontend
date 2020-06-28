/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoaderComponent from "../Loader/Loader.jsx";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({
    firstname: "",
    lastname: "",
    subject: "",
    email: "",
    feedback: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        toast.success(<p className="text-white">Email successfully sent!</p>);
        setUserDetails({
          feedback: "",
          email: "",
          firstname: "",
          lastname: "",
          subject: ""
        });
        setLoading(false);
      })
      .catch((err) => {
        toast.error(<p>{err.text}</p>);
        setLoading(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateId = "template_dHGWLxu8";
    sendFeedback(templateId, {
      messageHtml: userDetails.feedback,
      fromName: `${userDetails.firstname} ${userDetails.lastname}`,
      replyTo: userDetails.email,
      subject: userDetails.subject
    });
    setLoading(true);
  };

  return (
    <div className="site-section bg-light" id="contact-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7">
            <h2 className="section-title mb-3">Contact Us</h2>
            {loading ? <LoaderComponent /> : null}
            <form data-aos="fade" onSubmit={handleSubmit}>
              <div className="form-group row">
                <div className="col-md-6 mb-3 mb-lg-0">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    name="firstname"
                    onChange={handleChange}
                    value={userDetails.firstname}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    name="lastname"
                    onChange={handleChange}
                    value={userDetails.lastname}
                    required
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    name="subject"
                    onChange={handleChange}
                    value={userDetails.subject}
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-12">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    value={userDetails.email}
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Write your message here."
                    name="feedback"
                    value={userDetails.feedback}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-6">
                  <input type="submit" className="btn btn-primary py-3 px-5 btn-block btn-pill" value="Send Message" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {
        <ToastContainer
          position="top-right"
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick={false}
          draggable={false}
          rtl={false}
          autoClose={1000}
        />
      }
    </div>
  );
};
export default Contact;
