import React, { useState, useEffect } from "react";
import { fetchMentorAvailability } from "../Api";

const ScheduleSession = ({ mentor, setSessionDetails, nextStep, prevStep }) => {
  const [availability, setAvailability] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [duration, setDuration] = useState(30);

  useEffect(() => {
    fetchMentorAvailability(mentor._id).then((response) => {
      setAvailability(response.data);
      // console.log(response.data);
    });
  }, [mentor]);

  const handleSchedule = () => {
    setSessionDetails({ mentor, selectedTimeSlot, duration });
    nextStep();
  };

  return (
    <div className="flex justify-center items-center h-dvh flex-col gap-4 bg-gradient-to-b from-white to-gray-500">
      <h2 className="text-3xl font-semibold animate-pulse">
        Schedule Your Session
      </h2>
      <ul>
        {availability.map((slot, index) => (
          <div key={index}>
            <h3>{slot.day}</h3>
            <ul>
              {slot.timeSlots.map((timeSlot, index) => (
                <li
                  key={index}
                  onClick={() =>
                    !timeSlot.booked && setSelectedTimeSlot(timeSlot.time)
                  }
                  style={{
                    cursor: timeSlot.booked ? "not-allowed" : "pointer",
                  }}
                >
                  {timeSlot.time} - {timeSlot.booked ? "Booked" : "Available"}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
      <label className=" text-2xl font-semibold">
        Duration:
        <select
          value={duration}
          className=" border-transparent rounded-lg ml-3 mb-2"
          onChange={(e) => setDuration(e.target.value)}
        >
          <option value={30}>30 mins</option>
          <option value={45}>45 mins</option>
          <option value={60}>60 mins</option>
        </select>
      </label>
      <div className=" flex gap-5 font-semibold ">
        <button
          className="w-28 rounded bg-black text-white border border-transparent shadow-xl"
          onClick={prevStep}
        >
          Back
        </button>
        <button
          className="w-28 rounded p-2  bg-black text-white border border-transparent shadow-xl"
          onClick={handleSchedule}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ScheduleSession;
