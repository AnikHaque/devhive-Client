import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useLogout from "../../../hooks/useLogout";

const ProfileBanner = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const userData = useSelector((state) => state.login.userData);
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700   flex justify-center flex-col items-center">
      <div className="flex flex-col items-center justify-center">
        <img
          className="w-40 rounded-full"
          title={userData?.displayName}
          src={userData?.photoURL}
          alt={userData?.displayName}
        />
        <img
          src="http://cdn.onlinewebfonts.com/svg/img_188436.png"
          alt="select_photo"
          className="btn-xs relative bottom-6 btn btn-ghost btn-outline btn-circle"
        />
      </div>
      <h2 className="text-3xl">{userData?.displayName}</h2>
      <h2 className="text-xl">{userData?.email}</h2>
      {/* <h4 className="text-xl">uid: {userData?.uid}</h4> */}
      <h4 className="text-xl">{userData?.phoneNumber}</h4>

      <div className="flex m-3">
        <Link to="/settings/account">
          <button
            className=" btn btn-outline btn-primary"
            gradientMonochrome="failure"
          >
            Edit Profile
          </button>
        </Link>
        <button
          className="ml-3 btn btn-outline btn-secondary"
          gradientMonochrome="failure"
          onClick={useLogout()}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileBanner;
