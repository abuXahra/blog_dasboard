import { styled } from "styled-components";


export const ButtonWrapper = styled.button`
    padding: ${({ btnPd }) => btnPd || "10px"} ;
    background-color: ${({ btnColor }) => btnColor || "red"};
    color: ${({ btnTxtClr }) => btnTxtClr || "white"};
    border: ${({ btnBorder }) => btnBorder || "none"};
    cursor: pointer;
`