import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useToast } from "react-toastify";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingAnimation from "../LoadingAnimation";
const ManageDevelopers = () => {
  const [admin, setAdmin] = useState([]);
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [selectedId, setSelectedId] = useState();
  const [adminToRemove, setAdminToRemove] = useState();
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
          `https://devhiveserver.vercel.app/admin/all`,

          config
        );
        setAdmin(data);
      };
      user();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSearch = (e) => {};
  // console.log(search);
  // console.log(admin);
  const toast = useToast;
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
          `https://devhiveserver.vercel.app/user/user?search=${search}`,

          config
        );
        setUsers(data);
      };
      user();
    } catch (error) {
      console.log(error);
    }
  }, [search]);
  const btnClose = () => {
    setSearch("");
    setUsers([]);
    selectedUser();
  };
  // console.log(users);
  const selectedUser = (user) => {
    // console.log(id);
    setSelectedId(user);
  };
  const addAdmin = () => {
    const modal = document.getElementById("my-modal-6");
    modal.checked = true;
  };
  const userData = useSelector((state) => state.login.userData);
  const handleAdd = async (e) => {
    e.preventDefault();
    // console.log(e.target.confirmAdd.value);
    const data = {
      id: selectedId?._id,
      adminmakerpass: e.target.confirmAdd.value,
      adminmaker: localStorage.getItem("user_id"),
    };
    // console.log(data);
    try {
      const user = localStorage.getItem("jwt");
      const config = {
        headers: {
          Authorization: `Bearer ${user}`,
        },
      };
      const response = await axios.post(
        "https://devhiveserver.vercel.app/admin",
        data,
        config
      );
      console.log("admin added");
      btnClose();
      setAdmin([...admin, response.data]);
      // console.log([...admin, response]);
      const modal = document.getElementById("my-modal-6");
      modal.checked = false;
      // toast.success("admin added");
    } catch (error) {
      // console.log(error);
      alert(error?.response?.data?.error || error?.response?.data?.msg);
      toast.error("something went wrong");
    }
  };
  // const handleRemove = async (e) => {
  //   e.preventDefault();
  //   // console.log(e.target.confirmRemove.value);
  //   const data = {
  //     adminterminator: localStorage.getItem("user_id"),
  //     adminterminatorpass: e.target.confirmRemove.value,
  //   };
  //   // console.log(data);
  //   try {
  //     const user = localStorage.getItem("jwt");
  //     const config = {
  //       headers: {
  //         Authorization: `Bearer ${user}`,
  //       },
  //     };
  //     const url = `https://devhiveserver.vercel.app/admin/${adminToRemove?._id}`;
  //     // console.log(url);
  //     const response = await axios.delete(url, data, config);
  //     console.log(response.data);
  //     btnClose();
  //     // setAdmin([...admin, data]);
  //     const modal = document.getElementById("my-modal-5");
  //     modal.checked = false;
  //     // toast.success("admin added");
  //     alert("admin removed");
  //   } catch (error) {
  //     console.log(error);
  //     alert("something went wrong");
  //     // toast.error("something went wrong");
  //   }
  // };
  const handleRemove = async (e) => {
    e.preventDefault();

    // const adminToRemove = // some code to get the admin object you want to delete
    const adminterminatorpass = e.target.confirmRemove.value;
    const adminterminator = localStorage.getItem("user_id");
    const jwtToken = localStorage.getItem("jwt");

    const data = { adminterminator, adminterminatorpass };
    const headers = { Authorization: `Bearer ${jwtToken}` };

    try {
      const response = await axios.delete(
        `https://devhiveserver.vercel.app/admin/${adminToRemove._id}`,
        { data, headers }
      );

      console.log(response.data);
      alert("admin removed");
      const modal = document.getElementById("my-modal-5");
      modal.checked = false;
      btnClose();
    } catch (error) {
      console.log(error);
      alert("something went wrong");
    }
  };
  const handleAdminDelete = (admin) => {
    setAdminToRemove(admin);
    const modal = document.getElementById("my-modal-5");
    modal.checked = true;
  };
  return (
    <div className="w-full min-h-screen lg:w-[750px]">
      {admin.length == 0 ? (
        <LoadingAnimation></LoadingAnimation>
      ) : (
        <section class="bg-gray-50  dark:bg-gray-900 p-3 sm:p-5">
          <div class="mx-auto  max-w-screen-xl px-2 lg:px-4">
            {/* <!-- Start coding here --> */}
            <ToastContainer></ToastContainer>
            <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
              <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                <div class="w-full md:w-1/2">
                  <div class="flex items-center">
                    <label for="simple-search" class="sr-only">
                      Search
                    </label>
                    {!selectedId ? (
                      <div class="relative flex flex-row w-full">
                        {search.length !== 0 && (
                          <button
                            className="btn relative  left-8 top-2 btn-ghost cursor-pointer btn-outline btn-xs btn-circle"
                            onClick={btnClose}
                          >
                            {" "}
                            <AiOutlineCloseCircle></AiOutlineCloseCircle>
                          </button>
                        )}
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          {search.length < 1 && (
                            <svg
                              aria-hidden="true"
                              class="w-5 h-5 text-gray-500 dark:text-gray-400"
                              fill="currentColor"
                              viewbox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                        <input
                          onChange={(e) => setSearch(e.target.value)}
                          type="text"
                          id="simple-search"
                          value={search}
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Search"
                          required=""
                        />
                      </div>
                    ) : (
                      <div className="flex border border-solid p-2 rounded-md justify-evenly flex-row flex-wrap items-center w-full">
                        <button>{selectedId?.name}</button>
                        <button
                          onClick={() => {
                            btnClose();
                          }}
                          className="btn btn-ghost btn-xs btn-outline btn-circle"
                        >
                          <AiOutlineCloseCircle></AiOutlineCloseCircle>
                        </button>
                      </div>
                    )}
                    {search && !selectedId && (
                      <div className="relative right-60 top-6">
                        <ul className="absolute menu p-2 shadow bg-base-100 rounded-box w-52">
                          {users.map((user) => (
                            <li
                              className="flex flex-row overflow-clip"
                              key={user?._id}
                            >
                              <a
                                className="w-full"
                                onClick={() => {
                                  selectedUser(user);
                                }}
                              >
                                {" "}
                                <img
                                  src={user?.pic}
                                  className="w-6"
                                  alt=""
                                />{" "}
                                {user?.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                  {selectedId && (
                    <button
                      onClick={addAdmin}
                      type="button "
                      class="flex items-center border justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                    >
                      <svg
                        class="h-3.5 w-3.5 mr-2"
                        fill="currentColor"
                        viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        />
                      </svg>
                      Add admin
                    </button>
                  )}
                  {/* The button to open modal */}
                  {/* <label htmlFor="my-modal-6" className="btn">
                  open modal
                </label> */}

                  {/* Put this part before </body> tag */}
                  <input
                    type="checkbox"
                    id="my-modal-6"
                    className="modal-toggle"
                  />
                  <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg">
                        You are about to set {selectedId?.name} as an admin!
                      </h3>
                      <p className="py-4">
                        Please enter your password to confirm
                      </p>
                      <form onSubmit={handleAdd} action="">
                        <input
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          type="password"
                          name="confirmAdd"
                          placeholder="••••••••"
                          // defaultValue={users?.email}
                          id="confirmAdd"
                          // onBlur={handleEventBlur}
                          required=""
                        />

                        <div className="modal-action">
                          <button type="submit" className="btn">
                            Submit
                          </button>
                          <label
                            onClick={() => {
                              btnClose();
                            }}
                            htmlFor="my-modal-6"
                            className="btn"
                          >
                            Cancel
                          </label>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="flex items-center space-x-3 w-full md:w-auto">
                    <button
                      id="actionsDropdownButton"
                      data-dropdown-toggle="actionsDropdown"
                      class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      type="button"
                    >
                      <svg
                        class="-ml-1 mr-1.5 w-5 h-5"
                        fill="currentColor"
                        viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        />
                      </svg>
                      Actions
                    </button>
                    <div
                      id="actionsDropdown"
                      class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <ul
                        class="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="actionsDropdownButton"
                      >
                        <li>
                          <a
                            href="#"
                            class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Mass Edit
                          </a>
                        </li>
                      </ul>
                      <div class="py-1">
                        <a
                          href="#"
                          class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Delete all
                        </a>
                      </div>
                    </div>
                    <button
                      id="filterDropdownButton"
                      data-dropdown-toggle="filterDropdown"
                      class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        class="h-4 w-4 mr-2 text-gray-400"
                        viewbox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Filter
                      <svg
                        class="-mr-1 ml-1.5 w-5 h-5"
                        fill="currentColor"
                        viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          clip-rule="evenodd"
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        />
                      </svg>
                    </button>
                    <div
                      id="filterDropdown"
                      class="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700"
                    >
                      <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                        Choose brand
                      </h6>
                      <ul
                        class="space-y-2 text-sm"
                        aria-labelledby="filterDropdownButton"
                      >
                        <li class="flex items-center">
                          <input
                            id="apple"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="apple"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                          >
                            Apple (56)
                          </label>
                        </li>
                        <li class="flex items-center">
                          <input
                            id="fitbit"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="fitbit"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                          >
                            Microsoft (16)
                          </label>
                        </li>
                        <li class="flex items-center">
                          <input
                            id="razor"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="razor"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                          >
                            Razor (49)
                          </label>
                        </li>
                        <li class="flex items-center">
                          <input
                            id="nikon"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="nikon"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                          >
                            Nikon (12)
                          </label>
                        </li>
                        <li class="flex items-center">
                          <input
                            id="benq"
                            type="checkbox"
                            value=""
                            class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            for="benq"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                          >
                            BenQ (74)
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" class="px-4 py-3">
                        Admin name
                      </th>
                      <th scope="col" class="px-4 py-3">
                        Category
                      </th>
                      <th scope="col" class="px-4 py-3">
                        Verified
                      </th>
                      <th scope="col" class="px-4 py-3">
                        Action
                      </th>
                      <th scope="col" class="px-4 py-3">
                        Email
                      </th>
                      <th scope="col" class="px-4 py-3">
                        <span class="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {admin.map((adminData) => (
                      <tr
                        key={adminData._id}
                        class="border-b dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {adminData?.name}
                        </th>
                        <td class="px-4 py-3">
                          {adminData?.isSuperAdmin ? "Super Admin" : "Admin"}
                        </td>
                        <td class="px-4 py-3">
                          {adminData?.verified ? "Verified" : "Not Verified"}
                        </td>
                        <td class="px-4 py-3">
                          <button
                            onClick={() => handleAdminDelete(adminData)}
                            className={
                              adminData?.isSuperAdmin
                                ? "btn btn-sm btn-error btn-outline btn-disabled"
                                : "btn btn-sm btn-error btn-outline"
                            }
                          >
                            Delete
                          </button>
                        </td>
                        <td class="px-4 py-3">{adminData?.email}</td>
                        <td class="px-4 py-3 flex items-center justify-end">
                          <button
                            id="apple-imac-27-dropdown-button"
                            data-dropdown-toggle="apple-imac-27-dropdown"
                            class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                            type="button"
                          >
                            <svg
                              class="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewbox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                            </svg>
                          </button>
                          <div
                            id="apple-imac-27-dropdown"
                            class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                          >
                            <ul
                              class="py-1 text-sm text-gray-700 dark:text-gray-200"
                              aria-labelledby="apple-imac-27-dropdown-button"
                            >
                              <li>
                                <a
                                  href="#"
                                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Show
                                </a>
                              </li>
                              <li>
                                <a
                                  href="#"
                                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                  Edit
                                </a>
                              </li>
                            </ul>
                            <div class="py-1">
                              <a
                                href="#"
                                class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                              >
                                Delete
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my-modal-5" className="modal-toggle" />
              <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">
                    You are about to remove {adminToRemove?.name} from admin!
                  </h3>
                  <p className="py-4">Please enter your password to confirm</p>
                  <form onSubmit={handleRemove} action="">
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      type="password"
                      name="confirmRemove"
                      placeholder="••••••••"
                      // defaultValue={users?.email}
                      id="confirmRemove"
                      // onBlur={handleEventBlur}
                      required=""
                    />

                    <div className="modal-action">
                      <button type="submit" className="btn">
                        Submit
                      </button>
                      <label
                        onClick={() => {
                          btnClose();
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
              <nav
                class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
                aria-label="Table navigation"
              >
                <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Showing
                  <span class="font-semibold text-gray-900 dark:text-white">
                    1-10
                  </span>
                  of
                  <span class="font-semibold text-gray-900 dark:text-white">
                    1000
                  </span>
                </span>
                <ul class="inline-flex items-stretch -space-x-px">
                  <li>
                    <a
                      href="#"
                      class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <span class="sr-only">Previous</span>
                      <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      aria-current="page"
                      class="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    >
                      3
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      ...
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      100
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <span class="sr-only">Next</span>
                      <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewbox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ManageDevelopers;
