import styled from "styled-components";

export const EditPostWrapper = styled.div`
    width: 90%;
    height: auto;
    padding: 40px 0;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    flex-direction:column;
    gap: 20px;

    img{
        width: 300px;
    }
`

export const DeletCat = styled.div`
display: flex;
gap: 10px;
width: 100%;
flex-wrap: wrap;


span{
    display: flex;
    gap: 5px;
    background-color: red;
    color: white;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
}



@media (max-width: 786px) {
    flex-wrap: wrap;
    span{ 
        width: 30%;
    }
}
`

export const EditPostForm = styled.form`
width: 100%;
display: flex;
flex-direction: column;
gap: 10px;

&:focus{
    outline: none;
}



`

export const NameAndFileInput = styled.div`
display: flex;
justify-content: space-between;
gap: 20px;
    
input{
border-radius: 2px;
width: 90%;
padding: 10px;
border: none;
background-color: #80808036;


&:focus{
    outline: none;
}
}
label{
    background-color: #80808036; 
    border-radius: 2px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    /* flex: 1; */
    color: grey;
}
`

export const TextAreaStyled = styled.div`
width: 100%;
border-radius: 2px;
padding: 10px;
border: none;
background-color: #80808036;
height: auto;
`

export const PostPicture = styled.input`
display: none;
background-color: #80808036;
`


export const EditPostCat = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
padding: 10px 5px;
color: grey;
background-color: #80808036;
`


export const EditCatOptions = styled.div`
width: 100%;
display: flex;
gap: 20px;

input{
    width: 20px;
    height: 20px;
}

label{
    text-transform: uppercase;
}
`


export const EditCatOptionsWrapper = styled.div`
width: 100%;
 display: flex;
 gap: 20px;

 @media (max-width:786px) {
    flex-direction: column;
 }
`