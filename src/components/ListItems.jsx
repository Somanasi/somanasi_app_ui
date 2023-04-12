import React from 'react'
import { uuid } from "uuidv4";
import { useDispatchAppState } from '../store/ApplicationContext'

const ListItems = ({children}) => {
  const toggle = useDispatchAppState();
  return (
    <li onClick={ () => toggle({type: 'TOGGLE_MOBILE_VIEW'}) } key={uuid()}>
        {children}
    </li>
  )
}

export default ListItems