import React from 'react'

const InputWithLabel = ({name, type='text', id, placeholder, children}) => {
  return (
    <div className='form-group'>
        <label htmlFor={id}>{children}</label>
        <input type={type} name={name} id={id} placeholder={placeholder}/>
    </div>
  )
}

export default InputWithLabel