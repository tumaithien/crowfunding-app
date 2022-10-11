import React from "react";
import { useDropdown } from "./dropdown-context";

const Select = ({ placeholder = "", className = "" }) => {
  const { show, toggle } = useDropdown();
  return (
    <div
      className={`flex items-center justify-between py-4 px-6 bg-white border border-strock text-text1 rounded-xl cursor-pointer font-medium ${className}`}
      onClick={toggle}
    >
      <span className="capitalize">{placeholder}</span>
      <span>
        {show ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </span>
    </div>
  );
};

export default Select;
