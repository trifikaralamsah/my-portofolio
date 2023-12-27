import {
  faAddressBook,
  faAddressCard,
} from "@fortawesome/free-regular-svg-icons";
import { faBriefcase, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NavbarMobile = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const toggleTab = (tab) => {
    navigate(tab);
  };

  return (
    <div className="grid grid-cols-4 py-2 bg-slate-900 text-center sticky w-full bottom-0 md:hidden">
      <div className="flex flex-col gap-y-1" onClick={() => toggleTab("/")}>
        <FontAwesomeIcon
          icon={faHouse}
          className={`${pathname === "/" ? "text-cyan-300" : "text-white"}`}
        />
        <span
          className={`${
            pathname === "/" ? "text-cyan-300" : "text-white"
          } font-Gochi font-semibold`}
        >
          Home
        </span>
      </div>
      <div
        className="flex flex-col gap-y-1"
        onClick={() => toggleTab("/AboutMe")}
      >
        <FontAwesomeIcon
          icon={faAddressCard}
          className={`${
            pathname === "/AboutMe" ? "text-cyan-300" : "text-white"
          }`}
        />
        <span
          className={`${
            pathname === "/AboutMe" ? "text-cyan-300" : "text-white"
          } font-Gochi font-semibold`}
        >
          About Me
        </span>
      </div>{" "}
      <div
        className="flex flex-col gap-y-1"
        onClick={() => toggleTab("/Portofolio")}
      >
        <FontAwesomeIcon
          icon={faBriefcase}
          className={`${
            pathname === "/Portofolio" ? "text-cyan-300" : "text-white"
          }`}
        />
        <span
          className={`${
            pathname === "/Portofolio" ? "text-cyan-300" : "text-white"
          } font-Gochi font-semibold`}
        >
          Portofolio
        </span>
      </div>{" "}
      <div
        className="flex flex-col gap-y-1"
        onClick={() => toggleTab("/Contact")}
      >
        <FontAwesomeIcon
          icon={faAddressBook}
          className={`${
            pathname === "/Contact" ? "text-cyan-300" : "text-white"
          }`}
        />
        <span
          className={`${
            pathname === "/Contact" ? "text-cyan-300" : "text-white"
          } font-Gochi font-semibold`}
        >
          Contact
        </span>
      </div>
    </div>
  );
};

export default NavbarMobile;
