import React from 'react'
import { GoChevronDown, GoChevronUp} from 'react-icons/go'
import { adminState, adminStateDispatcher } from '../adminStore'


const LinkPackages = ({link}) => {

  const adminGlobalState = adminState();

  return (
    <>  
        <span className="icon">{link.icon}</span>
        <span className="caption">{link.title}</span>
        <span>
          { showSubLinks ? <GoChevronDown size={20} /> : <GoChevronUp size={20} /> }
        </span>
    </>
  )
}

export default LinkPackages