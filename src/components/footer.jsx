import React from "react";
import Logo from "../assets/logo.png";
import IconColor from "../assets/Icon color.svg";

const Footer = () => {
  return (
    <div className="mt-10 h-[480px] md:h-[200px] max-w-full overflow-x-hidden">
      <div
        className="w-[85%] h-[0px] mx-auto"
        style={{ borderColor: "#707070", borderWidth: "0.5px" }}
      ></div>
      <footer className="w-[85%] mx-auto p-2 text-base-content rounded flex flex-col md:flex-row  justify-between p-5 relative">
        <div className="flex flex-row md:flex-col">
          <div className="flex flex-col md:flex-row gap-2 mt-32 md:mt-0 md:gap-10 absolute p-0 md:p-5 font-light">
            <a href="contact" className="link link-hover hover:text-red">
              CONTACT
            </a>
            <a href="about" className="link link-hover hover:text-red">
              ABOUT US
            </a>
            <div className="font-['Baloo Da 2'] leading-[27px] hover:text-red ">
              TERMS OF SERVICES
            </div>
          </div>
          <div className="mt-20 flex items-center gap-5">
            <img
              src={Logo}
              alt=""
              className="w-[150px] h-[56.25px] absolute md:relative top-52 md:top-0 right-10"
            />
            <div
              className="w-[369px] h-[32.17px] text-sm font-normal font-['Baloo Da 2'] ml-0 md:ml-5 md:relative absolute top-96 md:top-0"
              style={{ color: "#707070" }}
            >
              © 2023 LimeFiber. All rights reserved.
            </div>
          </div>
        </div>
        <div>
          <div className="mr-10 flex items-center">
            <div
              className="text-base font-normal font-['Baloo Da 2'] leading-[27px] w-[100%] h-[66px] border-bottom border-black absolute md:relative ml-0 md:ml-10  "
              style={{ color: "#707070" }}
            >
              Subscribe to our newsletters
              <img src={IconColor} alt="" className="ml-60 bottom-2 relative" />
            </div>
            <div
              className="w-[90%] md:w-[320px] h-[0px] mt-10 ml-0 md:ml-10 absolute"
              style={{ borderColor: "#111", borderWidth: "0.5px" }}
            ></div>
          </div>
          <nav className="max-w-[320] mt-10 flex md:justify-end relative">
            <div className="flex gap-5 text-gray-900 absolute md:relative top-40 md:top-0">
              <p className="block md:hidden">Socials! -------</p>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  color="##707070"
                >
                  <path
                    fill="#707070"
                    d="M17.73,6.27V1.5h-1A7.64,7.64,0,0,0,9.14,9.14v.95H6.27v3.82H9.14V22.5h4.77V13.91h2.86V10.09H13.91V9.14a2.86,2.86,0,0,1,2.86-2.87Z"
                  />
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  color="#707070"
                >
                  <path
                    fill="#707070"
                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                  ></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  color="#707070"
                >
                  <path
                    fill="#707070"
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                  ></path>
                </svg>
              </a>
              <a>
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  width="20"
                  height="20"
                  color="#707070"
                >
                  <defs>
                    <style>
                      {`.cls-637b8512f95e86b59c57a11c-1 {
            fill: none;
            stroke: currentColor;
            stroke-miterlimit: 10;
          }
          .cls-637b8512f95e86b59c57a11c-2 {
            fill: currentColor;
          }`}
                    </style>
                  </defs>
                  <rect
                    className="cls-637b8512f95e86b59c57a11c-1"
                    x="1.5"
                    y="1.5"
                    width="21"
                    height="21"
                    rx="3.82"
                  />
                  <circle
                    className="cls-637b8512f95e86b59c57a11c-1"
                    cx="12"
                    cy="12"
                    r="4.77"
                  />
                  <circle
                    className="cls-637b8512f95e86b59c57a11c-2"
                    cx="18.2"
                    cy="5.8"
                    r="1.43"
                  />
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
