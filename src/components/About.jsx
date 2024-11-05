import React from "react";
import GitHubCalendar from "react-github-calendar";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4 ml-120px ">
            <p className="text-4xl font-bold inline border-b-4 border-pink-500 text-left ">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-6">
          <div className="sm:text-right text-4xl font-bold ">
            <p>Hi, I am Akash Kumar Gupta. May I borrow a moment!</p>
          </div>
          <div>
            <p>
            Results-driven Frontend Developer specializing in React.js with a focus on building responsive and intuitive web applications. Proven ability to
 translate design concepts into clean and efficient code. Collaborative team player with a passion for delivering exceptional user experiences.
 Up-to-date with the latest trends in frontend development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
