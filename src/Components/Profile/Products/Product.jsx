import React from "react";
import "./Product.css";
import img1 from "../../../Assets/img1.jpg";
import img2 from "../../../Assets/img2.jpg";

const Product = () => {
  return (
    <div>
      <div className="bg-product-component py-lg-5 py-3">
        <div className="container ">
          <div className="row py-5" >
            <div className="col "  >
              <h1 className="aboutus-heading pb-5 "  data-aos="fade-up">OUR PRODUCTS</h1>
              <div className="row  g-5" data-aos="fade-up">
                <div className="col-4">
                  <div className="product-image-container position-relative">
                    <img src={img1} alt="" className="img-fluid" />
                    <div className="overlay-img"></div>
                    
                  </div>
                </div>
                <div className="col-4">
                  <div className="product-image-container">
                    <img src={img1} alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="col-4">
                  <div className="product-image-container">
                    <img src={img1} alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="col-4">
                  <div className="product-image-container">
                    <img src={img1} alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="col-4">
                  <div className="product-image-container">
                    <img src={img1} alt="" className="img-fluid" />
                  </div>
                </div>
                <div className="col-4">
                  <div className="product-image-container">
                    <img src={img1} alt="" className="img-fluid" />
                  </div>
                </div>
                
              </div>
              
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="button text-center">
              <button className="product-btn">
              <a href="#" className="btn-link">View All</a>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Product;
