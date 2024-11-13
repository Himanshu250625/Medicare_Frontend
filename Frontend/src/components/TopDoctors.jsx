import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import AOS from "aos";
import "aos/dist/aos.css";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-4xl font-bold" data-aos="fade-down">Top Doctors to Book</h1>
      <p className="sm:1/3 text-center text-sm font-medium" data-aos="fade-up">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => {navigate(`/appointment/${item._id}`); scrollTo(0,0);}}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-11px] transition-all duration-500"
            key={index}
            data-aos="fade-up" // Add fade-up animation for each card
          >
            <img className="bg-blue-50 " src={item.image} alt="" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 rounded-full bg-green-500"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-600 text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {navigate("/doctors"); scrollTo(0, 0);}}
        className="bg-blue-200 text-gray-700 px-8 py-3 rounded-full hover:scale-105 transition-all duration-300"
        data-aos="fade-up"
      >
        more
      </button>
    </div>
  );
};

export default TopDoctors;
