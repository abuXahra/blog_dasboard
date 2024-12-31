
import React, { useContext, useState } from 'react'
import { HamburgerWrapper, HamburgerWrapperi, SidebarBody, SidebarContent, SidebarHeader, SidebarItemsWrapper, SidebarWrapper, SignOutWrapper } from './Siderbar.style'
import logo from '../../images/logo.png'
import { FiHome, FiMenu } from 'react-icons/fi'
import { IoMdClose } from 'react-icons/io'
import SidebarItem from './sidebar_items/SidebarItem'
import { useLocation, useNavigate } from 'react-router-dom'
import { SidebarItemLists } from '../../data/SidebarItemList'
import logout from '../../images/icons/logout.svg'
import { FaHamburger } from 'react-icons/fa'
import { MdOutlineMenuOpen } from 'react-icons/md'
import axios from 'axios'
import { UserContext } from '../context/UserContext'


export default function Siderbar({
    displayShowSidebar, 
    setDisplayShowSidebar, 
    setMainContentWidth, 
    setShowHbg,
    deskDisplaySidebar,
    setDeskDisplaySidebar,
    sidebarWidth
}) {

    const location = useLocation();
    const navigate = useNavigate()
    const { user, setUser } = useContext(UserContext);
  

    const hideSidebar = (url) => {
        setDisplayShowSidebar("none");
        navigate(url);
      };
 
const handDesHbOnclick = () => {
    setDeskDisplaySidebar("none")
    setMainContentWidth('100%')
    setShowHbg('flex')
}






    // Logout function
    const handleLogout = async () => {
        try {
            const res = await axios.get(process.env.REACT_APP_URL + '/api/auth/logout', { withCredentials: true })
            setUser(null)
            navigate('/');
        } catch (err) {
            console.log(err)
        }
    }


  return (
    <SidebarWrapper displaySidebar={displayShowSidebar} deskDisplaySidebar={deskDisplaySidebar} sidebarWidth={sidebarWidth}>
        <SidebarHeader>
            <img onClick={()=>navigate('/dashboard')} src={logo} alt="" srcset="" />
            <HamburgerWrapperi onClick={handDesHbOnclick}><MdOutlineMenuOpen /></HamburgerWrapperi>  
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
                <span onClick={handleLogout} >Sign Out</span>
                </SignOutWrapper>
            </SidebarContent>
  
        </SidebarBody>
    </SidebarWrapper>
  )
}
