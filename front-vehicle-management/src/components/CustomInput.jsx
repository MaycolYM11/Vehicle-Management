import React from 'react'

const CustomInput = ({type,placeholder,onChange,value}) => {
    
    const handleChange = (event) => {
        onChange(event.target.value);
      };

  return React.createElement('input', {
        type: type || 'text',
        placeholder: placeholder || '',
        value: value,
        onChange: handleChange,
        style: {
          padding: '10px',
          border: '2px solid #black',
          borderRadius: '4px',
        }
      });
  
}

export default CustomInput