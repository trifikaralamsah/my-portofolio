import React, { createContext, useEffect, useState } from "react";
import { imgFerizy, imgIfcs, imgMern, imgSolbuss } from "../../assets";

const PortofolioContext = createContext();

const PortofolioProvider = ({ children }) => {
  const [portofolio, setPortofolio] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPortofolio = async () => {
    setLoading(true);
    try {
      const response = await [
        {
          id: 1,
          title: "Web Apps Ferizy",
          position: "Web Programmer as Frontend Dev",
          description:
            "Web Apps yang dibangun untuk mempermudah pengguna dalam memesan tiket kapal ferry secara online dengan mudah, kemudian dapat diakses oleh pelanggan melalui web apps.",
          image: `${imgFerizy}`,
        },
        {
          id: 2,
          title: "Web Apps Indonesian Ferry Coprorate System",
          position: "Web Programmer as Frontend Dev",
          description:
            "Web Apps yang dibangun untuk mempermudah coorporate atau perusahaan dalam memesan tiket kapal ferry secara online dalam menjalankan bisninsnya, kemudian dapat diakses oleh perusahaan melalui web apps.",
          image: `${imgIfcs}`,
        },
        {
          id: 3,
          title: "Omni Channel",
          position: "Web Programmer as Frontend Dev",
          description:
            "Web Apps yang dibangun untuk mempermudah penjual atau perusahaan dalam mengiklankan produknya secara online ke dalam beberapa channel dan dapat diakses melalui web apps.",
          image: `${imgSolbuss}`,
        },
        {
          id: 4,
          title: "CRUD MERN Stack",
          position: "Explorasi Web Developer",
          description:
            "Explorasi membangun aplikasi CRUD (Create, Read, Update, Delete) dengan MERN Stack (MongoDB, ExpressJS, ReactJS, NodeJS).",
          image: `${imgMern}`,
        },
      ];
      setPortofolio(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getPortofolio();
  }, []);

  return (
    <PortofolioContext.Provider value={{ portofolio, loading }}>
      {children}
    </PortofolioContext.Provider>
  );
};

export { PortofolioContext, PortofolioProvider };
