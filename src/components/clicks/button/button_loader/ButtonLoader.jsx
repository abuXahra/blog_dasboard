

import React from 'react'
import { ButtonLoaderWrapper } from './BottonLoader.style'
import { Circles } from 'react-loader-spinner'

export default function ButtonLoader({text}) {
  return (
    <ButtonLoaderWrapper>
        <Circles
            height="20"
            width="20"
            color="white"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        /> <span>{text}</span>
    </ButtonLoaderWrapper>
  )
}
