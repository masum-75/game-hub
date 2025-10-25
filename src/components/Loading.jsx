import React from "react";

const Loading = () => {
  return (
    <div className="min-h-[70vh] flex justify-center items-center bg-gradient-to-br from-[#0a0a0a] via-[#141414] to-[#1f1f1f]">
      <div className="flex flex-col items-center">
        <span className="loading loading-ring loading-lg text-indigo-500"></span>
        <p className="text-gray-400 mt-4">Loading, please wait...</p>
      </div>
    </div>
  );
};

export default Loading;
