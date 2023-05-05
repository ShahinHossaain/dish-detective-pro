import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivatetRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <button className="btn btn-success btn-lg loading justify-center items-center">
          loading
        </button>
      </div>
    );
  }

  if (!user) return <Navigate to="/login" state={location}></Navigate>;
  return children;
};

export default PrivatetRouter;
