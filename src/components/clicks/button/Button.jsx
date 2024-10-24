import React from 'react';
import { ButtonWrapper } from './Button.style';
import { Link } from 'react-router-dom';

const Button = ({ btnColor, btnText, btnTxtClr, btnBorder, btnPd, btnLeftIcon, btnRightIcon, type, btnOnClick, btnDisplay }) => {

    return (
        <ButtonWrapper btnDisplay={btnDisplay} type={type} onClick={btnOnClick} btnColor={btnColor} btnTxtClr={btnTxtClr} btnBorder={btnBorder} btnPd={btnPd}>
         {btnLeftIcon}
         {btnText}
         {btnRightIcon}
        </ButtonWrapper>
    )
}

export default Button;
