
import styled from "styled-components";

export const AddCategoryWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 40px 0;
`


export const AddCategoryContent = styled.form`
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-left: auto;
    margin-right: auto;

    
input{
    border-radius: 2px;
    padding: 10px;
    border: none;
    background-color: #80808036;
}

input:nth-child(2){
    height: 40px;
    width: 40px;
    border-radius: 100%;
}
    `