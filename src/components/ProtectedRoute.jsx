import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedRoute = ({
  redirectPath = "/login",
  toastMessage = "Please login or create an account",
}) => {
  const { currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    toast.warn(toastMessage);
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
