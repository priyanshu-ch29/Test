import React, { useState, useEffect } from "react";
import { fetchMentorsByInterest } from "../Api";

const MentorSelection = ({ nextStep, setMentor }) => {
  const [interest, setInterest] = useState("");
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    if (interest) {
      fetchMentorsByInterest(interest).then((response) => {
        setMentors(response.data);
      });
    }
  }, [interest]);

  const selectMentor = (mentor) => {
    setMentor(mentor);
    nextStep();
  };

  return (
    <div className=" flex justify-center items-center h-dvh flex-col gap-4 bg-gradient-to-b from-white to-gray-500">
      <h2 className=" text-3xl font-semibold animate-pulse">Select a Mentor</h2>
      <input
        className=" border border-transparent hover:outline-transparent shadow-lg rounded-xl p-2 w-64 font-semibold "
        type="text"
        placeholder="Enter your area of interest"
        value={interest}
        onChange={(e) => setInterest(e.target.value)}
      />
      <ul>
        {mentors.map((mentor) => {
          //   console.log(mentor);
          return (
            <>
              <li
                key={mentor._id}
                className=" text-xl font-semibold cursor-pointer animate-bounce text-center"
                onClick={() => selectMentor(mentor)}
              >
                {mentor.name} - {mentor.rating} stars - {mentor.areasOfInterest}
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default MentorSelection;
