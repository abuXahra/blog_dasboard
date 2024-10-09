import { Link } from 'react-router-dom'
import styled from 'styled-components'


export const ProfileWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;   
    padding: 40px 0;
      position: relative;     

`

export const ProfileContent = styled.div`
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    gap: 40px;
 
    @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`
export const ProfilePost = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 20px;
 
    @media (max-width: 768px) {
    width: 100%;
  }
`

export const ProfileData = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
   
        background-color: #0000ff14;
        padding: 20px;

        div{
          color: green
        }
         
    @media (max-width: 768px) {
    width: 100%;
    height: auto;
    position: relative;
  }
    `

export const ProfilePicture = styled.div`
img{
    border-radius: 50%;
    height: 100px;
    width: 100px
}
    
`

export const ProfileCredentials = styled.form`
width: 100%;
display: flex;
flex-direction: column;
gap: 20px;
padding: 20px 0;

span{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 10px;
  
    align-items: center;

    div{
      padding:16px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 20px;
      gap: 5px;
      cursor: pointer;
    }

    div:nth-child(2){
      background-color: red;
      color: white;
    }

    div:nth-child(3){
      background-color: black;
      color: white;
    }
}
`




export const CategorySpan = styled.div`
display:flex;
gap: 5px;
`


export const PostLinks = styled(Link)`
background-color: grey;
color: white;
font-size: 12px;
padding: 5px;
border-radius: 5px;
text-decoration: none;
`


export const CatContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`


export const CatStyled = styled.div`
  display: flex;
  justify-content: space-between;

  span{
    color: black;
    cursor: pointer;
  }

  div>span:nth-child(1){
    margin-right: 20px;
    color: ${({ edCl }) => edCl || ""};
  }

  div>span:nth-child(2){
    color: red;
  }
`
export const VidDiv = styled.div`
width: 100%;
display: flex;
gap: 10px;

div{
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  padding: 10px;
  cursor: pointer;
}
`

