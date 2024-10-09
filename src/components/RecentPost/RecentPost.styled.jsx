import styled from "styled-components"


export const PostItems = styled.div`
        display: flex;
        gap: 10px;
`

export const PostImage = styled.div`
    width: 100px;
    height: 50px;
    border-radius: 5px;
    background-image: url(${({px})=> px});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    @media (max-width: 768px) {
        width: 100px;
        height: 60px;
    }
    `

export const PostContent = styled.div`
       display: flex;
       flex-direction: column;
       gap: 3px;
       justify-content: center;

       
    @media (max-width: 786px) {
        gap: 10px;
    }
`


export const PostTitle = styled.div`
    font-weight: bold;
    font-size: 12px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-transform: capitalize;

    @media (max-width: 786px) {
        font-size: 13px;
    }
`


export const PostMetaTags = styled.div`
    display: flex;
    gap: 10px;
`

export const PostMetaTagsItem = styled.div`
    display: flex;
    gap: 5px;
    color: #808080c4;
    font-size: 10px;

    span{
        display: flex;
    }
`