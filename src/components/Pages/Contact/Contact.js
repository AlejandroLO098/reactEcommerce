import React, { useState } from "react";
import ContactSignup from "./ContactSignup";
import FormSucces from "./FormSuccess";
import "./Contact.css";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <span className="close-btn"></span>
        <div className="form-content-left">
          <img
            src="img/contact2.webp"
            alt="nintendo characters"
            className="form-img"
          />
        </div>
        {!isSubmitted ? (
          <ContactSignup submitForm={submitForm} />
        ) : (
          <FormSucces />
        )}
      </div>
    </>
  );
};

export default Contact;
