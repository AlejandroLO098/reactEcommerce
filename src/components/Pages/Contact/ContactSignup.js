import React from "react";
import useForm from "./UseForm";
import validate from "./validation";
import "./Contact.css";

const ContactSignup = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Get started with us today! Contact us anytime</h1>
        <div className="form-inputs">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="form-input"
            placeholder="Enter your name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            id="phone"
            type="phone"
            name="phone"
            className="form-input"
            placeholder="Enter phone number"
            value={values.phone}
            onChange={handleChange}
          />
          {errors.phone && <p>{errors.phone}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="comment" className="form-label">
            Comment
          </label>
          <textarea
            name="comment"
            id="comment"
            className="form-input"
            placeholder="Give us a comment"
            rows="5"
            value={values.comment}
            onChange={handleChange}
          ></textarea>
          {errors.comment && <p>{errors.comment}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactSignup;
