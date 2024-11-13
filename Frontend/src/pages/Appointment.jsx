import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { assets } from "../assets/assets_frontend/assets";
import RelatedDoctor from "../components/RelatedDoctor";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (i === 0) {
        let now = new Date();
        if (now.getHours() >= 21) {
          continue; // Skip the day if it's already past 9 PM
        } else if (now.getHours() >= 10) {
          // If current time is after 10 AM, start at the next available 30-minute slot
          currentDate.setHours(now.getHours());
            if (now.getMinutes() >= 30) {
          currentDate.setMinutes(0);
          currentDate.setHours(now.getHours() + 1); // Start at the next full hour
        } else {
          currentDate.setMinutes(30); // Start at the next half-hour mark
        }
        } else {
          currentDate.setHours(10);
          currentDate.setMinutes(0);
        }
      } else {
        // For other days, start from 10 AM
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSLots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        timeSLots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlots((prev) => [...prev, timeSLots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots();
    }
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  return (
    docInfo && (
      <div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg"
              src={docInfo.image}
              alt=""
            />
          </div>
          <div className="flex-1 border border-gray-500 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}{" "}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-700">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border border-gray-400 text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>
            <div>
              <p className="flex items-center text-sm font-medium text-gray-900 mt-3 gap-1">
                About <img className="w-3" src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm text-gray-600 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            <p className="text-gray-600 font-medium mt-4">
              Appointment fee:{" "}
              <span className="text-gray-900">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>
        {/* booking slot */}
        <div className="sm:ml:72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking slots</p>
          <div className="flex gap-3 items-center overflow-x-scroll mt-4">
            {docSlots.length > 0 ? (
              docSlots.map((item, index) => (
                <div onClick={() => setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${index === slotIndex ? "bg-primary text-white" : "border border-gray-200"}`} key={index}>
                  <p>
                    {item[0]
                      ? daysOfWeek[item[0].datetime.getDay()]
                      : "No slots"}
                  </p>
                  <p>
                    {item[0] ? item[0].datetime.getDate() : "No date available"}
                  </p>
                </div>
              ))
            ) : (
              <p>No available slots</p>
            )}
          </div>
          <div className="flex gap-3 items-center overflow-x-scroll mt-4 ">
            {docSlots.length>0 && docSlots[slotIndex].map((item, index) => (
             <p onClick={() => setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? "bg-primary text-white" : "border border-gray-400"}`} key={index}>

                {item.time.toLowerCase()}</p>

            ))}
          </div>
          <button className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6">Book an appointment</button>
        </div>
                {/* listing related docotor */}
                <RelatedDoctor docId={docId} speciality={docInfo.speciality}/>
      </div>
    )
  );
};

export default Appointment;
