import React from "react";
import { FaSearch } from "react-icons/fa";
import Button from "./Button";

const SearchInput = ({ size = 50, placeholder="placeholder text", value, valueChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="search"></label>
      <input type="search" name="searchText" id="search" placeholder={placeholder} value={value} onChange={valueChange}/>
      <Button type="submit">
        <FaSearch size={size} />
      </Button>
    </div>
  );
};

export default SearchInput;
