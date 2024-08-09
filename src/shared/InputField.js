import React from 'react'

const InputField = ({id,value,handleChange}) => {
  return (
    <div>
        <input 
        type='text'
        id={id}
        value={value}
        style={{width:'80px'}}
        onChange={(e) => handleChange(e)}
        />
    </div>
  )
}

export default InputField