import React from "react";
import { Outlet } from "react-router";
import AdminNavigation from "../Components/Admin/AdminNavigation/AdminNavigation";
import Reviews from "../Components/Reviews/Reviews";

const AdminLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap justify-evenly ">
      <AdminNavigation></AdminNavigation>
      <Outlet></Outlet>
      <Reviews></Reviews>
    </div>
  );
};

export default AdminLayout;
