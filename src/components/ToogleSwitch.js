import React from "react";

const ToggleSwitch = ({ label }) => {
  return (
    <div className="container text-center">
      {label}{" "}
      <div className="relative inline-block top-8">
        <input
          type="checkbox"
          className="hidden"
          name={label}
          id={label}
        />
        <label
          className="block overflow-hidden cursor-pointer border border-gray-300 rounded-full"
          htmlFor={label}
        >
          <span className="block w-12 h-8 bg-gray-300 rounded-full"></span>
          <span className="block w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out"></span>
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
