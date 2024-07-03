import React, { useEffect } from "react";
import ServiceIcon1 from "../assets/serviceicon1.svg";
import ServiceIcon2 from "../assets/servIcon2.svg";
import ServiceIcon3 from "../assets/serviceicon3.svg";
import ServiceIcon4 from "../assets/serviceicon4.svg";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
import { AiOutlineRight, AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import Ellipse13 from "../assets/ellipse13.svg";
import { Link } from "react-router-dom";

function Services() {
  useEffect(() => {
    const keenSliderElement = document.getElementById("keen-slider");
    if (!keenSliderElement) return;

    const keenSlider = new KeenSlider(keenSliderElement, {
      loop: true,
      slides: {
        origin: "center",
        perView: 1.25,
        spacing: 5,
      },
      breakpoints: {
        "(min-width: 720px)": {
          slides: {
            origin: "center",
            perView: 3.5,
            spacing: 20,
          },
        },
      },
    });

    const keenSliderPrevious = document.getElementById("keen-slider-previous");
    const keenSliderNext = document.getElementById("keen-slider-next");

    keenSliderPrevious.addEventListener("click", () => {
      keenSlider.prev();
    });

    keenSliderNext.addEventListener("click", () => {
      keenSlider.next();
    });

    return () => {
      keenSlider.destroy();
      keenSliderPrevious.removeEventListener("click", () => keenSlider.prev());
      keenSliderNext.removeEventListener("click", () => keenSlider.next());
    };
  }, []);

  return (
    <div name="services" id="services" className="relative mt-20 max-w-full overflow-x-hidden">
      <img src={Ellipse13} alt="" className="absolute top-3 left-full transform -translate-x-1/2 w-full md:h-[56vh]" />
      <div className="relative bg-lightgreen w-full md:w-11/12 p-5 rounded-tr-[55vh] md:rounded-bl-[45vh] mx-auto">
        <div className="text-center text-xs font-light font-Baloo leading-7 tracking-wider p-0">
          SERVICES & PRODUCTS
        </div>
        <div className="text-center p-4">
          <span className="text-black text-2xl md:text-4xl font-semibold font-Baloo leading-snug">
            LimeFiber
            <br />
          </span>
          <span className="text-xl md:text-3xl font-normal font-Baloo leading-snug">
            Services and Packages
          </span>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 gap-3 hidden mt-4 md:mt-[200px] md:flex justify-center">
            <button aria-label="Previous slide" id="keen-slider-previous" className="slider-button">
              <AiOutlineLeftCircle size={40} />
            </button>

            <button aria-label="Next slide" id="keen-slider-next" className="slider-button">
              <AiOutlineRightCircle size={40} />
            </button>
          </div>

          <div className="relative flex scroll-smooth p-2 mt-4 md:mt-0 w-full">
          <div id="keen-slider" className="keen-slider">
              <div className="keen-slider__slide">
                <div className="w-full md:w-[380px] ml-3 h-full bg-white rounded-[10px] p-2 md:ml-2 lg:ml-2 hover:scale-105">
                  <img
                    src={ServiceIcon1}
                    alt="Icon 1"
                    className="w-14 h-14 bg-red rounded-lg p-2 ml-4 mx-auto mt-2"
                  />
                  <div className="font-semibold font-Baloo tracking-wide ml-4 mt-2">
                    BASIC PACKAGE
                  </div>
                  <p className="text-md max-w-full p-4 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque dui mi, bibendum eu erat id, ultricies semper
                    metus. Nunc dapibus laoreet dolor nec imperdiet.
                  </p>
                </div>
              </div>

              <div className="keen-slider__slide">
              <div className="w-full md:w-[90%] lg:w-[380px] mx-auto h-full bg-white rounded-lg p-4 hover:scale-105">
                  <img
                    src={ServiceIcon2}
                    alt="Icon 1"
                    className="w-14 h-14 bg-red rounded-lg p-2 ml-4 mx-auto mt-2"
                  />
                  <div className="font-semibold font-Baloo tracking-wide mt-2 ml-4">
                  STANDARD PACKAGE
                  </div>
                  <p className="text-md p-4 text-start">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque dui mi, bibendum eu erat id, ultricies semper
                    metus. Nunc dapibus laoreet dolor nec imperdiet.
                  </p>
                </div>
              </div>

              <div className="keen-slider__slide">
                <div className="w-full md:w-[90%] lg:w-[380px] mx-auto h-full bg-white rounded-lg p-4 hover:scale-105">
                  <img
                    src={ServiceIcon3}
                    alt="Icon 1"
                    className="w-14 h-14 bg-red rounded-lg p-2 ml-4 mx-auto mt-2"
                  />
                  <div className="font-semibold font-Baloo tracking-wide mt-2 ml-4">
                    PREMIUM PACKAGE
                  </div>
                  <p className="text-md p-4 text-start">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque dui mi, bibendum eu erat id, ultricies semper
                    metus. Nunc dapibus laoreet dolor nec imperdiet.
                  </p>
                </div>
              </div>

              <div className="keen-slider__slide">
                <div className="w-full md:w-[90%] lg:w-[380px] mx-auto h-full bg-white rounded-lg p-4 hover:scale-105">
                  <img
                    src={ServiceIcon4}
                    alt="Icon 1"
                    className="w-14 h-14 bg-red rounded-lg p-2 ml-4 mx-auto mt-2"
                  />
                  <div className="font-semibold font-Baloo tracking-wide mt-2 ml-4">
                    PRO PACKAGE
                  </div>
                  <p className="text-md p-4 text-start">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque dui mi, bibendum eu erat id, ultricies semper
                    metus. Nunc dapibus laoreet dolor nec imperdiet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-green text-lg font-normal font-Baloo leading-7 text-center mt-8 cursor-pointer flex justify-center">
        <Link to="/products"> See More Services and Products </Link>
        <AiOutlineRight className="mt-1" />
        </div>
      </div>
    </div>
  );
}

export default Services;
