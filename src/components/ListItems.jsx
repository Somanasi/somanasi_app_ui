import React from 'react'

const ListItems = ({toggle, visible, children}) => {
  return (
    <li onClick={ () => toggle({type: 'TOGGLE_MOBILE_VIEW'}) }>
        {children}
    </li>
  )
}

export default ListItems