import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="contact-page">
        <form className="contact-form">
          <h1 className="contact-h1">Contact Us Today</h1>
          <p>
            Hours or operation: <br />
            Sunday - Saturday: 9 - 5
          </p>
          <input placeholder="Full Name" />
          <input placeholder="Write a message" />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default Contact;
