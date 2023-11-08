import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const userLoading = useSelector((state) => state.login.userLoading);
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const user = useSelector((state) => state.login.userData);
  const location = useLocation();
  //   console.log(userLoading);
  if (userLoading === true) {
    return (
      <div className="my-6">
        <div className="flex flex-col-reverse justify-center gap-3 items-center w-full h-48  rounded  ">
          <progress className="progress text-base-content w-[50vw]"></progress>
          <span className="text-base-content">Loading...</span>
        </div>
      </div>
    );
  }
  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};
export default PrivateRoute;
