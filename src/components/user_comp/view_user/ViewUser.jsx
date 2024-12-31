


import React, { useEffect, useState } from 'react'
import Button from '../../clicks/button/Button'
import { ViewUserPostForm, ViewUserPostWrapper, AdsImage, ErrorMessage, UserDataWrapper, PostPicture, Select } from './ViewUser.style';
import { AiFillPicture } from 'react-icons/ai';
import Overlay from '../../overlay/Overlay';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loader from '../../loader/Loader';
import { Circles } from 'react-loader-spinner';
import ButtonLoader from '../../clicks/button/button_loader/ButtonLoader';







export default function ViewUser({setCloseOverlay, closeOverlayOnClick, userId, overlayButtonClick, alternatFunc}) {

 
  const [user, setUser]  = useState('')
  let [photo, setPhoto] = useState('');



  const [showPhoto, setShowPhoto] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  


  const fetchUser = async() => {
    setIsLoading(true)
    try {
        const res = await axios.get(`${process.env.REACT_APP_URL}/api/users/${userId}`)
        setUser(res.data)
        setIsLoading(false)
        console.log('========================\n',res.data, '\n================================');

    } catch (error) {
        console.log(error);
        setIsLoading(false)
    }
  }

  useEffect(()=>{
    fetchUser();
  }, [userId])

  


  return (<>
  
  {


  
  isLoading? <Loader/> :
    <ViewUserPostWrapper>
        <ViewUserPostForm>
    <Overlay
        contentHight={"auto"}
        contentWidth={"50%"}
        btnText1={'Update'}
        btnText2={'Delete'}
        overlayButtonClick={overlayButtonClick}
        closeOverlayOnClick={closeOverlayOnClick} 
        alternatFunc={alternatFunc}
        jc={'flex-start'}
        btnDisplayNo='flex'
    >

<h2>Update Information</h2>
      {/* Display Image befor posting to db */}
      <AdsImage>
          <img src={`${process.env.REACT_APP_URL}/images/${user.photo}`} alt="" srcset="" />
      </AdsImage>
   
   <h3>User Data</h3>
        <UserDataWrapper>
            <span><b>{'Username: '}</b></span>
            <div>{user.username}</div>
        </UserDataWrapper>
        
        <UserDataWrapper>
            <span><b>{'Email: '}</b></span>
            <div>{user.email}</div>
        </UserDataWrapper>


        <UserDataWrapper>
            <span><b>{'Role: '}</b></span>
            <div>{user.role}</div>
        </UserDataWrapper>  

<h3>Social Media Handles</h3>
    <UserDataWrapper>
        <span><b>{'Facebook: '}</b></span>
        <div> <a href={user.facebookUrl}>{user.facebookUrl}</a></div>
    </UserDataWrapper>

    <UserDataWrapper>
        <span><b>{'Twitter: '}</b></span>
        <div> <a href={user.twitterUrl}>{user.twitterUrl}</a></div>
    </UserDataWrapper>

    <UserDataWrapper>
        <span><b>{'Instagram: '}</b></span>
        <div>
            <a href={user.instagramUrl}>{user.instagramUrl}</a>
        </div>
    </UserDataWrapper>


    <UserDataWrapper>
        <span><b>{'LinkedIn: '}</b></span>
        <div> <a href={user.linkedInUrl}>{user.linkedInUrl}</a></div>
    </UserDataWrapper>

</Overlay>
</ViewUserPostForm>
</ViewUserPostWrapper>
}
</>
  )
}
