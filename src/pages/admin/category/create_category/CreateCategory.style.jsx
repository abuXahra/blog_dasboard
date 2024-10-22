





import styled from "styled-components";

export const CreateCategoryWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 40px 0;
`


export const CreateCategoryContent = styled.form`
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-left: auto;
    margin-right: auto;

    img{
        width: 300px;
    }
    `


export const InputWrapper =styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    span{
        display: flex;
        gap: 20px;
        align-items: center;
    }
`



export const ColorInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    padding:10px;

    input{
        height: 25px;
        width: 25px;
        border-radius: 100%;
    }
`
