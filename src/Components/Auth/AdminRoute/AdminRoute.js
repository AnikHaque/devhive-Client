import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
import useAdmin from "../../../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const userLoading = useSelector((state) => state.login.userLoading);
  const user = useSelector((state) => state.login.userData);
  const [admin, loadingAdmin] = useAdmin();
  const location = useLocation();

  if (userLoading || loadingAdmin) {
    return (
      <div className="my-6">
        <div className="flex flex-col-reverse justify-center gap-3 items-center w-full h-48  rounded  ">
          <progress className="progress text-base-content w-[50vw]"></progress>
          <span className="text-base-content">Loading...</span>
        </div>
      </div>
    );
  }
  if (user && user?.uid && admin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};
export default AdminRoute;
