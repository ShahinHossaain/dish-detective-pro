import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivatetRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading)
    return (
      <p className="text-center">
        Loading <progress className="progress w-56"></progress>
      </p>
    );
  if (!user) return <Navigate to="/login" state={location}></Navigate>;
  return children;
};

export default PrivatetRouter;
