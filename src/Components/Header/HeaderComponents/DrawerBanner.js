import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useLogout from "../../../hooks/useLogout";

const DrawerBanner = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const userData = useSelector((state) => state.login.userData);

  return (
    <>
      <div className=" w-full h-[80px] bg-base-300 mt-5 rounded-lg"></div>
      <div className="avatar relative bottom-10 left-2  rounded-lg ">
        <div className="w-12 relative top-3 left-1 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={userData?.photoURL} alt={userData?.displayName} />
        </div>
      </div>
      <div className="">
        <div className="text-base-content font-medium  dark:text-gray-200">
          {userData?.displayName}
        </div>
      </div>
      <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
        {userData?.email}
      </div>
      <div className="flex flex-row justify-evenly items-center my-3">
        <Link to="/notification" className="btn  btn-xs btn-circle btn-ghost">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1246/1246378.png"
            alt="edit profile"
            title="edit profile"
          />
        </Link>
        <Link to="/user-profile" className="btn  btn-xs btn-circle btn-ghost">
          <img
            src="https://cdn-icons-png.flaticon.com/512/655/655707.png"
            alt="settings"
            title="settings"
          />
        </Link>
        <a onClick={useLogout()} className="btn  btn-xs btn-circle btn-ghost">
          <img
            src="https://cdn-icons-png.flaticon.com/512/166/166456.png"
            alt="logout"
            title="logout"
          />
        </a>
      </div>
    </>
  );
};

export default DrawerBanner;
