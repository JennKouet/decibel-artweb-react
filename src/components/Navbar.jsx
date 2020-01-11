import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Navbar = props => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-lg">
        <NavLink className="navbar-brand" to="/" style={{ width: "30%" }}>
          <img
            src="./images/logo_det.png"
            alt="logo decibel artweb"
            style={{ width: "35%" }}
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Accueil <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/creations">
                Créations
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>

          <a
            href="https://www.facebook.com/decibelartweb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-light mt-2"
              size="3x"
            />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
