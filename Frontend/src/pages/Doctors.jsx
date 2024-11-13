import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((item) => item.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div>
      <p className="text-gray-600" data-aos="fade-up">Browse through the doctors specialist</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        {/* left side */}
        <button className={`py-2 px-5 border rounded-lg text-sm transition-all sm:hidden ${showFilter ? "bg-primary text-white" : ""}`} onClick={() => setShowFilter(prev=>!prev)}>Filter</button>
        <div className={` flex-col gap-4 text-sm text-gray-600 ${showFilter ? "flex" : "hidden sm:flex"}`}>
          <p 
            onClick={() => speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} 
            className={`w-[94] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-400 rounded-md text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 cursor-pointer ${speciality === "General physician" ? "bg-indigo-100 text-black" : ""}`}
            data-aos="fade-right"
          >
            General physician
          </p>
          <p 
            onClick={() => speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')}
            className={`w-[94] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-400 rounded-md text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 cursor-pointer ${speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""}`}
            data-aos="fade-right"
          >
            Gynecologist
          </p>
          <p 
            onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')}
            className={`w-[94] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-400 rounded-md text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 cursor-pointer ${speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""}`}
            data-aos="fade-right"
          >
            Dermatologist
          </p>
          <p 
            onClick={() => speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')}
            className={`w-[94] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-400 rounded-md text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 cursor-pointer ${speciality === "Pediatricians" ? "bg-indigo-100 text-black" : ""}`}
            data-aos="fade-right"
          >
            Pediatricians
          </p>
          <p 
            onClick={() => speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')}
            className={`w-[94] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-400 rounded-md text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 cursor-pointer ${speciality === "" ? "bg-indigo-100 text-black" : ""}`}
            data-aos="fade-right"
          >
            Neurologist
          </p>
          <p 
            onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')}
            className={`w-[94] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-400 rounded-md text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 cursor-pointer ${speciality === "" ? "bg-indigo-100 text-black" : ""}`}
            data-aos="fade-right"
          >
            Gastroenterologist
          </p>
        </div>

        {/* right side */}
        <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
          {filterDoc.map((item) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-11px] transition-all duration-500"
              key={item._id}
              data-aos="fade-up"
            >
              <img className="bg-blue-50" src={item.image} alt="" />
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
      </div>
    </div>
  );
};

export default Doctors;
