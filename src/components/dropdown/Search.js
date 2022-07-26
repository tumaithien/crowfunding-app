import React from "react";

const Search = ({ placeholder, ...props }) => {
  return (
    <div className="p-2 sticky top-0 bg-white">
      <input
        type="text"
        placeholder={placeholder}
        className="p-4 outline-none w-full border border-gray-200 rounded"
        {...props}
      />
    </div>
  );
};

export default Search;
