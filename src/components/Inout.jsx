import React from 'react'

const Inout = ({name, type='text', id, children}) => {
  return (
    <div className='form-group'>
        <label htmlFor={id}>{children}</label>
        <input type={type} name={name} id={id} />
    </div>
  )
}

export default Inout