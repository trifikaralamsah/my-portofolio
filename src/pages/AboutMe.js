import React from "react";
import { imgTrifikarFormal2 } from "../assets";

const AboutMe = () => {
  return (
    <div className="flex flex-col bg-white container mx-auto border rounded-lg shadow-lg p-7 pb-28">
      <div className="self-center">
        <img
          src={imgTrifikarFormal2}
          className="shadow-lg rounded-full"
          alt="Tri Fikar"
          width={270}
        />
      </div>
      <div className="mt-9 md:w-1/2 self-center">
        <h2 className="font-sans text-3xl">About Me</h2>
        <p className="mt-5 text-justify text-lg font-sans">
          Saya Tri FIkar Alamsah, saya biasa di panggil Fikar. Saya lahir di
          Jakarta pada tahun 1999 dan saat ini saya tinggal di kota Tangerang
          Selatan. Saya seorang Web Programmer yang saat ini berfokus pada
          Frontend Developer. Beberapa skill yang saya miliki diantarnya :
        </p>
        <ul className="list-disc ml-10 text-lg mt-5 font-sans">
          <li>ReactJs</li>
          <li>Javascript</li>
          <li>php</li>
          <li>TailwindCss</li>
          <li>Codeigniter</li>
        </ul>
        <p className="mt-5 text-justify text-lg font-sans">
          Saya juga merupakan salah satu lulusan Teknik Informatika dari
          Univerrsitas Pamulang Tangerang Selatan. Untuk pengalaman saat ini,
          saya hanya bekerja di PT Nutech Integrasi dari tahun 2021 sampai 2023.
          Saya juga suka mengeksplorasi hal hal yang baru khusunya di bidang
          frontend developer karena saya memiliki ketertarikan di bidang
          tersebut.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
