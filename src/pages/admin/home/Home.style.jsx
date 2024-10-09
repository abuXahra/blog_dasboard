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
   height: auto;
   width: 100%;
   background-color: #80808018;
   padding: 20px;
   display: flex;
   flex-direction: column;
   gap: 20px;
`

export const GreetingWrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
/* box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; */
/* border-radius: 20px; */
/* padding: 20px; */
`

export const GreetingCard = styled.div`
    display: flex;
    flex-direction: column;
`


export const DateTimeWrapper = styled.div`
    display: flex;
    gap: 10px;
    font-size: 12px;
`


export const TopCardContent = styled.div`
    width: 100%;
    display: flex;
    gap: 40px;
    justify-content: space-between;
`

export const UserWrapper= styled.div`
    width: 30%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; 
    border-radius: 15px;
    padding: 20px;
    /* background-color: white; */
    background-color: #00032a;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 40px;
    position: relative;
`

export const AuthorContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* color: #202020; */
    gap: 5px;
    p{
        font-size: 14px;
    
    }
`

export const TotalPostContainer = styled.div`
    display: flex;
    gap: 20px;
    font-size: 12px;

    span{
        display: flex;
        gap: 5px;
        align-items: flex-end;
    }

    p{
        font-weight: bold;
        font-size: 20px;
    }
`

export const ProfileDp = styled.div`
    position: absolute;
    top:-80px;
    right: -105px;

    img{
        height: 200px;
    }
`

export const TopCardContentWrapper= styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    gap: 20px;
`

export const TopCard = styled.div`
    width: 33%;
    height: 150px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; 
    border-radius: 15px;
    background-color:${({bg})=>bg};
    color: white;
    padding: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;


`


export const TopCardIcon = styled.div`
        position: absolute;
        top:-10px;
        left: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        background-color: #00032a;
        height: 45px;
        width: 45px;
        color: white;
        border-radius: 5px;
        img{
            height: 30px;
    }
`

export const Container = styled.div`
    width: 100%;
    display: flex;
    gap: 20px;

    
    @media (max-width: 768px) {
        flex-direction: column;
    }

`

export const ChartContent = styled.div`
    width: 50%;
    display: flex;
    border-radius: 15px;
    background-color: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; 
   
    @media (max-width: 768px) {
        width: 100%;
    }
`


export const UserContainer  = styled.div`
    width: 70%;
    display: flex;
    border-radius: 15px;
    background-color: white;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; 
    height: 400px;
    @media (max-width: 768px) {
        width: 100%;
    }
`

export const RecentPostWrapper  = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 15px;
    background-color: white;
    padding: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; 
    height: 400px;
    @media (max-width: 768px) {
        width: 100%;
    }
`


export const SpaceBtnContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const PostItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
