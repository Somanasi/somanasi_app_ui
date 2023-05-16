import React from "react";
import { FaSearch } from "react-icons/fa";
import Button from "./Button";

const SearchInput = ({ size = 50, placeholder="placeholder text" }) => {
  return (
    <div className="form-group">
      <label htmlFor="search"></label>
      <input type="search" name="searchText" id="search" placeholder={placeholder} />
      <Button type="sumbit">
        <FaSearch size={size} />
      </Button>
    </div>
  );
};

export default SearchInput;
