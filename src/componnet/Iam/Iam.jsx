import React from "react";
import "./Iam.css";
import { Link } from "react-router-dom";

export default function Iam() {
  return (
    <div className="koko">
      <div className="All-Me">
        {/* header start */}
        <div className="header flex">
          <div className="ellipsis">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div> ABOUT</div>
        </div>

        {/* header End */}

        <main className="   flex">
          <section className="img left">
            <img src="/images/jojo.jpg" alt="My Photo" />
          </section>

          <section className="right">
            {/* تعريف */}
            <div>
              <p>Hello,I'M</p>
              <div className="whatt">
               
                <span className="icon-whatsapp"/>
                01279443751
              </div>

              <h1 className="joo">John Dawood</h1>
            </div>
            <h2 className="forr">Frontend Developer</h2>
            <div className="mad">
              <p className="designing">
                Front-End Engineer specialized in designing and developing
                interactive websites using the latest technologies, aiming to
                combine beauty with ease of use.My Photo
              </p>
              <ul className="Languages flex">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Vite </li>
                <li> Next</li>
                <li> figma</li>
              </ul>
            </div>

            <Link
              className="back flex"
              to="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Back
            </Link>
          </section>
        </main>
      </div>
    </div>
  );
}
