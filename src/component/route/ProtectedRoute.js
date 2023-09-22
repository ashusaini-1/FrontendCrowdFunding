import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { loadUser } from "../../action/userAction";

const PrivateRoute = ({ isAdminId, isAdmin, isUser, children, redirectPath = '/login' }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  // If user data is not available yet, return null (or a loading indicator)
  if (isUser === undefined) {
    return null;
  }

  // If the user is not logged in, redirect to the login page
  if (!isUser) {
    return <Navigate to={redirectPath} replace />;
  }

console.log(isAdminId);
   
  if (isAdmin === true && isAdminId !== "admin") {
    return <Navigate to="/" />;
  }

  


  // If none of the above conditions are met, allow access to the route
  return children ? children : <Outlet />;
};

export default PrivateRoute;
