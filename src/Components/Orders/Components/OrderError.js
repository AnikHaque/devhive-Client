import React from "react";
import { Link } from "react-router-dom";
import { FcCancel } from "react-icons/fc";

const OrderError = () => {
  return (
    <div>
      <div class="bg-gray-100 h-screen">
        <div class="bg-white p-6  md:mx-auto">
          <div className="flex justify-center w-full">
            <FcCancel className="text-center text-8xl"></FcCancel>
          </div>

          <div class="text-center">
            <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">
              Payment Error!
            </h3>
            <p class="text-gray-600 my-2">
              This online payment faced some issue. Try contacting admin!
            </p>
            <p> Have a great day! </p>
            <div class="py-10  text-center">
              <Link
                to="/"
                class="px-12 mr-3 bg-indigo-600 btn btn-outline hover:bg-indigo-500 text-white font-semibold py-3"
              >
                GO HOME
              </Link>
              <Link
                to="/track-orders"
                class="px-12 btn  bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3"
              >
                See Orders
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderError;
