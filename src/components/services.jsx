import React, {useEffect} from "react";
import ServiceIcon1 from "../assets/serviceicon1.svg";
import ServiceIcon2 from "../assets/servIcon2.svg";
import ServiceIcon3 from "../assets/serviceicon3.svg";
import ServiceIcon4 from "../assets/serviceicon4.svg";
import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'
import {AiOutlineRight,AiOutlineLeftCircle,AiOutlineRightCircle} from "react-icons/ai";
import Ellipse13 from "../assets/ellipse13.svg";
import {Link} from "react-router-dom";


function Services () {
    useEffect(() => {
        const keenSliderElement = document.getElementById('keen-slider');
        if (!keenSliderElement) return; // Ensure the element exists before initializing Keen Slider

        const keenSlider = new KeenSlider(keenSliderElement, {
            loop: true,
            slides: {
                origin: 'center',
                perView: 1.25,
                spacing: 5,
            },
            breakpoints: {
                '(min-width: 720px)': {
                    slides: {
                        origin: 'center',
                        perView: 3.5,
                        spacing: 20,
                    },
                },
            },
        });

        const keenSliderPrevious = document.getElementById('keen-slider-previous');
        const keenSliderNext = document.getElementById('keen-slider-next');

        keenSliderPrevious.addEventListener('click', () => {
            keenSlider.prev();
        });

        keenSliderNext.addEventListener('click', () => {
            keenSlider.next();
        });

        return () => {
            keenSlider.destroy();
            keenSliderPrevious.removeEventListener('click', () => keenSlider.prev());
            keenSliderNext.removeEventListener('click', () => keenSlider.next());
        };
    }, []);

    return (
      <div
        name="services"
        id="services"
        className="relative mt-20 max-w-[100%] overflow-x-hidden"
      >
        <img
          src={Ellipse13}
          alt=""
          className="absolute top-3 md:top-16 left-1/2 md:w-[123vh] h-[67vh]"
        />
        <div className=" ml-5 relative bg-lightgreen w-[100%] md:w-[90%] p-5  h-[75vh] rounded-tr-[400px] md:rounded-bl-[400px]">
          <div className="text-center text-zinc-500 text-xs font-light font-Baloo leading-7 tracking-[6.30px] p-0 md:p-0">
            SERVICES & PRODUCTS
          </div>
          <div className="text-center p-4">
            <span className="text-black text-[24px]  md:text-[38px] font-semibold font-Baloo leading-[47.83px]">
              LimeFiber
              <br />
            </span>
            <span className=" text-[20px] md:text-[32px] font-normal font-Baloo leading-[47.83px]">
              Services and Packages
            </span>
          </div>

          <div className="flex">
            <div className="w-1/3 gap-3 hidden size-auto place-items-center mt-[200px] md:flex ">
              <button aria-label="Previous slide" id="keen-slider-previous">
                <AiOutlineLeftCircle style={{ fontSize: "2em" }} />
              </button>

              <button aria-label="Next slide" id="keen-slider-next">
                <AiOutlineRightCircle style={{ fontSize: "2em" }} />
              </button>
            </div>

            <div className="relative flex scroll-smooth p-2 ">
              <div id="keen-slider" className="keen-slider">
                <div className="w-[200px] md:w-[380px] h-50 bg-white rounded-[10px] p-2 md:ml-10 hover:scale-105 keen-slider__slide">
                  <img
                    src={ServiceIcon1}
                    alt="Icon 1"
                    className="w-[52px] h-12 bg-red rounded-[10px] p-2 ml-4 mt-2"
                  />
                  <div className="font-semibold font-Baloo tracking-wide ml-4 mt-2">
                    BASIC PACKAGE
                  </div>
                  <p className="text-sm max-w-full p-4 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque dui mi, bibendum eu erat id, ultricies semper metus.
                    Nunc dapibus laoreet dolor nec imperdiet.
                  </p>
                </div>

                <div className="keen-slider__slide">
                  <div className="w-[300px] md:w-[380px] h-50 bg-white rounded-[10px] p-2 md:ml-10 hover:scale-105">
                    <img
                      src={ServiceIcon2}
                      alt="Icon 1"
                      className="w-[52px] h-12 bg-red rounded-[10px] p-2 ml-4 mt-2"
                    />
                    <div className="font-semibold font-Baloo tracking-wide ml-4 mt-2">
                      STANDARD PACKAGE
                    </div>
                    <p className="text-sm max-w-full p-4 ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque dui mi, bibendum eu erat id, ultricies semper
                      metus. Nunc dapibus laoreet dolor nec imperdiet.
                    </p>
                  </div>
                </div>

                <div className="keen-slider__slide">
                  <div className="w-[300px] md:w-[380px] h-50 bg-white rounded-[10px] p-2 md:ml-10 hover:scale-105">
                    <img
                      src={ServiceIcon3}
                      alt="Icon 1"
                      className="w-[52px] h-12 bg-red rounded-[10px] p-2 ml-4 mt-2"
                    />
                    <div className="font-semibold font-Baloo tracking-wide ml-4 mt-2">
                      PREMIUM PACKAGE
                    </div>
                    <p className="text-sm max-w-full p-4 ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque dui mi, bibendum eu erat id, ultricies semper
                      metus. Nunc dapibus laoreet dolor nec imperdiet.
                    </p>
                  </div>
                </div>

                <div className="keen-slider__slide">
                  <div className="w-[300px] md:w-[380px] h-50 bg-white rounded-[10px] p-2 md:ml-10 hover:scale-105">
                    <img
                      src={ServiceIcon4}
                      alt="Icon 1"
                      className="w-[52px] h-12 bg-red rounded-[10px] p-2 ml-4 mt-2"
                    />
                    <div className="font-semibold font-Baloo tracking-wide ml-4 mt-2">
                      PRO PACKAGE
                    </div>
                    <p className="text-sm max-w-full p-4 ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque dui mi, bibendum eu erat id, ultricies semper
                      metus. Nunc dapibus laoreet dolor nec imperdiet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-green text-lg font-normal font-Baloo leading-7 text-center mt-8 cursor-pointer relative flex justify-center ml-4">
            <Link to="/products"> See More Services and Products </Link>
            <AiOutlineRight className="mt-2" />
          </div>
        </div>
      </div>
    );
}

export default Services;