import React from "react";
const SearchBar = () => {
  return (
    <div className="p-4 bg-white shadow-md">
      <input 
        type="text"
        placeholder="Search..." 
        className="w-full p-2 border border-gray-300 rounded-md" 
      />
    </div>
  );
};

export default SearchBar;
