import styled from "styled-components";

export const SidebarItemContainer = styled.div`
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    background-color: ${({bg}) => bg || ''};
    display: flex;
    gap: 10px;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    
    span img{
        height: 18px;
        width: 18px;
    }

    &:hover{
        background-color: #6161f9c9;
    }
`