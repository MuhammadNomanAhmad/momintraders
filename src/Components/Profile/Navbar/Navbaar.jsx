import React from "react";
import logo from "../../../Assets/logomt.png";
import "./Navbaar.css";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbaar = () => {
  return (
    <div className="navbar-main-container  ">
      <nav className="navbar navbar-expand-lg navbar-light nav-bg-color fixed-top  ">
        <div className="container ">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo not found" className="brand-logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-Icon">
              <RxHamburgerMenu />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mt-3 mt-lg-0 mb-3 text-center mb-lg-0 navbarLink-container">
              <li className="nav-item">
                <a className="nav-link navbarLink  " href="#home">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbarLink" href="#aboutUs">
                  ABOUT US
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link navbarLink" href="#products">
                  PRODUCTS
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link navbarLink" href="#contactUs">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbaar;
