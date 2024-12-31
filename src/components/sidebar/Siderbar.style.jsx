import styled from "styled-components";

export const SidebarWrapper  = styled.div`
    height: 100vh;
    width: ${({sidebarWidth})=> sidebarWidth || "20%"};
    background-color: #00032a;
    color: white;
    position: fixed;
    display: ${({deskDisplaySidebar})=> deskDisplaySidebar || 'flex'};
    flex-direction: column;
  

    @media (max-width: 768px) {
        width: 80%;
        position: fixed;
        z-index: 1999;
        display: ${({displaySidebar})=> displaySidebar || 'none'};
    }
`


export const SidebarHeader = styled.div`
padding: 20px;
border-bottom: 2px solid white;
display: flex;
position: relation;
    img{
        height: 50px;
        cursor: pointer;
    }
`

export const HamburgerWrapperi = styled.span`
    position: absolute;
    font-size: 25px;
    right: 10px;
    top: 20px;
    cursor: pointer;
    display: flex;
    
    @media (max-width: 768px) {
        display: none;
    }
`


export const HamburgerWrapper = styled.span`
    position: absolute;
    font-size: 25px;
    right: 20px;
    top: 20px;
    cursor: pointer;
    display: none;
    
    @media (max-width: 768px) {
        display: ${({mobileIcon})=> mobileIcon || "flex" };
    }
`


export const SidebarBody = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`


export const SidebarContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80vh;
`


export const SidebarItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`



export const SignOutWrapper = styled.div`
        display: flex;
        gap: 10px;
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        background-color: ${({bg}) => bg || ''};
        display: flex;
        align-items: center;
        cursor: pointer;
        font-size: small;
    
        span img{
        height: 18px;
        width: 18px;
    }

    `