import React from "react";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const MyAppointment = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="max-w-4xl mx-auto mt-6">
      <p className="text-2xl font-semibold mb-4">My Appointments</p>
      <div className="space-y-6">
        {doctors.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className="flex items-start justify-between p-4 border rounded-lg shadow-md bg-white"
          >
            <div className="flex items-start">
              <img
                className="w-20 h-20 rounded-full mr-4"
                src={item.image}
                alt={item.name}
              />
              <div>
                <p className="text-xl font-bold">{item.name}</p>
                <p className="text-sm text-gray-500">{item.speciality}</p>
                <p className="text-sm mt-2 font-semibold">Address:</p>
                <p className="text-sm text-gray-500">{item.address.line1}</p>
                <p className="text-sm text-gray-500">{item.address.line2}</p>
                <p className="text-sm mt-2">
                  <span className="font-semibold">Date & Time:</span> 25, July,
                  2024 | 8:30 PM
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end w-40"> {/* Equal width for buttons */}
              <button className="w-full mb-2 px-4 py-2 text-gray-700 bg-gray-200 rounded-lg transition-all duration-300 hover:bg-blue-600 hover:text-white hover:translate-y-[-4px]">
                Pay here
              </button>
              <button className="w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-400 rounded-lg transition-all duration-300 hover:bg-blue-600 hover:text-white hover:translate-y-[-4px]"> {/* Moves up 4px on hover */}
                Cancel 
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointment;
