import React from "react";
import MailAnimation from "../../animation/Mail.json";
import Lottie from "lottie-react";
import "./Contact.css";
import DoneAnimation from "../../animation/success.json";

import { useForm, ValidationError } from "@formspree/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
export default function ContactUs() {
  const [state, handleSubmit] = useForm("mldpopyb");
   const [ShowModel, setShowModel] = useState(false);


    useEffect(() => {
      setShowModel(false);
    }, [location.pathname]);
 
  return (
    <section id="contact-us" className="contact">
      <h1 className="title flex">
        <span className="icon-mail-envelope-closed" />
        Contact-US
      </h1>
      <p className="subtitle">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit ipsum
        rerum aut vel laudantium,
      </p>
      <div className="flex">
        <div className="kolo  flex">
          <div className="section-left ">
            <form onSubmit={handleSubmit} className="label">
              <div className="Add">
                <label htmlFor="E"> Email Address :</label>
                <input
                  required
                  className="Email"
                  type="email"
                  name="email"
                  id="E"
                  placeholder="your email"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="you">
                <label className="lable-Message" htmlFor="Yo">
                  Your message :
                </label>
                <textarea
                  required
                  className="Message"
                  name="message"
                  id="Yo"
                  placeholder="Message"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                className="subm"
              >
                {state.submitting ? "submitting.." : "submit"}
              </button>
              {state.succeeded && (
                <p className="flex  " style={{ marginTop: 6, marginLeft: 6 }}>
                  <Lottie
                    loop={false}
                    style={{ width: "100px", height: "100" }}
                    animationData={DoneAnimation}
                  />
                  Your message has been sent successfully
                </p>
              )}
            </form>
          </div>

          {/* Animation */}
          <div className="section-right  animation">
            {" "}
            <Lottie
              style={{ width: "300px", height: "300px", marginLeft: "16rem" }}
              animationData={MailAnimation}
            />
          </div>
        </div>
      </div>

      <div className="divider" />
      <div className="footer-link flex column">
        <div className="flex link">
          <Link
            to="/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setShowModel(false)}
          >
            About
          </Link>
          <HashLink
            smooth
          
            rel="noopener noreferrer"
            to="/#contact-us"
            onClick={() => {
              setShowModel(false);
            }}
          >
            Contact us
          </HashLink>
          <Link to="/Iam" target="_blank" rel="noopener noreferrer">
            I'm
          </Link>
        </div>
        <p className="par">@ 2023 Spencer Sharp. All rights reserved</p>
      </div>
    </section>
  );
}
