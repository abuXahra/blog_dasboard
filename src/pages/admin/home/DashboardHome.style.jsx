

import styled from "styled-components";


export const Content = styled.div`
    width: 100%;
    display: flex;
    height: auto;
    position: relative;
`

export const ContentSidebar = styled.div`
    position: fixed;
`

export const MainContent = styled.div`
    width: 80%;
    height: auto;
    position: absolute;
    top: 0px;
    right: 0px;
    

    @media (max-width: 768px) {
        width:  100%;
    }
`



export const HomeWrapper = styled.div`
   height: 1000px;
   width: 100%;
   background-color: gray;
`