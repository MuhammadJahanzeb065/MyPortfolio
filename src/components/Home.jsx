import React from "react";
import image from "../../public/cnic_2.jpeg";
import {
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";

function Home() {
  return (
    <div
      id="Home"
      className="flex min-h-screen w-full items-center justify-center"
    >
      <div className="flex flex-col justify-center items-center gap-8 p-5 text-center">
        <img
          src={image}
          alt="image"
          className="outline-teal-600 outline-1 w-[150px] sm:w-[200px] md:[250px] rounded-full"
        />

        <div className=" space-y-1 sm:space-y-3">
          <h1
            className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text
          text-2xl md:text-4xl font-semibold text-transparent"
          >
            Muhammad Jahanzeb
          </h1>
          <h1
            className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text
          text-xl md:text-2xl font-semibold text-transparent"
          >
            (Geoinformatics Engineer)
          </h1>
          <p
            className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text
          text-md md:text-xl font-semibold text-transparent"
          >
            Frontend Web Developer
          </p>
          <p
            className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text
          text-md md:text-xl font-semibold text-transparent"
          >
            GIS Analyst
          </p>
          <p className="max-w-500px text-sm text-gray-500">
            Enthusiastic Geoinformatics Engineer eager to contribute to team success through hard work, attention to detail,
            excellent organizational skills, and a clear understanding of GIS and remote sensing. My key strengths are
            commitment, dedication, and honesty towards my work. I am motivated to learn, grow, and excel in a professional
            environment.
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href="https://github.com/MuhammadJahanzeb065"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoGithub
              className="w-10 h-10 cursor-pointer rounded-full border-2 border-transparent
           bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-jahanzeb-9b19b3202"
            target="_blank"
            rel="noopener noreferrer"
          >
           <BiLogoLinkedin
            className="w-10 h-10 cursor-pointer rounded-full border-2 border-transparent
          bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600"
          />
          </a>
          <a
            href="https://www.youtube.com/@mrjazi4541"
            target="_blank"
            rel="noopener noreferrer"
          >
           <BiLogoYoutube
            className="w-10 h-10 cursor-pointer rounded-full border-2 border-transparent
          bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600"
          />
          </a>
          <a
            href="https://x.com/jahanzebk065"
            target="_blank"
            rel="noopener noreferrer"
          >
          <BiLogoTwitter
            className="w-10 h-10 cursor-pointer rounded-full border-2 border-transparent
          bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600"
          />
          </a>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
