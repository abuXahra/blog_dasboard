import { Link } from "react-router-dom"
import styled from "styled-components"


export const AdvertWrapper = styled.div`
    width: 100%;
    height: ${({postWrapperHeight})=> postWrapperHeight || '100vh' };
    padding: 40px;
    background-color: #80808026;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 30px;
`


export const AdvertContent = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
    
`


export const AdvertItems = styled.div`
width: 100%;
display: flex;
align-items: center;
gap: 20px;
background-color: white;
border-radius: 10px;
position: relative;



`



export const AdvertImage = styled.div`
    width: 20%;
    height: 100px;
    background-image: url(${({bg})=>bg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
    background-color: #00032a;
`

export const AdvertText = styled.div`
    width: 80%;
    display: flex;
    /* flex-direction: column; */
    gap: 10px;
    height: 100%;
    justify-content:space-between;
    align-items: center;
    font-size: 14px;
    padding: 20px;
    color: grey;


    p{

        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

 
@media (max-width: 768px) {
  flex-direction: column;
  align-items: start;
    }

`

export const PostLinks = styled(Link)`
background-color: grey;
color: white;
font-size: 12px;
padding: 5px;
border-radius: 5px;
text-decoration: none;
`


export const PostIconStyled = styled.div`
 display: flex; 
`
export const EditStyled = styled.div`
color: grey;
display: flex;
font-size: 10px;
`

export const EditIconStyled = styled.div`
color: gray;
display: flex;
`
export const EditTitledStyled = styled.div`
color: gray;
display: flex;
margin-left: 10px;
`

export const DateStyled = styled.div`
color: gray;
display: flex;
font-size: 10px;
padding-left: 20px;
`
export const DateIconStyled = styled.div`
color: gray;
display: flex;
`
export const DateTitledStyled = styled.div`
color: gray;
display: flex;
margin-left: 10px;
`
export const PostLink = styled(Link)`
    text-decoration: none;
    font-size:  ${({ linkFontSize }) => linkFontSize || "13px"}  ;
    color: ${({ linkColor }) => linkColor || "blue"} ;
    display: ${({ dsp }) => dsp || "flex"};
`


export const PostTitleStyled = styled.div`
    font-size: ${({ fnt }) => fnt || "12px"};
    font-weight: bold;
    /* margin: 10px 0; */
    color: #010117;
    line-height:  ${({ lingHeight }) => lingHeight || "20px"}  ;
    cursor: pointer;

    &:hover{
        color: #99b899;
    }
`


export const AdvertSpan = styled.div`
    display:flex;
    gap: 5px;
`





export const AdvertHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`


export const PostFormattingWrapper = styled.div`
    width: auto;
    display: flex;
    gap: 20px;
    align-items: center;
    /* position: absolute;
    right: -200px;
    bottom: 0px; */
`

export const PostFormattingItem = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    cursor: pointer;
`


export const PostFormattingIcon = styled.div`
    display: flex;
    color: ${({iconColor})=>iconColor};
    font-size: 12px;
`

export const PostFormattingText = styled.div`
    font-size: 12px;
`

export const PictureWrapper = styled.div`
    background-color: #80808036;
    padding: 10px;
    border-radius: 5px;
    label{
        span{
            color:gray;
            display: flex;
        gap: 10px;
        align-items: center;
        font-size: 12px;
        }
    }
`