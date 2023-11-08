import React from "react";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <section className="bg-[url(https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/attachments/generic_asset/asset/2413b8415dda9dbd7756d02cb87cd4b1-1599595203045/bg-hero-2-1792-x1.png)] bg-cover bg-center bg-no-repeat bg-blend-overlay text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl text-[white] font-extrabold sm:text-5xl">
            Find the perfect services
            <span className="sm:block"> for your business </span>
          </h1>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded border border-blue-600 bg-secondary px-12 py-3 text-sm font-medium text-white hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              to="/services"
            >
              Explore
            </Link>

            <Link
              className="block w-full rounded border border-blue-600 bg-accent px-12 py-3 text-sm font-medium text-white  focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
              to="/developer-register"
            >
              Become a Seller
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
