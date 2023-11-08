import React from "react";
import useLogout from "../../hooks/useLogout";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavThemeToggle from "../../Components/Navbar/NavThemeToggle";
import ProfileBanner from "./Components/ProfileBanner";
import Wallets from "./Components/Wallets";
import image from "../../image/seller.jpg";
// import "./Profile.css";
import ProfileDescription from "./Components/ProfileDescription";
import SharedInformation from "./Components/SharedInformation";

const Profile = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const userData = useSelector((state) => state.login.userData);
  return (
    <div>
      <NavThemeToggle></NavThemeToggle>
      <h1 className="text-3xl text-center font-bold m-5">Profile</h1>
      <div className="grid grid-cols-12 lg:m-6 m-auto px-auto ">
        <div className="md:col-span-5 col-span-11 flex flex-col items-center justify-center gap-10 ">
          <ProfileBanner></ProfileBanner>
          <Wallets></Wallets>
          <ProfileDescription></ProfileDescription>
          <SharedInformation></SharedInformation>
        </div>
        <div className="h-[100vh]  col-span-0 hidden rounded md:block border md:col-span-7">
          <div className="seller-buyer flex items-center flex-col h-full justify-between w-full">
            <img
              className="w-full"
              src="https://media.tenor.com/02ILjyFVXWQAAAAC/handshake.gif"
              alt=""
            />
            <h1 className="text-center text-3xl font-bold">
              Ready to earn on your own terms?
            </h1>
            <div className="flex justify-center">
              <Link to="/developer-register">
                <button className="btn mb-5 btn-lg btn-success">
                  Become a seller
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
