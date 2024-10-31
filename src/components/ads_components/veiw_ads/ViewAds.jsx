

import React, { useEffect, useState } from 'react'
import Button from '../../clicks/button/Button'
import { ViewAdsPostForm, ViewAdsPostWrapper, AdsImage, ErrorMessage, NameAndFileInput, PostPicture, Select, ViewData } from './ViewAds.style';
import { AiFillPicture } from 'react-icons/ai';
import Overlay from '../../overlay/Overlay';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loader from '../../loader/Loader';
import { Circles } from 'react-loader-spinner';
import ButtonLoader from '../../clicks/button/button_loader/ButtonLoader';
import { MdDelete } from 'react-icons/md';



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



export default function ViewAds({setCloseOverlay, closeOverlayOnClick, overlayButtonClick, advertId, alternatFunc }) {

  const navigate = useNavigate();
  const [ads, setAds] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  
  useEffect(()=>{
    const fetchAd = async ()=>{
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/adverts/${advertId}`)
            console.log(res.data);
            setAds(res.data);
        } catch (error) {
            console.log(error )
        }
      }

      fetchAd();
  }, [])



  return (
    <ViewAdsPostWrapper>
        <ViewAdsPostForm>
    <Overlay
        contentHight={"auto"}
        contentWidth={"50%"}
        btnText1={isLoading? <ButtonLoader text={'Updating'}/>  : 'Update Ads'}
        btnText2={'Delete'}
        overlayButtonClick={overlayButtonClick}
        closeOverlayOnClick={closeOverlayOnClick} 
        alternatFunc={alternatFunc}
        jc={'flex-start'}
        
    >

    <h1>{ads.title}</h1>
    <AdsImage><img src={`${process.env.REACT_APP_URL}/images/${ads.photo}`} alt="" srcset="" /></AdsImage>
    <ViewData>
        <span><b>Advertise Placement</b></span>
        <span>{ads.adType}</span>
    </ViewData>

    <ViewData>
        <span><b>Add Web Address</b></span>
        <span>{ads.adsUrl}</span>
    </ViewData>

    <ViewData>
        <span><b>Ad Started Date:</b></span>
        <span>{ads.createdAtDate}</span>
    </ViewData>
     

    <ViewData>
        <span><b>Ad Expiration Date:</b></span>
        <span>{ads.expirationDate}</span>
    </ViewData>
  
    
 
</Overlay>
</ViewAdsPostForm>
</ViewAdsPostWrapper>
  )
}
