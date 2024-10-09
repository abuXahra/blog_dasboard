
import styled from "styled-components";


export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: ${({InputWidth})=> InputWidth || "100%"};
    gap: 5px;
    position: relative;
`

export const InputLabel = styled.label`
    color: grey;
    font-size: 12px;
    display: flex;
    align-items: center;    
`

export const InputStyle = styled.input`
    border: 1px solid ${({bdColor})=> bdColor || 'white'}; 
    border-radius: 10px;
    padding: ${({inputPadding})=>inputPadding || '15px'};
    background-color: transparent;
    color: ${({txtColor})=> txtColor || "white"};

    width: 100%;

    &:focus {
    outline: none;

  }
`

export const InputError = styled.span`
    color: red;
    font-size: 12px;
`


export const InputIcon = styled.div`
    position: absolute;
    color: white;
    top: 11px;
    right: 8px;

    &:hover{
        scale: 1.2;
    }
`