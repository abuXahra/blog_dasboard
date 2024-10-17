import { Link } from "react-router-dom"
import styled from "styled-components"


export const CategoryDetailWrapper = styled.div`
    width: 100%;
    height: ${({postWrapperHeight})=> postWrapperHeight || 'auto' };
    padding: 40px;
    background-color: #80808026;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 30px;
`


export const PostContent = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
`


export const CategoryPosts = styled.div`
width: 100%;
display: flex;
align-items: center;
gap: 20px;
background-color: white;
border-radius: 10px;
position: relative;

@media (max-width: 768px) {
  flex-direction: column;
 }
`



export const CategoryPostsImag = styled.div`
    width: 30%;
    height: 230px;
    background-image: url(${({bg})=>bg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;

    @media (max-width: 768px) {
        width: 100%;
 }
`

export const CategoryPostsText = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100%;
    justify-content:center;
    font-size: 14px;
    padding: 20px 0px;
    color: grey;

    p{

        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    @media (max-width: 768px) {
        width: 100%;
        padding: 20px;
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


export const CategorySpan = styled.div`
    display:flex;
    gap: 5px;
`





export const PostHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`


export const PostFormattingWrapper = styled.div`
    width: 400px;
    display: flex;
    gap: 20px;
    align-items: center;
    position: absolute;
    right: -200px;
    bottom: 20px;

    /* post mobile */
@media (max-width: 768px) {
    align-items: start;
    justify-content: flex-start;
    position: relative;
    right: -80px;
 }
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