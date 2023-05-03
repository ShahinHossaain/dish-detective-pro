import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivatetRouter = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  //   console.log("+++", user);
  if (!user) return <Navigate to="/login" state={location}></Navigate>;
  return children;
};

export default PrivatetRouter;
