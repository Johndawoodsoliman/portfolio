import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Header from "./componnet/1-header/Header";
import Hearo from "./componnet/2-Hearo/Hearo";
import Mine from "./componnet/3-mine/Mine";

import Contact_us from "./componnet/4-Contact/Contact-us";
import Projects from "./componnet/Projects/Projects";
import Iam from "./componnet/Iam/Iam";

export default function App() {
  const [showScroll, setShowScroll] = useState(false);
  const location = useLocation();

  // مراقبة التمرير لإظهار زر الصعود
  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 70);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // عند تغيير الصفحة، نرجع لأعلى الصفحة
  useEffect(() => {
    window.scrollTo(0, 0);
    setShowScroll(false);
  }, [location.pathname]);

  return (
    <div id="to-up" className="container">
      <Header />
      <div className="divider" />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hearo />
              <div className="divider" />
              <Mine />
              <div className="divider" />
              <Contact_us />
              <div className="divider" />
             
            </>
          }
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Iam" element={<Iam />} />
      </Routes>

      {/* زر الرجوع لأعلى الصفحة */}
      <a
        style={{ opacity: showScroll ? 1 : 0, transition: "1s" }}
        href="#to-up"
      >
        <button className="scroll2up icon-arrow-up" />
      </a>
    </div>
  );
}
