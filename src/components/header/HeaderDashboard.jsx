
import React, { useState } from 'react'
import { HamburgerWrapperHeader, HamburgerWrapperHeaderi, HeaderContent, HeadWrapper, IconWrapper, NotificationWrapper, ProfileWrapper, SearchContainer } from './Header.style'
import Input from '../input/Input'
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { FiMenu, FiSearch, FiUsers } from "react-icons/fi";
import {FaEnvelope} from 'react-icons/fa'
import ProfilePicture from '../../images/professional_passport.png'
import { HamburgerWrapper } from '../sidebar/Siderbar.style';
import { MdOutlineMenuOpen } from 'react-icons/md';


export default function HeaderDashboard({showSidebar, showHbg, shoDesktopSidebar}) {

  const [searchValue, setSearchValue] =  useState('');
  const handleSearchChange = (e) =>{
      setSearchValue(e.target.value)
  }



  return (
    <HeadWrapper>
      <HeaderContent mwd='60%'>
        <HamburgerWrapperHeaderi onClick={shoDesktopSidebar} showHbg={showHbg} ><MdOutlineMenuOpen /></HamburgerWrapperHeaderi>
        <HamburgerWrapperHeader onClick={showSidebar} ><FiMenu /></HamburgerWrapperHeader>
        <Input
          title
          placeholder={'Search'}
          value={searchValue}
          error={false}
          onChange={handleSearchChange}
          requiredSymbol=""
          InputWidth="100%"
          type={'text'}
          txtColor={'grey'}
          inputPadding=" 6px 10px"
          Icon={<FiSearch/>}
          // bdColor="#555555ac"
        />
      </HeaderContent>
      <HeaderContent wd={'60%'} jc={"flex-end"} mwd={'40%'}>
       {/* user icon */}
       <IconWrapper>
          <FiUsers/>
       </IconWrapper>

         {/* notification icon */}
      <IconWrapper>
          <FaEnvelope/>
          <NotificationWrapper>0</NotificationWrapper>
       </IconWrapper>


       {/* notification icon */}
       <IconWrapper>
          <IoMdNotificationsOutline/>
          <NotificationWrapper>0</NotificationWrapper>
       </IconWrapper>

       {/* setting icon */}
       <IconWrapper>
          <CiSettings/>
       </IconWrapper>

      {/* Profile picture */}
       <ProfileWrapper>
          <img src={ProfilePicture} alt="" srcset="" />
       </ProfileWrapper>
      </HeaderContent>

     
    </HeadWrapper>
  )
}
