import styled from "styled-components";

export const AddAdsPostWrapper = styled.div`
    width: 100%;
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

export const AddAdsPostForm = styled.form`
width: 100%;
display: flex;
flex-direction: column;
gap: 10px;

&:focus{
    outline: none;
}



`

export const NameAndFileInput = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
gap: 20px;
    
input{
border-radius: 2px;
width: ${({inputWidth})=> inputWidth || '80%'};
padding: 10px;
border: none;
background-color: #80808036;


&:focus{
    outline: none;
}
}
label{
    width: 20%;
    background-color: #80808036; 
    border-radius: 2px;
    padding: 10px;
    color: grey;
    span{
        font-size: 13px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap:5px;

        p{
            font-size: 10px;
        }
    }
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


export const AddAdsPostCat = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
padding: 10px 5px;
color: grey;
background-color: #80808036;
`


export const AddAdsCatOptions = styled.div`
width: 100%;
display: flex;
align-items: center;
gap: 20px;

input{
    width: 20px;
    height: 20px;
}

label{
    text-transform: uppercase;
    span{
        color: #80808036;
        p{
            color: gray;
        }
    }
}
`


export const AddAdsCatOptionsWrapper = styled.div`
 width: 100%;
 display: flex;
 flex-wrap: wrap;
 gap: 20px;

 @media (max-width:786px) {
    flex-direction: column;
 }
`


export const Select = styled.select`

    border-radius: 2px;
    width: 100%;
    padding: 10px;
    border: none;
    background-color: #80808036;

    &:focus{
        outline: none;
    }
`


export const AdsImage = styled.div`
    width: 100%;

    img{
        width: 100%;
    }
`


export const ErrorMessage = styled.span`
    width: 100%;
    display: flex;
    justify-content: start;
    font-size: 12px;
    color: red;
`