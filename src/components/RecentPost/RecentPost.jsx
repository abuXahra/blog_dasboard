
import React from 'react'
import { PostContent, PostImage, PostItems, PostMetaTags, PostMetaTagsItem, PostTitle } from './RecentPost.styled'
import px from '../../images/angry-mob-youth.jpg'
import {FaRegCommentAlt, FaRegEye, FaRegEdit} from 'react-icons/fa'

export default function RecentPost() {

    const post = [
        {
            _id: "65f18bf7342e8e20143393cc",
            title: "Angry traders set Abuja market on fire",
            desc: "<p>A section of the Abuja Market in Wuse was set on fire on Tuesday by an angry mob and aggrieved traders after an officer allegedly shot a man who had been charged and convicted.</p><p>The officer attached to the Mobile Court sitting within the Abuja market was said to have shot the man after he tried to escape, PUNCH Online gathered.</p><p>A reliable source in Abuja Market Management Limited confirmed the alleged shooting to our correspondent, stating, however, that the market had been cordoned off by policemen to restore order in the market while officers of the FCT Fire Service were making attempts to quench the fire and prevent its spread.</p><p><br></p><p>The Public Relations Officer in the AMML, Innocent Amaechina, confirmed that the management’s office and several shops and vehicles in the market were lost in the fire.</p><p>Meanwhile, the Director of the FCT Fire Service, Amiola Adebayo, did not respond to phone calls, as of the time of filing this report.</p><p>Also, the Police Public Relations Officer of the FCT Police Command, SP Josephine Adeh, said she was gathering facts on the matter and would revert as soon as she had more details.</p>",
            photo: px,
            username: "Abu Amjad",
            userId: "65391e86ac92805d8c05d374",
            categories: [
                "65980d9c546fb7eda488d33d",
                "65953b7d32a41da42689c306"
            ],
            comments: [
            {
                "_id": "65ba1ff5719a907bb111ac84",
                "comment": "It equips them with the skills needed to become productive members of society. This way, it stimulates economic growth and raises awareness of local and global problems. Organized institutions affect many aspects of education.",
                "email": "amjad@gmail.com",
                "author": "Amjad",
                "website": "",
                "postId": "65ba1f21719a907bb111abe2",
                "createdAt": "2024-01-31T10:24:53.719Z",
                "updatedAt": "2024-01-31T10:24:53.719Z",
                "__v": 0
            },
            {
                "_id": "65ba1ff5719a907bb111ac84",
                "comment": "It equips them with the skills needed to become productive members of society. This way, it stimulates economic growth and raises awareness of local and global problems. Organized institutions affect many aspects of education.",
                "email": "amjad@gmail.com",
                "author": "Amjad",
                "website": "",
                "postId": "65ba1f21719a907bb111abe2",
                "createdAt": "2024-01-31T10:24:53.719Z",
                "updatedAt": "2024-01-31T10:24:53.719Z",
                "__v": 0
            },
            {
                "_id": "65ba1ff5719a907bb111ac84",
                "comment": "It equips them with the skills needed to become productive members of society. This way, it stimulates economic growth and raises awareness of local and global problems. Organized institutions affect many aspects of education.",
                "email": "amjad@gmail.com",
                "author": "Amjad",
                "website": "",
                "postId": "65ba1f21719a907bb111abe2",
                "createdAt": "2024-01-31T10:24:53.719Z",
                "updatedAt": "2024-01-31T10:24:53.719Z",
                "__v": 0
            },
            {
                "_id": "65ba1ff5719a907bb111ac84",
                "comment": "It equips them with the skills needed to become productive members of society. This way, it stimulates economic growth and raises awareness of local and global problems. Organized institutions affect many aspects of education.",
                "email": "amjad@gmail.com",
                "author": "Amjad",
                "website": "",
                "postId": "65ba1f21719a907bb111abe2",
                "createdAt": "2024-01-31T10:24:53.719Z",
                "updatedAt": "2024-01-31T10:24:53.719Z",
                "__v": 0
            }
        ],
       },
    ]



  return (
                <PostItems>
                    <PostImage px={px}></PostImage>
                    <PostContent>
                      <PostTitle>{post[0].title}</PostTitle>
                      <PostMetaTags>
                        <PostMetaTagsItem>
                          <span><FaRegCommentAlt /></span>
                          <span>{post[0].comments.length} comments</span>
                        </PostMetaTagsItem>
                        <PostMetaTagsItem>
                          <span><FaRegEye /></span>
                          <span>{156} Views</span>
                        </PostMetaTagsItem>         
                        <PostMetaTagsItem>
                          <span><FaRegEdit /></span>
                          <span>Edit</span>
                        </PostMetaTagsItem>
                      </PostMetaTags>
                    </PostContent>
                 </PostItems>
  )
}
