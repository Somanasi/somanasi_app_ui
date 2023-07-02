import React from 'react'


const LinkPackages = ({link}) => {
  return (
    <>  
        {link.icon}
        <span className="caption">{link.title}</span>
    </>
  )
}

export default LinkPackages