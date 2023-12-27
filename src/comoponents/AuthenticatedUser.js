import React, { useContext } from "react";
import { UserContext } from "../config/context/User";

const AuthenticatedUser = () => {
  const { user, loading } = useContext(UserContext);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="font-Gochi text-lg">{user.name} </div>
      )}
    </div>
  );
};

export default AuthenticatedUser;
