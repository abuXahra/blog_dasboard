
import React, { useState } from 'react'
import { HamburgerWrapper, SidebarBody, SidebarContent, SidebarHeader, SidebarItemsWrapper, SidebarWrapper, SignOutWrapper } from './Siderbar.style'
import logo from '../../images/logo.png'
import { FiHome, FiMenu } from 'react-icons/fi'
import { IoMdClose } from 'react-icons/io'
import SidebarItem from './sidebar_items/SidebarItem'
import { useLocation, useNavigate } from 'react-router-dom'
import { SidebarItemLists } from '../../data/SidebarItemList'
import logout from '../../images/icons/logout.svg'


export default function Siderbar({displayShowSidebar, setDisplayShowSidebar}) {

    const location = useLocation();
    const navigate = useNavigate();


    const hideSidebar = (url) => {
        setDisplayShowSidebar("none");
        navigate(url);
      };
 


  return (
    <SidebarWrapper displaySidebar={displayShowSidebar}>
        <SidebarHeader>
            <img onClick={()=>navigate('/dashboard')} src={logo} alt="" srcset="" />
            <HamburgerWrapper onClick={()=> setDisplayShowSidebar("none")}><IoMdClose /></HamburgerWrapper>  
        </SidebarHeader>
        <SidebarBody>
            <SidebarContent>
                <SidebarItemsWrapper>
                {
                SidebarItemLists && SidebarItemLists.map((item, i)=>(
                         <SidebarItem
                            key={i}
                            bg={location.pathname === item.url &&  '#0058fc' } 
                            icon={item.icon}
                            title={item.tile} 
                            handleClick={()=>hideSidebar(item.url)}
                    />
                ))}
                
                
                </SidebarItemsWrapper>
                <SignOutWrapper>
                <span><img src={logout} alt="" srcset="" /></span>
                <span>Sign Out</span>
                </SignOutWrapper>
            </SidebarContent>
  
        </SidebarBody>
    </SidebarWrapper>
  )
}
