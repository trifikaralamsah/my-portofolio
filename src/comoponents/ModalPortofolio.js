import React, { useContext } from "react";
import { PortofolioContext } from "../config/context/PortofolioContext";
import ModalFragment from "../fragments/ModalFragment";

const ModalPortofolio = () => {
  const { portofolio, loading } = useContext(PortofolioContext);

  if (loading && portofolio.length === 0) return <div>Loading...</div>;

  return portofolio.map((item) => {
    return <ModalFragment item={item} key={`${item.id}-${item.title}`} />;
  });
};

export default ModalPortofolio;
