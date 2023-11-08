import React from "react";
import "./ProfileDescription.css";
import { FaFacebook, FaGooglePlus, FaPlus } from "react-icons/fa";

const ProfileDescription = () => {
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between items-center w-full description">
        <h1 className="mb-0 text-2xl  font-semibold text-gray-900 md:text-xl dark:text-white">
          Description
        </h1>
        <h1 class="text-1xl font-normal text-gray-500 dark:text-gray-400 edit-description">
          Edit Description
        </h1>
      </div>
      <div className=" w-full description  mt-7">
        <div className="flex justify-between items-center">
          <h1 className="mb-0 text-2xl font-semibold text-gray-900 md:text-xl dark:text-white">
            Language
          </h1>
          <h1 class="text-1xl font-normal text-gray-500 dark:text-gray-400 edit-description">
            Add New
          </h1>
        </div>
        <h1 className="mt-3 text-1xl">
          English-<span className="basic">Basic</span>
        </h1>
      </div>
      <div className="mt-7 description linked-accounts">
        <h1 className="text-2xl font-semibold">Linked Accounts</h1>
        <p className="flex items-center ">
          <span className="mr-2">
            <FaFacebook></FaFacebook>
          </span>
          Facebook
        </p>
        <p className="flex items-center ">
          <span className="mr-2">
            <FaGooglePlus></FaGooglePlus>
          </span>
          Google
        </p>
        <p className="flex items-center linked-color">
          <span className="mr-2">
            <FaPlus></FaPlus>
          </span>
          Dribbble
        </p>
        <p className="flex items-center linked-color">
          <span className="mr-2">
            <FaPlus></FaPlus>
          </span>
          Stack Overflow
        </p>
        <p className="flex items-center linked-color">
          <span className="mr-2">
            <FaPlus></FaPlus>
          </span>
          Github
        </p>
        <p className="flex items-center linked-color">
          <span className="mr-2">
            <FaPlus></FaPlus>
          </span>
          Vimeo
        </p>
        <p className="flex items-center linked-color">
          <span className="mr-2">
            <FaPlus></FaPlus>
          </span>
          Twitter
        </p>
      </div>
      <div className=" w-full description  mt-7">
        <div className="flex justify-between items-center">
          <h1 className="mb-0 text-2xl font-semibold text-gray-900 md:text-xl dark:text-white">
            Skill
          </h1>
          <h1 class="text-1xl font-normal text-gray-500 dark:text-gray-400 edit-description">
            Add New
          </h1>
        </div>
        <h1 className="mt-3 text-1xl add-your-skill">Add your Skill</h1>
      </div>
      <div className=" w-full description  mt-7">
        <div className="flex justify-between items-center">
          <h1 className="mb-0 text-2xl font-semibold text-gray-900 md:text-xl dark:text-white">
            Education
          </h1>
          <h1 class="text-1xl font-normal text-gray-500 dark:text-gray-400 edit-description">
            Add New
          </h1>
        </div>
        <h1 className="mt-3 text-1xl add-your-skill">Add your Education</h1>
      </div>
      <div className=" w-full description  mt-7">
        <div className="flex justify-between items-center">
          <h1 className="mb-0 text-2xl font-semibold text-gray-900 md:text-xl dark:text-white">
            Certification
          </h1>
          <h1 class="text-1xl font-normal text-gray-500 dark:text-gray-400 edit-description">
            Add New
          </h1>
        </div>
        <h1 className="mt-3 text-1xl add-your-skill">Add your Certification</h1>
      </div>
    </div>
  );
};

export default ProfileDescription;
