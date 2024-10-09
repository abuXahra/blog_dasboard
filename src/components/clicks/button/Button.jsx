import React from 'react';
import { ButtonWrapper } from './Button.style';
import { Link } from 'react-router-dom';

const Button = ({ btnColor, btnText, btnTxtClr, btnBorder, btnPd }) => {

    return (
        <ButtonWrapper type='submit' btnColor={btnColor} btnTxtClr={btnTxtClr} btnBorder={btnBorder} btnPd={btnPd}>
            {btnText}
        </ButtonWrapper>
    )
}

export default Button;
