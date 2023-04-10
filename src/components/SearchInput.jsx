import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = ({ size = 50 }) => {
  return (
    <div className="form-group">
      <label htmlFor="search"></label>
      <input type="text" name="searchText" id="search" />
      <span>
        <FaSearch size={size} />
      </span>
    </div>
  );
};

export default SearchInput;
