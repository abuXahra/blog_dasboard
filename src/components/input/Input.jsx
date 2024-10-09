


import { FiSearch } from 'react-icons/fi'
import { InputError, InputIcon, InputLabel, InputStyle, InputWrapper } from './Input.style'

export default function Input({Icon, title, value, txtColor, error, bdColor, onChange, placeholder, requiredSymbol, InputWidth, type, maxLength, label, inputPadding}) {

  return (
                <InputWrapper InputWidth={InputWidth}>
                    <InputLabel htmlFor="name">{label}{requiredSymbol}</InputLabel>
                    <InputStyle
                    inputPadding={inputPadding} 
                        type={type} 
                        placeholder={placeholder} 
                        value={value}
                        onChange={onChange}
                        maxLength={maxLength}
                        bdColor={bdColor}
                        txtColor={txtColor}
                    />
                    <InputIcon>{Icon}</InputIcon>
                    {error? <InputError>{title} is required</InputError> : '' }
            </InputWrapper>
        )
    }




    
    