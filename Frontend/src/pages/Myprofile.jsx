import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets_frontend/assets";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "richardjameswap@gmail.com",
    phone: "+1 123 456 7890",
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    dob: "2000-01-20",
  });
  const [isEdit, setEdit] = useState(true);

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="max-w-lg mx-auto p-6 shadow-xl rounded-lg flex flex-col gap-3 text-sm bg-white mt-10">
      <img
        className="w-36 h-36 rounded-full mx-auto"
        src={userData.image}
        alt="Profile"
        data-aos="zoom-in" // Apply zoom-in animation
      />
      {isEdit ? (
        <input
          className="bg-gray-100 text-3xl font-medium mt-4 border rounded-lg px-3 py-2 text-center"
          type="text"
          value={userData.name}
          onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))}
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-500 mt-4 text-center">
          {userData.name}
        </p>
      )}
      <hr className="bg-zinc-500 h-[1px] border-none" />
      <div data-aos="fade-up">
        <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email:</p>
          <p className="text-blue-500">{userData.email}</p>
          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 font-medium max-w-52 border rounded px-2"
              type="text"
              value={userData.phone}
              onChange={(e) => setUserData((prev) => ({ ...prev, phone: e.target.value }))}
            />
          ) : (
            <p>{userData.phone}</p>
          )}
          <p>Address:</p>
          {isEdit ? (
            <p>
              <input
                className="bg-gray-100 border rounded px-2"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                value={userData.address.line1}
                type="text"
              />
              <br />
              <input
                className="bg-gray-100 border rounded px-2 mt-2"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                value={userData.address.line2}
                type="text"
              />
            </p>
          ) : (
            <p>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>
      <div data-aos="fade-up">
        <p className="text-neutral-500 underline">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
              className="bg-gray-100 border rounded px-2"
              onChange={(e) => setUserData((prev) => ({ ...prev, gender: e.target.value }))}
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p>{userData.gender}</p>
          )}
          <p className="font-medium">Date of Birth:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 border rounded px-2"
              type="date"
              value={userData.dob}
              onChange={(e) => setUserData((prev) => ({ ...prev, dob: e.target.value }))}
            />
          ) : (
            <p>{userData.dob}</p>
          )}
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        {isEdit ? (
          <button
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            onClick={() => setEdit(false)}
          >
            Save Information
          </button>
        ) : (
          <button
            className="bg-gray-500 text-white font-semibold py-2 px-4 rounded hover:bg-gray-600 transition-colors"
            onClick={() => setEdit(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
