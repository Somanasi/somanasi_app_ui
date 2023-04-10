import React from 'react'

const ListItems = ({toggle, visible, children}) => {
  return (
    <li onClick={ () => toggle(!visible) }>
        {children}
    </li>
  )
}

export default ListItems