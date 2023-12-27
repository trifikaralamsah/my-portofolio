import React from "react";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="flex flex-col m-10 md:m-0 bg-white border rounded-lg shadow-lg">
      <div className="self-center p-0 md:p-20 h-screen">
        <h2 className="font-Gochi text-3xl px-3">Contact Me</h2>
        <p className="mt-5 text-justify text-lg px-3">
          Jika ada yang ingin ditanyakan, silahkan hubungi kontak dibawah ini :
        </p>
        <div className="flex flex-col gap-3 m-10 ">
          <p className="font-Gochi text-xl">
            <FontAwesomeIcon icon={faEnvelope} /> Email{" : "}
            <span className="font-sans ">trifikar24@gmail.com</span>
          </p>
          <p className="font-Gochi text-xl">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn{" : "}
            <a
              href="https://www.linkedin.com/in/tri-fikar-alamsah-072227220/?originalSubdomain=id"
              className="font-sans text-cyan-700 underline hover:text-blue-500"
              target="_blank"
              rel="noreferrer"
            >
              TriFikarAlamsah
            </a>
          </p>
          <p className="font-Gochi text-xl">
            <FontAwesomeIcon icon={faInstagram} /> Instagram{" : "}
            <a
              href="https://www.instagram.com/trifikar/?hl=en"
              className="font-sans text-cyan-700 underline hover:text-blue-500"
              target="_blank"
              rel="noreferrer"
            >
              https://www.instagram.com/trifikar/?hl=en
            </a>
          </p>
          <p className="font-Gochi text-xl">
            <FontAwesomeIcon icon={faGithub} /> Github{" : "}
            <a
              href="https://github.com/trifikaralamsah"
              className="font-sans text-cyan-700 underline hover:text-blue-500"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/trifikaralamsah
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
