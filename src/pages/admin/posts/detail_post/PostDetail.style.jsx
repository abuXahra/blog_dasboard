import { Link } from "react-router-dom";
import styled from "styled-components";


export const PostDetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 40px;
`

export const PostImageContainer = styled.div`
    width: 100%;
    height: 400px;
    background-image: url(${({bgUrl}) => bgUrl});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
  
`

export const PostDesc = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    line-height: 25px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`


export const PostCat = styled.div`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 5px;
`


export const PostComments = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`



export const PostCatLink = styled(Link)`
    padding: 10px;
    background-color: #111112;
    color: white;
    font-size: 12px;
    text-decoration: none;
`


export const PostAuthor = styled.div`
    display: flex;
    gap: 5px;
`




export const RecentComment = styled.div`
width: 100%;
gap: 20px;
display: flex;
font-size:13px;
color: grey;
padding-bottom: 20px;
margin-bottom: 30px;
border-bottom: 1px solid #C5C5C5;
position: relative;
background-color: #c5c5c52a;
border-radius: 10px;
padding: 10px;
`

export const RecentPostImg = styled.div`
    width: 100px;
    img{
        width: 100%;
   
         }     
        `


export const RecentPostContentWrapper = styled.div`
display: flex;
width: 100%;
flex-direction: column;
gap: 10px;
`


export const RecentCommentAuthorandDate = styled.div`
width: 100%;
display: flex;
`

export const RecentCommentContentAuthor = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 10px;

    span{
        display: flex; 
        width: auto; 
        gap: 5px;
    }

    h3{
        color: black
    }

`


export const RecentCommentReply = styled.div`
    span{
        display: flex;
    gap: 10px; 
    cursor: pointer;
    }
`


export const RecentCommentImg = styled.div`
    background-image: url(${({bgUrl}) => bgUrl});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
    width: 10%;
    height: 70px;
    img{    
        border-radius: 10px;
    }

    @media (max-width: 786px) {
        width: 20%;
    }
`



export const CommentSpacing = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`




export const RecentCommentContents = styled.div`
    width: 100%;
    margin-top: 20px;
    line-height: 20px;
`




export const PostFormattingWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content:  ${({jtcnt}) => jtcnt || "center"};
    gap: 20px;
    align-items: ${({alitms}) => alitms || "center"};
`



// export const CommentFormattingWrapper = styled.div`
//     width: 100%;
//     display: flex;
//     justify-content:  ${({jtcnt}) => jtcnt || "center"};
//     gap: 20px;
//     align-items: ${({alitms}) => alitms || "center"};
// `



export const SingRecentPost = styled.div`
width: 100%;
display: flex;
gap: 20px;

@media (max-width: 786px) {
       flex-direction: column;
    }

`

export const RecentPosts = styled.div`
width: 33%;
height: auto;
cursor: pointer;
display: ${({ dsp }) => dsp || "block"};
line-height: 20px;

p{
    font-size: 13px
}

@media (max-width: 786px) {
        width: 100%;
    }
`

export const MarginTop = styled.div`
    height: 10px;
`

export const RecentPostsContents = styled.div`
    width: 100%;
    height: 200px;
    display:flex;
    flex-direction: column;
    position: relative;
    gap: 20px;
    background-image: url(${({bgUrl}) => bgUrl});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px;
`


export const RecentPostCat = styled.div`
    width: 100px;
    position: absolute;
    bottom: 9px;
    font-size: 12px;

`
