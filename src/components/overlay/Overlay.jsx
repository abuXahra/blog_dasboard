
import React from 'react'
import { CloseIcon, OverlayButton, OverlayCard, OverlayWrapper } from './Overlay.style'
import { FaTimes } from 'react-icons/fa'
import Button from '../clicks/button/Button'

export default function Overlay({children, contentHight, contentWidth, overlayButtonClick, closeOverlayOnClick}) {
  return (
    <OverlayWrapper>
      <OverlayCard contentHight={contentHight} contentWidth={contentWidth}>
     {/* close icon */}
      <CloseIcon ><span onClick={closeOverlayOnClick}><FaTimes/></span></CloseIcon>
          
          {/* Overlay content */}
          {children}

          {/* Overlay buttons */}
        <OverlayButton>
            <Button 
              btnColor={'blue'}
              btnText={'Yes'}
              btnPd={'10px 20px'}
              btnOnClick={overlayButtonClick}
            />
            <Button 
              btnColor={'black'}
              btnText={'No'}
              btnPd={'10px 20px'}
              btnOnClick={closeOverlayOnClick}
            />
        </OverlayButton>
      </OverlayCard>
    </OverlayWrapper>
  )
}
