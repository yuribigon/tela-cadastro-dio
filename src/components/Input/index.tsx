import React from 'react';
import { Controller } from "react-hook-form";
import { IconContainer, InputContainer, InputText } from './styles'
import { IInput } from './types';

const Input = ({leftIcon, name, control, ...rest}: IInput) => {
  return (
    <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        <Controller
        name={name}
        control={control}
        render={({ field }) =>  <InputText {...field} {...rest} />}
        />
        {/* <InputText {...rest} /> */}
    </InputContainer>
  )
}
 export { Input };