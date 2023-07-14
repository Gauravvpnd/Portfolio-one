import React from "react";
import Profile from "../components/Profile.png"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full px-5">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Hi, I am Gaurav panda
          </h2>
          <p className="text-gray-500 py-4 max-w-md ">
          I am a fullstack MERN developer currently pursuing my undergrad in computer science i love handling and working with big data. I'm also a postman student expert. I have also a deep interest in Equity research analysis.
          </p>

          <div>
          <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={Profile}
            alt="my profile"
            className="rounded-2xl mx-auto w-auto h-64 md:w-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;