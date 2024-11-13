import React, { useEffect } from "react";
import { assets } from "../assets/assets_frontend/assets";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS

const About = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="bg-gray-100 py-10">
      <div className="text-center text-3xl pt-10 text-gray-700" data-aos="fade-up">
        <p>
          ABOUT <span className="text-gray-900 font-bold">US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-12 my-10 mx-4 md:mx-20">
        <img
          className="w-full md:max-w-[360px] md:max-h-[400px] rounded-lg shadow-lg"
          src={assets.about_image}
          alt="About Us"
          data-aos="fade-right"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p data-aos="fade-up">
            Welcome To Prescripto, Your Trusted Partner In Managing Your Healthcare Needs Conveniently And Efficiently. At Prescripto, We Understand The Challenges Individuals Face When It Comes To Scheduling Doctor Appointments And Managing Their Health Records.
          </p>
          <p data-aos="fade-up">
            Prescripto Is Committed To Excellence In Healthcare Technology. We Continuously Strive To Enhance Our Platform, Integrating The Latest Advancements To Improve User Experience And Deliver Superior Service. Whether You're Booking Your First Appointment Or Managing Ongoing Care, Prescripto Is Here To Support You Every Step Of The Way.
          </p>

          <b className="text-gray-800 text-lg" data-aos="fade-up">Our Vision</b>
          <p data-aos="fade-up">
            Our Vision At Prescripto Is To Create A Seamless Healthcare Experience For Every User. We Aim To Bridge The Gap Between Patients And Healthcare Providers, Making It Easier For You To Access The Care You Need, When You Need It.
          </p>
        </div>
      </div>

      <div className="text-center text-3xl pt-10 text-gray-700" data-aos="fade-up">
        <p>
          WHY <span className="text-gray-900 font-bold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20 mt-10 mx-4 md:mx-20">
        <div
          className="border rounded-2xl px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[16px] bg-white hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer shadow-lg"
          data-aos="fade-up"
        >
          <b>EFFICIENCY:</b>
          <p>Streamlined Appointment Scheduling That Fits Into Your Busy Lifestyle.</p>
        </div>

        <div
          className="border rounded-2xl px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[16px] bg-white hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer shadow-lg"
          data-aos="fade-up"
        >
          <b>CONVENIENCE:</b>
          <p>Access to a Network of Trusted Healthcare Professionals in Your Area.</p>
        </div>

        <div
          className="border rounded-2xl px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[16px] bg-white hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer shadow-lg"
          data-aos="fade-up"
        >
          <b>PERSONALIZATION:</b>
          <p>Tailored Recommendations Based on Your Health History to Help Your Health.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
