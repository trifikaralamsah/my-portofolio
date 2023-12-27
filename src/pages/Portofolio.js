import React from "react";
import { PortofolioProvider } from "../config/context/PortofolioContext";
import ModalPortofolio from "../comoponents/ModalPortofolio";

const Portofolio = () => {
  return (
    <PortofolioProvider>
      <div className="container mx-auto border rounded-lg shadow-lg p-7 grid md:grid-cols-3 pb-24 md:pb-7 bg-white gap-4">
        <ModalPortofolio />
      </div>
    </PortofolioProvider>
  );
};

export default Portofolio;
