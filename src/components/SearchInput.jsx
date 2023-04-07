import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchInput = () => {
  return (
    <div className='form-group'>
        <label htmlFor="search"></label>
        <input type="text" name='searchText' id='search'/>
        <FaSearch size={50} />

    </div>
  )
}

export default SearchInput