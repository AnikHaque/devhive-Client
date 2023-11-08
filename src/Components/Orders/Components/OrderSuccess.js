import React from "react";
import { Link, useLocation } from "react-router-dom";

const OrderSuccess = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const transactionId = query.get("transactionId");
  // console.log(transactionId);
  return (
    <div>
      <div class="bg-gray-100 h-screen">
        <div class="bg-white p-6  md:mx-auto">
          <svg
            viewBox="0 0 24 24"
            class="text-green-600 w-16 h-16 mx-auto my-6"
          >
            <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
            ></path>
          </svg>
          <div class="text-center">
            <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">
              Payment Done!
            </h3>
            <p class="text-gray-600 my-2">
              Thank you for completing your secure online payment.
            </p>
            <p> Have a great day! </p>
            <div class="pt-10 pb-5  text-center">
              <Link
                to="/"
                class="px-12 mr-3 bg-indigo-600 btn btn-outline hover:bg-indigo-500 text-white font-semibold py-3"
              >
                GO HOME
              </Link>
              <Link
                to="/track-orders"
                class="px-12 btn btn-outline bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3"
              >
                See Orders
              </Link>
            </div>
            {transactionId && (
              <div class=" text-center">
                <Link
                  to={`/track-orders/${transactionId}`}
                  class="px-12 btn w-auto sm:w-[350px] bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3"
                >
                  Get Invoice
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
