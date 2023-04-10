import React from "react";
import { FaSearch } from "react-icons/fa";
import Button from "./Button";

const SearchInput = ({ size = 50 }) => {
  return (
    <div className="form-group">
      <label htmlFor="search"></label>
      <input type="text" name="searchText" id="search" />
      <Button>
        <FaSearch size={size} />
      </Button>
    </div>
  );
};

export default SearchInput;
