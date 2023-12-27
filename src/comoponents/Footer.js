import React from "react";

const Footer = () => {
  const getYear = new Date().getFullYear();
  return (
    <React.Fragment>
      <div className="py-6 bg-gradient-to-r from-cyan-700 to-slate-900 md:bg-slate-800 text-center md:absolute w-full bottom-0">
        <span className="text-white">
          Copyright &copy; Tri Fikar Alamsah {getYear}
        </span>
      </div>
    </React.Fragment>
  );
};

export default Footer;
