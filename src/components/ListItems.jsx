import React from 'react'
import { useDispatchAppState } from '../store/ApplicationContext'

const ListItems = ({children}) => {
  const toggle = useDispatchAppState();
  return (
    <li onClick={ () => toggle({type: 'TOGGLE_MOBILE_VIEW'}) }>
        {children}
    </li>
  )
}

export default ListItems