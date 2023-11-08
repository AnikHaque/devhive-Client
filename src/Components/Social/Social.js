import React from "react";
import "./Social.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { TbMan } from "react-icons/tb";

const Social = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 py-5 items-center container mx-auto">
      <div className=" md:flex items-center">
        <p className="text-center">
          <span className="DevhiveClients-text">
            &copy; Devhive International Ltd. 2023
          </span>
        </p>
      </div>
      <div>
        <p className="flex justify-center social-icon">
          <FaTwitter></FaTwitter>
          <FaFacebook></FaFacebook>
          <FaLinkedin></FaLinkedin>
          <FaInstagram></FaInstagram>
        </p>
      </div>
      <div>
        <p className="flex justify-center items-center social-icons">
          <button className="button-writing">
            <TfiWorld></TfiWorld>
            <span>English</span>
          </button>
          <button className="button-dolar">
            <span className="mr-1 font-bold">$</span>
            <span className=" font-bold">USD</span>
          </button>
          <button>
            <TbMan></TbMan>
          </button>
        </p>
      </div>
    </div>
  );
};

export default Social;
