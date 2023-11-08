import React from "react";
import { Link } from "react-router-dom";
import "./MarketPlace.css";

const MarketPlace = () => {
  
  return (
    <div className="container mx-auto my-10">
      <h2 className="md:text-4xl text-3xl text-center font-bold text-left text-primary">
        Explore the marketplace
      </h2>
      <div className="grid  md:grid-cols-5 gap-4 mt-10 grid-cols-2">
        <div className="card  bg-base-100  ">
          <Link className="px-6 pt-6 text-center">
            <img
              alt=" "
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/graphics-design.91dfe44.svg"
              className="rounded-xl w-14 mx-auto"
            />
          </Link>
          <div className="card-body items-center text-center p-0 line">
            <h2 className=" pt-3 text-md font-semibold lg:text-xl ">
              Graphics & Design
            </h2>
          </div>
        </div>
        <div className="card  bg-base-100  ">
          <Link className="px-6 pt-6 text-center">
            <img
              alt=" "
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/online-marketing.a3e9794.svg"
              className="rounded-xl w-14 mx-auto"
            />
          </Link>
          <div className="card-body items-center text-center p-0 line">
            <h2 className=" pt-3 text-md font-semibold lg:text-xl ">
              Digital Marketing
            </h2>
          </div>
        </div>
        <div className="card  bg-base-100  ">
          <Link className="px-6 pt-6 text-center">
            <img
              alt=" "
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/writing-translation.a787f2f.svg"
              className="rounded-xl w-14 mx-auto"
            />
          </Link>
          <div className="card-body items-center text-center p-0 line">
            <h2 className=" pt-3 text-md font-semibold lg:text-xl ">
              Writing & Translation
            </h2>
          </div>
        </div>
        <div className="card  bg-base-100  ">
          <Link className="px-6 pt-6 text-center">
            <img
              alt=" "
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/video-animation.1356999.svg"
              className="rounded-xl w-14 mx-auto"
            />
          </Link>
          <div className="card-body items-center text-center p-0 line">
            <h2 className=" pt-3 text-md font-semibold lg:text-xl ">
              Video & Animation
            </h2>
          </div>
        </div>
        <div className="card  bg-base-100  ">
          <Link className="px-6 pt-6 text-center">
            <img
              alt=" "
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/music-audio.ede4c90.svg"
              className="rounded-xl w-14 mx-auto"
            />
          </Link>
          <div className="card-body items-center text-center p-0 line">
            <h2 className=" pt-3 text-md font-semibold lg:text-xl ">
              Music & Audio
            </h2>
          </div>
        </div>
        <div className="card  bg-base-100  ">
          <Link className="px-6 pt-6 text-center">
            <img
              alt=" "
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/programming.6ee5a90.svg"
              className="rounded-xl w-14 mx-auto"
            />
          </Link>
          <div className="card-body items-center text-center p-0 line">
            <h2 className=" pt-3 text-md font-semibold lg:text-xl ">
              Programming & Tech
            </h2>
          </div>
        </div>
        <div className="card  bg-base-100  ">
          <Link className="px-6 pt-6 text-center">
            <img
              alt=" "
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/business.fabc3a7.svg"
              className="rounded-xl w-14 mx-auto"
            />
          </Link>
          <div className="card-body items-center text-center p-0 line">
            <h2 className=" pt-3 text-md font-semibold lg:text-xl ">
              Business
            </h2>
          </div>
        </div>
        <div className="card  bg-base-100  ">
          <Link className="px-6 pt-6 text-center">
            <img
              alt=" "
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/lifestyle.112b348.svg"
              className="rounded-xl w-14 mx-auto"
            />
          </Link>
          <div className="card-body items-center text-center p-0 line">
            <h2 className=" pt-3 text-md font-semibold lg:text-xl ">
              Lifestyle
            </h2>
          </div>
        </div>
        <div className="card  bg-base-100  ">
          <Link className="px-6 pt-6 text-center">
            <img
              alt=" "
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/data.855fe95.svg"
              className="rounded-xl w-14 mx-auto"
            />
          </Link>
          <div className="card-body items-center text-center p-0 line">
            <h2 className="card-title pt-7  ">Data</h2>
          </div>
        </div>
        <div className="card  bg-base-100  ">
          <Link className="px-6 pt-6 text-center">
            <img
              alt=" "
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/photography.0cf5a3f.svg"
              className="rounded-xl w-14 mx-auto"
            />
          </Link>
          <div className="card-body items-center text-center p-0 line">
            <h2 className=" pt-3 text-md font-semibold lg:text-xl ">
              Photography
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
