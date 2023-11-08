import React from "react";

const LeftNavBanner = () => {
  return (
    <div>
      <div class="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
        <div class="h-20 w-20 rounded-full border overflow-hidden">
          <img
            src="https://avatars3.githubusercontent.com/u/2763884?s=128"
            alt="Avatar"
            class="h-full w-full"
          />
        </div>
        <div class="text-sm font-semibold mt-2">Aminos Co.</div>
        <div class="text-xs text-gray-500">Lead UI/UX Designer</div>
        <div class="flex flex-row items-center mt-3">
          <div class="flex flex-col justify-center h-4 w-8 bg-indigo-500 rounded-full">
            <div class="h-3 w-3 bg-white rounded-full self-end mr-1"></div>
          </div>
          <div class="leading-none ml-1 text-xs">Active</div>
        </div>
      </div>
    </div>
  );
};

export default LeftNavBanner;
<div class="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
  <div class="h-20 w-20 rounded-full border overflow-hidden">
    <img
      src="https://avatars3.githubusercontent.com/u/2763884?s=128"
      alt="Avatar"
      class="h-full w-full"
    />
  </div>
  <div class="text-sm font-semibold mt-2">Aminos Co.</div>
  <div class="text-xs text-gray-500">Lead UI/UX Designer</div>
  <div class="flex flex-row items-center mt-3">
    <div class="flex flex-col justify-center h-4 w-8 bg-indigo-500 rounded-full">
      <div class="h-3 w-3 bg-white rounded-full self-end mr-1"></div>
    </div>
    <div class="leading-none ml-1 text-xs">Active</div>
  </div>
</div>;
