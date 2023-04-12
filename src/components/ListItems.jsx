import React from 'react'
import { v4 as uuidv4} from 'uuid';
import { useDispatchAppState } from '../store/ApplicationContext'

const ListItems = ({children}) => {
  const toggle = useDispatchAppState();
  return (
    <li onClick={ () => toggle({type: 'TOGGLE_MOBILE_VIEW'}) } key={uuidv4()}>
        {children}
    </li>
  )
}

export default ListItems