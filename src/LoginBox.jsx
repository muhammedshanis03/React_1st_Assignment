import React from 'react';
import './LoginBox.css'
import InputField from './InputField';
import Button from './Button'

function LoginBox() {
  return (
    <div className='box'>
    <InputField label={'Full Name'} type={'text'}/>
    <InputField label={'Email'} type={'email'}/>

    <InputField label={'Number'} type={'number'}/>

    <InputField label={'Experience'} type={'number'}/>

    <InputField label={'Country'} type={'text'}/>

<Button/>


    </div>
  );
}

export default LoginBox;
