import React, { createContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    setLoading(true);
    try {
      let response = await fetch(
        "https://jsonplaceholder.typicode.com/users/2",
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .catch((err) => console.log("error: ", err));

      setLoading(false);
      console.log(response);
      //   setUser(response);
      setUser({
        id: 1,
        name: "Tri Fikar Alamsah",
        username: "Fikar",
        email: "trifikar24@gmail.com",
        address: {
          street: "Jl. Adi Sengkong",
          suite: "No. 50",
          city: "Tangerang Selatan",
          zipcode: "14415",
          geo: {
            lat: "-43.9509",
            lng: "-34.4618",
          },
        },
        phone: "089679592391",
        website: "fikar.com",
        company: {
          name: "",
          catchPhrase: "",
          bs: "",
        },
      });
    } catch (error) {
      console.log("errorCatch: ", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  // console.log(user);

  return (
    <UserContext.Provider value={{ user, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
