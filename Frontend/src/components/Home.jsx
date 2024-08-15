import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" flex flex-col gap-3 justify-center items-center h-dvh bg-gradient-to-b from-white to-gray-500">
      <h1 className=" text-2xl font-semibold animate-bounce ">1x1 Scheduler</h1>
      <div className=" text-2xl font-semibold animate-bounce">
        <Link to="/student">Student Dashboard</Link> |{" "}
        <Link to="/mentor">Mentor Dashboard</Link>
      </div>
    </div>
  );
};

export default Home;
