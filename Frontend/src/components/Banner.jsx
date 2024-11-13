import React, { useEffect } from "react";
import { assets } from "../assets/assets_frontend/assets.js";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="flex bg-sky-400 rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10" data-aos="fade-up">
      {/* Left Side */}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
          <p data-aos="fade-right">Book Appointment</p>
          <p className="mt-4" data-aos="fade-left">With 100+ Trusted Doctors</p>
        </div>
        <button onClick={() => {navigate("/login"); scrollTo(0, 0);}} className="bg-sky-200 text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all duration-300" data-aos="fade-up">
          Create Account
        </button>
      </div>

      {/* Right Side */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative" data-aos="zoom-in">
        <img
          className="w-full absolute bottom-0 right-0 max-w-md"
          src={assets.appointment_img}
          alt="Doctor"
        />
      </div>
    </div>
  );
};

export default Banner;
