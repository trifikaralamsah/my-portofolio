import React from "react";
import { imgTrifikar } from "../assets";
import TypewriterComponent from "typewriter-effect";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white container mx-auto border rounded-lg shadow-lg p-7 items-center h-screen">
      <div className=" flex-1 p-5 order-last md:order-first basis-1/2 md:basis-1/2">
        <p className="font-Gochi text-5xl">
          <TypewriterComponent
            options={{
              strings: [
                "Hi, I'm Tri Fikar Alamsah",
                "Web Programmer role as Frontend Dev",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
        <p className="font-sans text-lg text-justify md:text-left">
          Saya seorang Web Programmer dari Tangerang Selatan, yang berfokus pada
          Frontend Developer. Saat ini, Saya menikmati membangun semuanya dari
          situs app kecil hingga app yang elegan & saya juga merupakan salah
          satu lulusan Teknik Informatika dari Universitas Pamulang.
        </p>
      </div>
      <div className="flex-1 p-20 relative md:h-[70vh] basis-1/4 md:basis-1/2 w-[220px] h-[210px]">
        <img
          src={imgTrifikar}
          className="z-20 absolute bottom-50 left-1/2 -translate-x-1/2 w-full md:w-[325px] md:h-[320px]"
          alt="Personal"
        />
        <span className="absolute bottom-50 left-1/2 -translate-x-1/2">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[210px] h-[210px] md:w-[400px] md:h-[400px]"
          >
            <path
              fill="#14b8a6"
              d="M41.9,-47.3C53.8,-40,62.7,-26.3,68.4,-9.7C74,6.8,76.6,26.2,67.9,37.4C59.3,48.5,39.5,51.3,23.9,50.4C8.3,49.5,-3.2,44.8,-16.3,41.5C-29.5,38.2,-44.4,36.2,-55.5,27.1C-66.7,18,-74.1,1.8,-70.4,-11.3C-66.8,-24.4,-52.1,-34.5,-38.5,-41.5C-24.9,-48.6,-12.5,-52.5,1.3,-54C15,-55.5,30,-54.6,41.9,-47.3Z"
              transform="translate(100 100) scale(1.2)"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Home;
