import React from 'react'

const InputWithLabel = ({name, type='text', id, placeholder, required=false, error={},children}) => {
  return (
    <div className='form-group'>
        <label htmlFor={id}>{children}</label>
        <input type={type} name={name} id={id} placeholder={placeholder} required={required}/>
        {error?.name && <span className="error">{error.name}</span>}
    </div>
  )
}

export default InputWithLabel