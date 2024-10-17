
import React from 'react'
import { PostFormattingIcon, PostFormattingItem, PostFormattingText } from '../../pages/admin/posts/Posts.style'

export default function PostFormatting({itemOnclick, Icon, text, iconColor, sz }) {
  return (
        <PostFormattingItem onClick={itemOnclick}>
           <PostFormattingIcon sz={sz} iconColor={iconColor}>{Icon}</PostFormattingIcon>
           <PostFormattingText sz={sz}>{text}</PostFormattingText>
        </PostFormattingItem>
  )
}
