import React from 'react'


const LinkPackages = ({link}) => {
  return (
    <>  
        <span className="icon">{link.icon}</span>
        <span className="caption">{link.title}</span>
    </>
  )
}

export default LinkPackages