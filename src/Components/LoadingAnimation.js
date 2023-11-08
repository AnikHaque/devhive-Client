import React from "react";

const LoadingAnimation = () => {
  return (
    <div className="my-6">
      <div className="flex flex-col-reverse justify-center gap-3 items-center w-full h-48  rounded  ">
        <progress className="progress text-base-content w-[50vw]"></progress>
        <span className="text-base-content">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingAnimation;
