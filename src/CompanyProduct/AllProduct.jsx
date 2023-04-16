import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
import "swiper/css/pagination";
import image1 from "../Assets/StationaryItems.jpg";
import image2 from "../Assets/about.jpg";
import "./AllProduct.css";
import { Pagination, Autoplay } from "swiper";

const AllProduct = () => {
  return (
    <div className="product-container">
      <div className="container">
        <div className="product-container row py-3 py-lg-5" id="products">
          <div className="container" data-aos="fade-up">
            <h1 className="aboutus-heading pb-3 ">OUR PRODUCTS</h1>
            <Swiper
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              className="myProductSwiper"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                480: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              <SwiperSlide className="myProductSlider">
                <div class="card  w-100">
                  <div className="card-image-container">
                    <img
                      src="assets/m4.jpg"
                      alt=""
                      className="img-fluid card-img"
                    />
                  </div>

                  <div class="card-body  text-white">
                    <h5 class="card-title fw-bold">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="myProductSlider">
                <div class="card  w-100">
                  <div className="card-image-container">
                    <img
                      src="assets/m4.jpg"
                      alt=""
                      className="img-fluid card-img"
                    />
                  </div>

                  <div class="card-body  text-white">
                    <h5 class="card-title fw-bold">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="myProductSlider">
                <div class="card  w-100">
                  <div className="card-image-container">
                    <img
                      src="assets/m4.jpg"
                      alt=""
                      className="img-fluid card-img"
                    />
                  </div>

                  <div class="card-body  text-white">
                    <h5 class="card-title fw-bold">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="myProductSlider">
                <div class="card  w-100">
                  <div className="card-image-container">
                    <img
                      src="assets/m4.jpg"
                      alt=""
                      className="img-fluid card-img"
                    />
                  </div>

                  <div class="card-body  text-white">
                    <h5 class="card-title fw-bold">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="myProductSlider">
                <div class="card  w-100">
                  <div className="card-image-container">
                    <img
                      src="assets/m4.jpg"
                      alt=""
                      className="img-fluid card-img"
                    />
                  </div>

                  <div class="card-body  text-white">
                    <h5 class="card-title fw-bold">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="myProductSlider">
                <div class="card  w-100">
                  <div className="card-image-container">
                    <img
                      src="assets/m4.jpg"
                      alt=""
                      className="img-fluid card-img"
                    />
                  </div>

                  <div class="card-body  text-white">
                    <h5 class="card-title fw-bold">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="myProductSlider">
                <div class="card  w-100">
                  <div className="card-image-container">
                    <img
                      src="assets/m4.jpg"
                      alt=""
                      className="img-fluid card-img"
                    />
                  </div>

                  <div class="card-body  text-white">
                    <h5 class="card-title fw-bold">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="myProductSlider">
                <div class="card  w-100">
                  <div className="card-image-container">
                    <img
                      src="assets/m4.jpg"
                      alt=""
                      className="img-fluid card-img"
                    />
                  </div>

                  <div class="card-body  text-white">
                    <h5 class="card-title fw-bold">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="myProductSlider">
                <div class="card  w-100">
                  <div className="card-image-container">
                    <img
                      src="assets/m4.jpg"
                      alt=""
                      className="img-fluid card-img"
                    />
                  </div>

                  <div class="card-body  text-white">
                    <h5 class="card-title fw-bold">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="myProductSlider">
                <div class="card  w-100">
                  <div className="card-image-container">
                    <img
                      src="assets/m4.jpg"
                      alt=""
                      className="img-fluid card-img"
                    />
                  </div>

                  <div class="card-body  text-white">
                    <h5 class="card-title fw-bold">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              {/*         
        <SwiperSlide><div className=" ">
            <div class="card h-100 w-100">
           <div className="card-image-container">
           <img src='assets/m4.jpg' alt="" className='img-fluid' />
           </div>
 
  <div class="card-body bg-dark text-white">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
            </div></SwiperSlide>
        <SwiperSlide>Slide 3
        <div class="card h-100 w-100">
           <div className="card-image-container">
           <img src='assets/m4.jpg' alt="" className='img-fluid' />
           </div>
 
  <div class="card-body bg-dark text-white">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></SwiperSlide> */}
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
