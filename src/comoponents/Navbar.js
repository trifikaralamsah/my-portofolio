import React from "react";
import { UserProvider } from "../config/context/User";
import AuthenticatedUser from "./AuthenticatedUser";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const toggleTab = (tab) => {
    navigate(tab);
  };

  return (
    <div className="py-5 w-full bg-gradient-to-r from-cyan-700 to-slate-900 z-20">
      <div className="text-white flex justify-between w-full px-10 md:px-24">
        <UserProvider>
          <AuthenticatedUser />
        </UserProvider>
        <div className="hidden md:block">
          <ul className="flex gap-6">
            <li
              className={`font-Gochi text-lg hover:text-cyan-200 cursor-pointer ${
                pathname === "/" && "underline underline-offset-8"
              }`}
              onClick={() => toggleTab("/")}
            >
              Home
            </li>
            <li
              className={`font-Gochi text-lg hover:text-cyan-200 cursor-pointer ${
                pathname === "/AboutMe" && "underline underline-offset-8"
              }`}
              onClick={() => toggleTab("/AboutMe")}
            >
              About Me
            </li>
            <li
              className={`font-Gochi text-lg hover:text-cyan-200 cursor-pointer ${
                pathname === "/Portofolio" && "underline underline-offset-8"
              }`}
              onClick={() => toggleTab("/Portofolio")}
            >
              Portofolio
            </li>
            <li
              className={`font-Gochi text-lg hover:text-cyan-200 cursor-pointer ${
                pathname === "/Contact" && "underline underline-offset-8"
              }`}
              onClick={() => toggleTab("/Contact")}
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
