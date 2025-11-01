import React, { useEffect, useRef } from "react";
import "./Hearo.css";

import { motion } from "motion/react";

import Lottie from "lottie-react";
import ComputerAnimation from "../../animation/Programming Computer.json";
// import "../../../public/icomoon";
export default function M() {
  const lottieRef = useRef();
  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.5);
    }
  }, []);
  return (
    <section className="hero flex ">
      <div className="left-section">
        <div className="flex">
          <motion.img
            src="/images/W_JOHN.jpg"
            alt="pact"
            className="pec smooth-img"
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.8,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(255,255,255,0.3)",
              transition: { duration: 0.3 },
            }}
          />
          <div className="icon-verified" />
        </div>

        <div>
          <motion.h1
            initial={{ scale: 0 }}
            transition={{ duration: 2.8 }}
            animate={{ scale: 1 }}
          >
            Front-End Developer, creative mind, and digital explorer
          </motion.h1>
          <p>
            "I’m a dedicated Front-End Developer with strong skills in HTML,
            CSS, JavaScript, JSX, Bootstrap, Material UI, React, and Vite. I
            focus on building responsive, clean, and user-centered web
            applications."
          </p>
        </div>

        <div className="All-icons  flex">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <i className="icon-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="icon-instagram"></i>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="icon-github"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="icon-linkedin"></i>
          </a>
        </div>
      </div>

      <div className="right-section animation ">
        {" "}
        <Lottie
          animationData={ComputerAnimation}
          loop={true}
          autoplay={true}
          lottieRef={lottieRef}
          style={{ width: "450px", height: "450px" }}
        />
      </div>
    </section>
  );
}
