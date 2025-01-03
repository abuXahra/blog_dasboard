

import React, { useContext, useEffect, useState } from 'react'
import bgUrl from '../../../../images/angry-mob-youth.jpg'
import { CommentSpacing, MarginTop, PostAuthor, PostCat, PostCatLink, PostComments, PostDesc, PostDetailWrapper, PostFormattingWrapper, PostImageContainer, RecentComment, RecentCommentAuthorandDate, RecentCommentContentAuthor, RecentCommentContents, RecentCommentImg, RecentCommentReply, RecentPostContentWrapper, RecentPosts, RecentPostsContents, SingRecentPost } from './PostDetail.style'
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../../../../components/context/UserContext'
import axios from 'axios'
import Markdown from 'markdown-to-jsx'
import { FaRegClock, FaRegEdit } from 'react-icons/fa'
import placeHolder from '../../../../images/placeholder_image.png'
import PostFormatting from '../../../../components/post_formating_items/PostFormatting'
import { MdDelete } from 'react-icons/md'
import { FcApprove } from 'react-icons/fc'
import Loader from '../../../../components/loader/Loader'
import Overlay from '../../../../components/overlay/Overlay'


export default function PostDetail() {

        const { postId } = useParams()
        const [post, setPost] = useState({})
        const { user } = useContext(UserContext)
        const navigate = useNavigate()
        const [loader, setLoader] = useState(false)
        const [comments, setComments] = useState([])
       


        // comment form variables
        const [comment, setComment] = useState('');
        const [name, setName] = useState('')
        const [email, setEmail] = useState('')
        const [website, setWebsite] = useState('')
        const [catId, setCatId] = useState()
        const [postCats, setPostCats] = useState()
        const [postTitle, setPosTitle] = useState('');
        const [commentId, setCommentId] = useState('');
        const [commentText, setCommentText] = useState('')
        
        // overlay
        const [showOverlay, setShowOverlay] = useState(false);
        const [showDeleteComment, setShowDeleteComment] = useState(false);
    

        // fetch post function
        const fetchPost = async () => {
            setLoader(true)
            try {
                const res = await axios.get(process.env.REACT_APP_URL + `/api/posts/` + postId);
                setPost(res.data)
                console.log('===============post==============')
                console.log(res.data)
                setCatId(res.data.categories[0]._id)
                setLoader(false)
            } catch (err) {
                console.log(err)
                setLoader(false)
            }
        }

 

// fetch post comment function
    const fetchPostComment = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/posts/${postId}/comments`)
            setComments(res.data)
        } catch (error) {

        }
    }


    
    // fetch category pots
    const fetchCotegoryPosts = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/categories/${catId}/posts`)
            setPostCats(res.data.slice(0, 4))
            console.log("~~~~~~~~~~: ", res.data)
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        fetchPost()
        fetchPostComment()
        fetchCotegoryPosts()
    }, [postId, catId])




     // Delete Function
     const handleDelete = async (postId) => {
        setLoader(true)
        try {
            const res = await axios.delete(process.env.REACT_APP_URL + `/api/posts/` + postId, { withCredentials: true });
            setLoader(false)
            navigate('/posts')
            alert('deleted')
        } catch (err) {
            console.log(err)
            setLoader(false)
        }
        setShowOverlay(false)
    }


    // Onclick Delete Icon
    const handleDeletClick = (deleteId, deleteTitle) =>{
        setPosTitle(deleteTitle)
        setShowOverlay(true)

    }


    
    // DELETE COMMENT
         // Delete Function
     const handleDeleteComment = async (commentId) => {
        setLoader(true)
        try {
            const res = await axios.delete(process.env.REACT_APP_URL + `/api/posts/` + postId + `/comment/${commentId}`, { withCredentials: true });
            setLoader(false)
            alert('deleted')
        } catch (err) {
            console.log(err)
            setLoader(false)
        }
        setShowDeleteComment(false)
    }


  // Onclick Delete comment Icon
  const handleCommentDeleteClick = (commentId, commentText) =>{
    setCommentId(commentId)
    setCommentText(commentText)
    setShowDeleteComment(true)

}


  return ( <>
  { loader ? <Loader title={'Post'} /> :
   
    <PostDetailWrapper>
        <PostImageContainer bgUrl={`${process.env.REACT_APP_URL}/images/${post.photo}`}></PostImageContainer>
        <h1>{post.title}</h1>
        
        <PostDesc><Markdown>{post.desc}</Markdown></PostDesc>
        
        <PostCat>
            {post.categories?.map((cat) =>
                (<PostCatLink key={cat._id} to={`/category/${cat._id}`}>
                    {cat.title}
                </PostCatLink>))}
               { post  &&      <PostAuthor>Author: <h4>{post.username}</h4></PostAuthor>}
        </PostCat>

        
        
        
        {/* Comment */}
        <PostComments>
         {comments.length !== 0 ? <h4>Comments</h4> : ''}
           {
                        comments.map((c, i) => (
                         <RecentComment key={c._id}>
                            <RecentCommentImg bgUrl={placeHolder}>
                                {/* // <img src={placeHolder} alt="" /> */}
                            </RecentCommentImg>
                            <CommentSpacing>
                            <RecentPostContentWrapper>
                                <RecentCommentAuthorandDate>
                                    <RecentCommentContentAuthor>
                                        <h3>{c.author}</h3>
                                        <span>
                                            <FaRegClock />
                                            {new Date(c.createdAt).toDateString()}
                                        </span>
                                    </RecentCommentContentAuthor>
                                    <RecentCommentReply>
                                        {/* <span><FaReply /> Reply</span> */}
                                    </RecentCommentReply>
                                </RecentCommentAuthorandDate>

                                <RecentCommentContents>
                                    {c.comment}
                                </RecentCommentContents>

                            
                            
                            {/* formatt comment */}
                            <PostFormattingWrapper jtcnt={'flex-end'} alitms={'end'}>     
                                <PostFormatting
                                    sz={'12px'}
                                    itemOnclick={()=>{}}
                                    Icon={<FcApprove />}
                                    text={'Approve '}
                                    iconColor={'green'}
                                />       
                                <PostFormatting
                                    itemOnclick={()=>handleCommentDeleteClick(c._id, c.comment)}
                                    Icon={<MdDelete/>}
                                    text={'Delete'}
                                    iconColor={'red'}
                                    sz={'12px'}
                                />
                            </PostFormattingWrapper>
                            </RecentPostContentWrapper>
                            </CommentSpacing>
                        </RecentComment>
                        ))
                    }
        </PostComments>


             <h3>RECENT POSTS</h3>
                    <SingRecentPost>
                        {
                            postCats && postCats.map((catpost) => (
                                <RecentPosts dsp={catpost._id === postId && "none"} key={catpost._id} onClick={() => navigate(`/post/${catpost._id}`)}>
                                    <RecentPostsContents bgUrl={`${process.env.REACT_APP_URL}/images/${catpost.photo}`}>
                                        {/* <img src={`${process.env.REACT_APP_URL}/images/${catpost.photo}`} alt="" /> */}
                                    </RecentPostsContents>
                                    <MarginTop mt={"10px"} />
                                    <p>{catpost.title}</p>
                                </RecentPosts>
                            ))
                        }
                    </SingRecentPost>
                    


                <PostFormattingWrapper>     
                        <PostFormatting
                        sz={'14px'}
                            itemOnclick={()=>navigate(`/edit/${post._id}`)}
                            Icon={<FaRegEdit/>}
                            text={'Edit Post'}
                            iconColor={'green'}
                        />       
                         <PostFormatting
                            itemOnclick={()=>handleDeletClick(post._id, post.title)}
                            Icon={<MdDelete/>}
                            text={'Delete Post'}
                            iconColor={'red'}
                            sz={'14px'}
                        />
                    </PostFormattingWrapper>

    {/* Overlay Popup to delete post */}
        { showOverlay &&
           <Overlay
                contentHight={""}
                contentWidth={""}
                overlayButtonClick={()=>handleDelete(postId)}
                closeOverlayOnClick={()=>setShowOverlay(false)}
            >
            <h3>{postTitle}</h3>
            <span>Are sure you want to</span>
            <span>delete the post?</span> 
            </Overlay>}


        
    {/* Overlay Popup to delete post */}
    { showDeleteComment &&
           <Overlay
                contentHight={""}
                contentWidth={""}
                overlayButtonClick={()=>handleDeleteComment(commentId)}
                closeOverlayOnClick={()=>setShowDeleteComment(false)}
            >
            <h3>{commentText}</h3>
            <span>Are sure you want to</span>
            <span>delete the comment?</span> 
            </Overlay>}

    </PostDetailWrapper>}
    </>
  )
}
