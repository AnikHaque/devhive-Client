import React from "react";
import { useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";

const DeveloperIntro = () => {
  const userData = useSelector((state) => state.login.userData);

  return (
    <div>
      <div class="p-16 flex ">
        <div class="w-4/12 mx-auto p-8 bg-white shadow text-center">
          {" "}
          <div>
            {" "}
            <div class="">
              {" "}
              <div class="w-32 h-32 bg-indigo-100 mx-auto rounded-full shadow-xl inset-x-0 flex items-center justify-center text-indigo-500">
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
                </svg>{" "}
              </div>{" "}
            </div>{" "}  
          </div>{" "}
          <div class="mt-8 border-b pb-12">
            {" "}
            <h1 class="text-2xl font-semibold text-gray-600">
              Jessica Jones
            </h1>
            <h1 class="text-lg font-medium text-gray-300">
              @jones_jessica
            </h1>
            <p class="font-bold text-md text-gray-600 mt-2">I build websites</p>{" "}
          </div>{" "}
            <div>
              <p class="mt-8 text-left font-semibold text-2xl text-gray-600">Skill:</p>
              <div class="mt-3 ml-6 text-left font-medium text-lg text-gray-500 grid lg:grid-cols-2 ">
                <p className="block">Web Design</p>
                <p className="block">Javascript</p>
                <p className="block">React</p>
                <p className="block">NextJs</p>
              </div>
            </div>
        </div>
        <div class="w-8/12 mt-6 flex flex-col lg:px-16">
            <p className="font-semibold text-2xl pb-6 ">Description</p>
            <p class="text-gray-600 font-medium text-md mb-2">
            Hi! I'm a web designer and developer with over 12 years of experience and have completed over 150 projects using HTML, CSS, JavaScript, WordPress, and Drupal.
            </p>{" "}
         
            
        </div>
      </div>
    </div>
  );
};

export default DeveloperIntro;
