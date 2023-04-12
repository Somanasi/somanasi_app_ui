import React from 'react'

const ListItems = ({children}) => {
  return (
    <li onClick={ () => toggle({type: 'TOGGLE_MOBILE_VIEW'}) }>
        {children}
    </li>
  )
}

export default ListItems