import React, { useEffect } from "react";
import { assets } from "../assets/assets_frontend/assets";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS

const Contact = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="bg-gray-100 py-10">
      <div className="text-center text-3xl pt-10 text-gray-700" data-aos="fade-up">
        <p>
          CONTACT <span className="text-gray-900 font-bold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm mx-4 md:mx-20">
        <img
          className="w-full md:max-w-[360px] rounded-lg shadow-lg"
          src={assets.contact_image}
          alt="Contact Us"
          data-aos="fade-right"
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-600" data-aos="fade-up">Our OFFICE</p>
          <p className="text-gray-500" data-aos="fade-up">
            54709 Willms Station <br /> Suite 350, Washington, USA
          </p>
          <p className="text-gray-500" data-aos="fade-up">
            Tel: (415) 555-0132 <br /> Email: <a href="mailto:greatstackdev@gmail.com" className="text-primary hover:underline">greatstackdev@gmail.com</a>
          </p>
          <p className="font-semibold text-lg text-gray-600" data-aos="fade-up">Careers at PRESCRIPTO</p>
          <p className="text-gray-500" data-aos="fade-up">Learn more about our teams and job openings.</p>
          <button className="border bg-primary text-white px-8 py-3 rounded-full font-light hover:bg-blue-700 transition-colors duration-300" data-aos="fade-up">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
