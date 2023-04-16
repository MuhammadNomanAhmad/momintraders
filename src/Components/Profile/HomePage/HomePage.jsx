import React from "react";

import "./HomePage.css";
import carouselImg1 from "../../../Assets/stationaryShop.jpg";
import carouselImg2 from "../../../Assets/Electronics.jpg";
import carouselImg3 from "../../../Assets/StationaryItems.jpg";
import carouselImg4 from "../../../Assets/printers.jpg";
import carouselImg5 from "../../../Assets/computer.jpg";

const HomePage = () => {
  return (
    <div className="homepage-container max-vh-100 " id="home">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade bg-dark"
        data-bs-ride="carousel"
      >
      <div className="img-overlay">
        <div className="carousel-inner ">
          <div className="carousel-item active ">
          
          
            <img
              src={carouselImg1}
              className="d-block w-100 img-size "
              alt="..."
              data-bs-interval="2000"
            />
            <div className="carousel-caption  d-md-block">
              <div className="" data-aos="fade-right">
                <h1 className="text-uppercase mainPage-heading">Welcome to Momin Traders</h1>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={carouselImg2}
              className="d-block w-100 img-size"
              alt="..."
              data-bs-interval="2000"
            />
          </div>
          <div className="carousel-item">
            <img
              src={carouselImg3}
              className="d-block w-100 img-size"
              alt="..."
              data-bs-interval="2000"
            />
          </div>
          <div className="carousel-item">
            <img
              src={carouselImg4}
              className="d-block w-100 img-size"
              alt="..."
              data-bs-interval="2000"
            />
          </div>
          <div className="carousel-item">
            <img
              src={carouselImg5}
              className="d-block w-100 img-size"
              alt="..."
              data-bs-interval="2000"
            />
          </div>
        </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
