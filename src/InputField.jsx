import React from 'react';

function InputField(props) {
  console.log(props);
  return (
    <div>
      <label htmlFor="">{props.label}</label>
      <input type={props.type} />
    </div>
  );
}

export default InputField;
