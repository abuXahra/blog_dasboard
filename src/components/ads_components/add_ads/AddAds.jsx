

import React, { useState } from 'react'
import Button from '../../clicks/button/Button'
import { AddAdsPostForm, AddAdsPostWrapper, AdsImage, ErrorMessage, NameAndFileInput, PostPicture, Select } from './AddAds.style';
import { AiFillPicture } from 'react-icons/ai';
import Overlay from '../../overlay/Overlay';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loader from '../../loader/Loader';
import { Circles } from 'react-loader-spinner';
import ButtonLoader from '../../clicks/button/button_loader/ButtonLoader';



const adTypeItems = [
    {
        title: 'Select Ads Type',
        value: ''
    },
    {
        title: 'Banner',
        value: 'banner'
    },
    {
        title: 'Sidebar',
        value: 'sidebar'
    },
]



export default function AddAds({setCloseOverlay, closeOverlayOnClick}) {

  const navigate = useNavigate();
  let [photo, setPhoto] = useState('');
  const [file, setFile] = useState('')
  const [title, setTitle] = useState('')
  const [adsUrl, setAdsUrl] = useState('')
  const [adType, setAdType] = useState(''); // Default type


  const [titleError, setTitleError] = useState(false)
  const [adTypeError, setAdTypeError] = useState(false)
  const [adsUrlError, setAdsUrlError] = useState(false)
  const [photoError, setPhotoError] = useState(false)

  const [isLoading, setIsLoading] = useState(false);
  
  const handleInputChange = (type, e)=>{
    if (type === 'title') {
        setTitle(e.target.value)
        setTitleError(false)
    }else if(type === 'file'){
        setFile(e.target.files[0])
        setPhotoError(false);
    }else if(type === 'adsUrl'){
        setAdsUrl(e.target.value)
        setAdsUrlError(false);
    }else if(type === 'adType'){
        setAdType(e.target.value)
        setAdTypeError(false)
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    if(title === null || title === ''){
        setTitleError(true)
    }  if(adType === null || adType === ''){
        setAdTypeError(true)
    } if(adsUrl === null || adsUrl === ''){
        setAdsUrlError(true)
    }  if(file === null || file === ''){
        setPhotoError(true)
    }else {

     // const newCategory = {
    //     title,
   //     color,
  // }

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
    // post creation
    try {
        const res = await axios.post(`${process.env.REACT_APP_URL}/api/adverts/create`,
            { title, adType, adsUrl, photo }, { withCredentials: true })
        navigate(`/adverts`)
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
    <AddAdsPostWrapper>
        <AddAdsPostForm onSubmit={handleSubmit}>
    <Overlay
        contentHight={"auto"}
        contentWidth={"50%"}
        btnText1={isLoading? <ButtonLoader text={'Creating'}/>  : 'Create Ads'}
        closeOverlayOnClick={closeOverlayOnClick} 
        jc={'flex-start'}
        btnDisplayNo='none'
    >

<h2>Create Ads</h2>
      {/* Display Image befor posting to db */}
      <AdsImage>
            {file && (<img src={URL.createObjectURL(file)} alt="" srcset="" />)}
      </AdsImage>
   
<NameAndFileInput>
    <input type='text' placeHolder={'Title'} value={title} onChange={(e) => handleInputChange('title', e)} />

    <label htmlFor="fileInput"><span><p>Upload Picture</p><AiFillPicture /></span> </label>
    <PostPicture onChange={(e) => handleInputChange('file', e)} type="file" id="fileInput" />
</NameAndFileInput>

   
<NameAndFileInput inputWidth='100%'>
    <input type='text' placeHolder={'Ads Url'} value={adsUrl} onChange={(e) => handleInputChange('adsUrl', e)} />
</NameAndFileInput>
    <Select value={adType} onChange={(e) => handleInputChange('adType', e)}>
       {
        adTypeItems.map((item, i)=>(
            <option key={i} value={item.value}>{item.title}</option>
        ))
    }
      </Select>
      <ErrorMessage>{titleError && 'Ads title is required'}</ErrorMessage>
      <ErrorMessage>{adTypeError && 'Ads Type is required'}</ErrorMessage>
      <ErrorMessage>{adsUrlError && 'Ads Url is required'}</ErrorMessage>
      <ErrorMessage>{photoError && 'Ads photo is required'}</ErrorMessage>
{/* 
<div><Button btnText={'AddAds'} btnPd={'15px 30px'} /></div> */}
</Overlay>
</AddAdsPostForm>
</AddAdsPostWrapper>
  )
}
