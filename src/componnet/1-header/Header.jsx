import { Link } from "react-router-dom";
import "./Header.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  const [ShowModel, setShowModel] = useState(false);
  const [theme, setthemee] = useState(localStorage.getItem("theme") || "dark");
  const location = useLocation();
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  // غلق الموديل عند تغيير الصفحة
  useEffect(() => {
    setShowModel(false);
  }, [location.pathname]);

  return (
    <header className="flex ">
      {/* زر القائمة الجانبية */}
      <button
        onClick={() => {
          setShowModel(true);
        }}
        className="Menu icon-menu"
      />

      <div />
      <nav>
        <ul className="flex ">
          <li>
            <Link to="/" onClick={() => setShowModel(false)}>
              About
            </Link>
          </li>

         

          <li>
            <Link
              to="/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setShowModel(false)}
            >
              Articles
            </Link>
          </li>
          <li>
            <Link to="/Projects" onClick={(e) => setShowModel(false)}>
              Projects
            </Link>
          </li>
          <li>
            <HashLink
              smooth
              to="/#contact-us"
              onClick={() => {
                setShowModel(false);
              }}
            >
              Contact us
            </HashLink>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      {/* زرار تغير المود */}
      <button
        onClick={() => {
          //send value to local storage
          localStorage.setItem("theme", theme === "light" ? "dark" : "light");
          setthemee(theme === "light" ? "dark" : "light");
          //get value from local storage
        }}
        className="mode"
      >
        {theme === "dark" ? (
          <span className="icon-moon" />
        ) : (
          <span className="icon-sun" />
        )}
      </button>
      {/* موديل جانبي */}
      {ShowModel && (
        <div className="fixed">
          <ul className="model ">
            <li>
              <button
                className="icon-cross "
                onClick={() => {
                  setShowModel(false);
                }}
              />
            </li>
            <li>
              <Link to="/" onClick={() => setShowModel(false)}>
                About
              </Link>
            </li>
            <li>
              <Link
                to="https://johndawoodsoliman.github.io/first-app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowModel(false)}
              >
                hooooray
              </Link>
            </li>
            <li>
              <Link to="/Projects" onClick={() => setShowModel(false)}>
                Projects
              </Link>
            </li>

            <li>
              <HashLink
                smooth
                to="/#contact-us"
                onClick={() => {
                  setShowModel(false);
                }}
              >
                Contact us
              </HashLink>
            </li>
            <li>
              <Link to="/users" onClick={(e) => setShowModel(false)}>
                Users
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
