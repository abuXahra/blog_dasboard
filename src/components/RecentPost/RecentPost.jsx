
import React from 'react'
import { PostContent, PostImage, PostItems, PostMetaTags, PostMetaTagsItem, PostTitle } from './RecentPost.styled'
import px from '../../images/angry-mob-youth.jpg'
import {FaRegCommentAlt, FaRegEye, FaRegEdit} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export default function RecentPost({post}) {


  const navigate = useNavigate();
  
  return (
                <PostItems>
                    <PostImage px={`${process.env.REACT_APP_URL}/images/${post.photo}`}></PostImage>
                    <PostContent>
                      <PostTitle>{post.title}</PostTitle>
                      <PostMetaTags>
                        <PostMetaTagsItem>
                          <span><FaRegCommentAlt /></span>
                          <span>{post.comments.length} comments</span>
                        </PostMetaTagsItem>
                        <PostMetaTagsItem>
                          <span style={{cursor: "pointer"}} onClick={()=>navigate(`/edit/${post._id}`)}><FaRegEdit /></span>
                          <span>Edit</span>
                        </PostMetaTagsItem>
                        <PostMetaTagsItem>
                          <span style={{cursor: "pointer"}} onClick={()=>navigate(`/post/${post._id}`)}><FaRegEye /></span>
                          {/* <span>{156} Views</span> */}
                        </PostMetaTagsItem>         
                      </PostMetaTags>
                    </PostContent>
                 </PostItems>
  )
}
