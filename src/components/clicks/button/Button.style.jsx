import { styled } from "styled-components";


export const ButtonWrapper = styled.button`
    display: ${({btnDisplay}) => btnDisplay || 'flex'};
    gap: 5px;
    padding: ${({ btnPd }) => btnPd || "10px"} ;
    background-color: ${({ btnColor }) => btnColor || "red"};
    color: ${({ btnTxtClr }) => btnTxtClr || "white"};
    border: ${({ btnBorder }) => btnBorder || "none"};
    border-radius: 5px;
    cursor: pointer;
`