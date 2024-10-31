


import React, { useEffect, useState } from 'react'
import Button from '../../clicks/button/Button'
import { EditUserPostForm, EditUserPostWrapper, AdsImage, ErrorMessage, InputWrapper, PostPicture, Select } from './EditUser.style';
import { AiFillPicture } from 'react-icons/ai';
import Overlay from '../../overlay/Overlay';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loader from '../../loader/Loader';
import { Circles } from 'react-loader-spinner';
import ButtonLoader from '../../clicks/button/button_loader/ButtonLoader';







export default function EditUser({setCloseOverlay, closeOverlayOnClick, userId}) {

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword]= useState('');
  const [role, setRole] = useState('');
  const [facebookUrl, setFacebookUrl] = useState('');
  const [twitterUrl, setTwitterUrl] = useState('');
  const [instagramUrl, setInstagramUrl] = useState('');
  const [linkedInUrl, setLinkedInUrl] = useState('');
  let [photo, setPhoto] = useState('');
  const [file, setFile] = useState('')
  


  const [usernameError, setUsernameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false) 
  const [roleError, setRoleError] = useState(false)
  const [facebookUrlError, setFacebookUrlError] = useState(false)
  const [twitterUrlError, setTwitterUrlError] = useState(false)
  const [linkedInUrlError, setLinkedInUrlError] = useState(false)
  const [instagramUrlError, setInstagramUrlError] = useState(false)
  const [photoError, setPhotoError] = useState(false)

  const [showPhoto, setShowPhoto] = useState(true);


  
  const [isLoading, setIsLoading] = useState(false);
  

  const roleItems = [
    {
        value: '',
        title: 'Select Role'
    },
    {
        value: 'admin',
        title: 'Admin'
    },
    {
        value: 'sub-admin',
        title: 'Sub-Admin'
    },
    {
        value: 'user',
        title: 'User'
    },
  ]



  const fetchUser = async() => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_URL}/api/users/${userId}`)
        setUsername(res.data.username)
        setEmail(res.data.email);
        setPassword(res.data.password);
        setRole(res.data.role);
        setFacebookUrl(res.data.facebookUrl);
        setTwitterUrl(res.data.twitterUrl);
        setInstagramUrl(res.data.instagramUrl);
        setLinkedInUrl(res.data.linkedInUrl);
        setPhoto(res.data.photo)
        console.log('========================\n',res.data, '\n================================');

    } catch (error) {
        console.log(error);
    }
  }

  useEffect(()=>{
    fetchUser();
  }, [userId])

  

  const handleInputChange = (type, e)=>{
    if (type === 'username') {
        setUsername(e.target.value)
        setUsernameError(false)
    }else if(type === 'email') {
        setEmail(e.target.value)
        setEmailError(false)
    }else if(type === 'password') {
        setPassword(e.target.value)
        setPasswordError(false)
    }else if(type === 'file'){
        setFile(e.target.files[0])
        setShowPhoto(false);
    }else if(type === 'role'){
        setRole(e.target.value)
        setRoleError(false);
    }else if(type === 'facebookUrl'){
        setFacebookUrl(e.target.value)
    }else if(type === 'twitterUrl'){
        setTwitterUrl(e.target.value)
    }else if(type === 'instagramUrl'){
        setInstagramUrl(e.target.value)
    }else if(type === 'linkedInUrl'){
        setLinkedInUrl(e.target.value)
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    if(username === null || username === ''){
        setUsernameError(true)
    }  if(email === null || email === ''){
        setEmailError(true)
    } if(password === null || password === ''){
        setPasswordError(true)
    }  if(role === null || role === ''){
        setRoleError(true)
    }else {

   
    if (file) {
        const data = new FormData()
        const filename = file.name
        data.append('img', filename)
        data.append('file', file)
        photo = filename;

        // img upload
        try {
            const imgUpload = await axios.post(process.env.REACT_APP_URL + '/api/upload', data)
            console.log(imgUpload.data)
            
        } catch (err) {
            console.log(err)
        }
    }
    setIsLoading(true)
    // User creation
    try {
        const res = await axios.put(`${process.env.REACT_APP_URL}/api/users/${userId}`,
            {  username, email, photo, password, role, facebookUrl, twitterUrl, instagramUrl, linkedInUrl, }, { withCredentials: true })
        navigate(`/users`)
        console.log(res.data)
        setIsLoading(false);
        setCloseOverlay(false);

    } catch (err) {
        console.log(err)
        setIsLoading(false);
    }
}
}

  return (
    <EditUserPostWrapper>
        <EditUserPostForm onSubmit={handleSubmit}>
    <Overlay
        contentHight={"auto"}
        contentWidth={"50%"}
        btnText1={isLoading? <ButtonLoader text={'Updating'}/>  : 'Update'}
        closeOverlayOnClick={closeOverlayOnClick} 
        jc={'flex-start'}
        btnDisplayNo='none'
    >

<h2>Update User</h2>
      {/* Display Image befor posting to db */}
      <AdsImage>
          {showPhoto &&  <img src={`${process.env.REACT_APP_URL}/images/${photo}`} alt="" srcset="" />}
            { (file && (<img src={URL.createObjectURL(file)} alt="" srcset="" />))}
      </AdsImage>
   
<InputWrapper>
    <input type='text' placeHolder={'Username'} value={username} onChange={(e) => handleInputChange('username', e)} />

    <label htmlFor="fileInput"><span><p>Upload Picture</p><AiFillPicture /></span> </label>
    <PostPicture onChange={(e) => handleInputChange('file', e)} type="file" id="fileInput" />
</InputWrapper>
<ErrorMessage>{usernameError && 'Username is required'}</ErrorMessage>
   
<InputWrapper inputWidth='100%'>
    <input type='email' placeHolder={'email'} value={email} onChange={(e) => handleInputChange('email', e)} />
</InputWrapper>
<ErrorMessage>{emailError && 'Email is required'}</ErrorMessage>

   
<InputWrapper inputWidth='100%'>
    <input type='password' placeHolder={'password'} value={password} onChange={(e) => handleInputChange('password', e)} />
</InputWrapper>
<ErrorMessage>{passwordError && 'Url is required'}</ErrorMessage>

   
<InputWrapper inputWidth='100%'>
    <input type='text' placeHolder={'facebookUrl (optional)'} value={facebookUrl} onChange={(e) => handleInputChange('facebookUrl', e)} />
</InputWrapper>


<InputWrapper inputWidth='100%'>
    <input type='text' placeHolder={'twitterUrl (optional)'} value={twitterUrl} onChange={(e) => handleInputChange('twitterUrl', e)} />
</InputWrapper>


<InputWrapper inputWidth='100%'>
    <input type='text' placeHolder={'instagramUrl (optional)'} value={instagramUrl} onChange={(e) => handleInputChange('instagramUrl', e)} />
</InputWrapper>


 
<InputWrapper inputWidth='100%'>
    <input type='text' placeHolder={'linkedIn Url (optional)'} value={linkedInUrl} onChange={(e) => handleInputChange('linkedInUrl', e)} />
</InputWrapper>

   <Select value={role} onChange={(e) => handleInputChange('role', e)}>
       {
        roleItems.map((item, i)=>(
            <option key={i} value={item.value}>{item.title}</option>
        ))
    }
      </Select>
      <ErrorMessage>{photoError && 'Photo is required'}</ErrorMessage>
      <ErrorMessage>{roleError && 'Role is required'}</ErrorMessage>
    


</Overlay>
</EditUserPostForm>
</EditUserPostWrapper>
  )
}
