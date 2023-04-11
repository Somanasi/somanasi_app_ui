import React from 'react'

const InputWithLabel = ({name, type='text', id, children}) => {
  return (
    <div className='form-group'>
        <label htmlFor={id}>{children}</label>
        <input type={type} name={name} id={id} />
    </div>
  )
}

export default InputWithLabel