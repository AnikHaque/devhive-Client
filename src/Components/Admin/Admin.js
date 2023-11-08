import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingAnimation from "../LoadingAnimation";

const Admin = () => {
  const [adminData, setAdminData] = useState([]);
  useEffect(() => {
    try {
      const user = async () => {
        const user = localStorage.getItem("jwt");
        const config = {
          headers: {
            Authorization: `Bearer ${user}`,
          },
        };
        const { data } = await axios.get(
          `https://devhiveserver.vercel.app/admin/${localStorage.getItem(
            "user_id"
          )}`,

          config
        );
        setAdminData(data);
      };
      user();
    } catch (error) {
      console.log(error);
    }
  }, []);
  const handleChange = () => {
    const modal = document.getElementById("my-modal-5");
    modal.checked = true;
  };
  const handleChangePass = async (e) => {
    e.preventDefault();
    const form = e.target;
    const oldPass = form.oldPass.value;
    const newPass = form.newPass.value

    const currentPassword = oldPass;
    const newPassword = newPass;
    const jwtToken = localStorage.getItem("jwt");

    const data = { currentPassword, newPassword };
    const headers = { Authorization: `Bearer ${jwtToken}` };
    try {
      const response = await axios.patch(
        `https://devhiveserver.vercel.app/admin/${localStorage.getItem(
          "user_id"
        )}`,
        data,
        { headers }
      );

      console.log(response.data);
      alert("pass changed");
      const modal = document.getElementById("my-modal-5");
      modal.checked = false;
      //   btnClose();
    } catch (error) {
      console.log(error);
      alert(error.response.data.msg || "something went wrong");
    }
  };
  return (
    <div>
      {adminData.length == 0 ? (
        <LoadingAnimation></LoadingAnimation>
      ) : (
        <div className="w-full min-h-screen lg:w-[750px]">
          <div class="p-16">
            <div class="p-8 bg-white shadow mt-24">
              {" "}
              <div class="grid grid-cols-1 md:grid-cols-3">
                {" "}
                <div class="text-center order-last md:order-first mt-20 md:mt-0">
                  {" "}
                  <div>
                    {" "}
                    <p class="font-bold text-gray-700 md:mt-5 mt-0 text-xl">
                      {adminData?.verified ? "Verified ✅" : "Not Verified "}
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div class="relative">
                  {" "}
                  <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                    {adminData?.pic ? (
                      <img
                        className="w-full h-full"
                        src={adminData?.pic}
                        alt={adminData?.name}
                      />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-24 w-24"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        {" "}
                        <path
                          fill-rule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    )}
                  </div>{" "}
                </div>{" "}
                <div class="space-x-8 flex  mt-32 md:mt-0 justify-center">
                  <button
                    onClick={handleChange}
                    class="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                  >
                    {" "}
                    Change Admin Password
                  </button>{" "}
                </div>{" "}
              </div>{" "}
              <div class="mt-20 text-center border-b pb-12">
                {" "}
                <h1 class="text-4xl font-medium text-gray-700">
                  {adminData?.name}
                </h1>{" "}
                <p class="font-light text-gray-600 mt-3">
                  email: {adminData?.email}
                </p>{" "}
                <p class="mt-8 text-gray-500">_id: {adminData?._id}</p>{" "}
                <p class="mt-2 text-gray-500">uid: {adminData?.uid}</p>{" "}
              </div>{" "}
              <div class="mt-12 flex flex-col justify-center">
                {" "}
                <img src="https://zenquotes.io/api/image" alt="quote" />
              </div>
            </div>
          </div>
          <input type="checkbox" id="my-modal-5" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg mb-6">
                You are about to change your password!
              </h3>
              <form onSubmit={handleChangePass} action="">
                <div>
                  <label className="py-4" htmlFor="">
                    {" "}
                    Please enter your old password
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="password"
                    name="oldPass"
                    placeholder="••••••••"
                    // defaultValue={users?.email}
                    id="oldPass"
                    // onBlur={handleEventBlur}
                    required=""
                  />
                </div>
                <div className="mt-3">
                  <label className="py-4 " htmlFor="">
                    {" "}
                    Please enter your new password
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="password"
                    name="newPass"
                    placeholder="••••••••"
                    // defaultValue={users?.email}
                    id="newPass"
                    // onBlur={handleEventBlur}
                    required=""
                  />
                </div>

                <div className="modal-action">
                  <button type="submit" className="btn">
                    Submit
                  </button>
                  <label
                    onClick={() => {
                      //   btnClose();
                    }}
                    htmlFor="my-modal-5"
                    className="btn"
                  >
                    Cancel
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Admin;
