
import React from 'react'
import { SidebarItemContainer } from './SidebarItem.style'


export default function SidebarItem({bg, icon, title, handleClick}) {

  return (
          <SidebarItemContainer bg={bg} onClick={handleClick}>
              <span><img src={icon} alt="" /></span> 
              <span>{title}</span>
          </SidebarItemContainer>
  )
}
