import React from "react";
import SettingsNavigation from "../Components/Settings/SettingsNavigation/SettingsNavigation";
import { Outlet } from "react-router";

const SettingsLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap justify-evenly ">
      <SettingsNavigation></SettingsNavigation>
      <Outlet></Outlet>
    </div>
  );
};

export default SettingsLayout;
