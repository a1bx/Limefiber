import React from "react";
import Warning from "../assets/warning.svg";

function NotFound () {
    return (
        <div className="relative justify-items-center mx-auto h-screen p-4">
            <div className="grid md:grid-cols-1">
                <h3 className="text-center font-bruno font-medium text-black text-[32px] mt-[10rem]">404</h3>

                <img className="mx-auto"
                    alt="warning"
                    src={Warning}
                />

                <h3 className="text-center font-baloo font-semibold text-black text-[32px]">Page not found</h3>

                <p className="text-center font-baloo font-normal text-black text-[15px]">
                    Lorem ipsum duis dolor sit amet, consectetur <br/> adipiscing elitvestibulum in pharetra.
                </p>

                <a href="/" className="mx-auto mt-4 flex justify-center items-center w-[162px] h-[49px] bg-green rounded-md font-baloo font-normal text-white text-[18px] tracking-[0] leading-[28.5px]">
                    Go Back Home
                </a>
            </div>
        </div>
    )
}

export default NotFound;