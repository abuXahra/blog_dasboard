import { Link } from "react-router-dom"
import { styled } from "styled-components"

export const PostcardStyled = styled.div`
        display: flex;
        position: relative;
        width: ${({ w }) => w || '100%'};
        height: ${({ h }) => h || ''}; 
        flex-direction: column;
        border-left: ${({ cborder }) => cborder || 'none'} ;
        img{
            width: ${({ imgW }) => imgW || "100%"};
            height: ${({ imgH }) => imgH || "auto"};
        }
`


export const Overlay = styled.div`
  background-image: linear-gradient(180deg, #00000010, #000000ae);
  position: absolute;
  height: 100%;
  width: 100%;  
`


export const PostcardContent = styled.div`
position: absolute;
width: 100%;
bottom: 0;   
padding-left:${({ pl }) => pl || "20px"};
padding-bottom: ${({ pb }) => pb || "20px"};
`


export const Linkstyled = styled(Link)`
width: auto;
`