import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchInput = ({size = 50}) => {
  return (
    <div className='form-group'>
        <label htmlFor="search"></label>
        <input type="text" name='searchText' id='search'/>
        <FaSearch size={size} />
    </div>
  )
}

export default SearchInput