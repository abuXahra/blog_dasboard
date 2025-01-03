
import React, { useEffect, useState } from 'react'
import { CategoryPosts, CategoryPostsImag, CategoryPostsText, CategorySpan, DateIconStyled, DateStyled, DateTitledStyled, EditIconStyled, EditStyled, EditTitledStyled, FilledScreenContainer, LoaderContainer, PostContent, PostFormattingIcon, PostFormattingItem, PostFormattingText, PostFormattingWrapper, PostHeader, PostIconStyled, PostLink, PostLinks, PostTitleStyled, PostWrapper } from './Posts.style'
import { AiFillEdit } from 'react-icons/ai'
import axios from 'axios'
import { FaEye, FaRegClock, FaRegEdit, FaTimes } from 'react-icons/fa'
import Markdown from 'markdown-to-jsx'
import Button from '../../../components/clicks/button/Button'
import { useNavigate } from 'react-router-dom'
import Loader from '../../../components/loader/Loader'
import { MdDelete, MdOutlineAdd } from 'react-icons/md'
import Pagination from '../../../components/pagination/Pagination'
import { View } from 'lucide'
import PostFormatting from '../../../components/post_formating_items/PostFormatting'
import Overlay from '../../../components/overlay/Overlay'



const POSTS_PER_PAGE = 5; //for pagination

export default function Posts() {


    const navigate = useNavigate();
    const [posts, setPosts] = useState([])
    const [loader, setLoader] = useState(false) //Loader
    const [currentPage, setCurrentPage] = useState(1); //for paginaon

    // TO DELET POST
    const [postId, setPostId] = useState('');
    const [postTitle, setPosTitle] = useState('');
    
    // overlay
    const [showOverlay, setShowOverlay] = useState(false);

     // fetch user post function
     const fetchPosts = async () => {
        setLoader(true)       
        try {
    
            const res = await axios.get(process.env.REACT_APP_URL+"/api/posts/")
            // const { data, pages: totalPages } = await res.data;
            setPosts(res.data)
            // console.log("user post are:", res.data);
            setLoader(false)
        } catch (err) {
           
            console.log(err)
            setLoader(false)
        }
    }

    useEffect(() => {
        fetchPosts();
    },[]);


    const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE); //for pagination
    const currentPosts = posts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE); //for pagination


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
        setPostId(deleteId);
        setPosTitle(deleteTitle)
        setShowOverlay(true)

    }

    
  return (
    <>
    {
        loader ? <Loader title={'Posts'} /> :
    <div>    
    <PostWrapper postWrapperHeight={posts.length === 0 || currentPosts.length  < 5 ? '100vh': 'auto'} >
       
        <PostHeader>
           <h1>All Posts</h1>
           <Button 
                  btnText={'Add New'} 
                  btnColor={'blue'} 
                  btnLeftIcon={<MdOutlineAdd />}
                  btnOnClick={()=>navigate('/create-post')}
            />
        </PostHeader>

        { loader ? 
     <Loader />:
      <PostContent>
        {
            currentPosts.map((post)=>(
                    <CategoryPosts key={post._id}>
                     <CategoryPostsImag bg={`${process.env.REACT_APP_URL}/images/${post.photo}`}>
                         <PostLink to={`/post/${post._id}`}>
                             {/* <img src={`${process.env.REACT_APP_URL}/images/${post.photo}`} alt="" /> */}
                         </PostLink>
                     </CategoryPostsImag>

                     {/* Post Category Contents */}
                     <CategoryPostsText>
                         <PostIconStyled>
                             <EditStyled>
                                 <EditIconStyled>
                                     {<AiFillEdit />}
                                 </EditIconStyled>
                                 <EditTitledStyled>
                                     {post.username}
                                 </EditTitledStyled>
                             </EditStyled>

                             <DateStyled>
                                 <DateIconStyled>
                                     {<FaRegClock />}
                                 </DateIconStyled>
                                 <DateTitledStyled>
                                     {new Date(post.createdAt).toDateString()}
                                 </DateTitledStyled>
                             </DateStyled>
                         </PostIconStyled>
                         <PostLink to={`/post/${post._id}`}>
                             <PostTitleStyled fnt={"14px"} lingHeight={"30px"}>{post.title}</PostTitleStyled>     </PostLink>
                       <p><Markdown>{post.desc.substring(0, 230)}</Markdown></p> 
                       

                         <CategorySpan>
                             {
                                 post?.categories?.map((cat) => (
                                     <div key={cat._id}>
                                         <PostLinks to={`/category/${cat._id}`} linkColor='white'>{cat.title}</PostLinks>
                                     </div>
                                 ))
                             }
                         </CategorySpan>
                     </CategoryPostsText>

                     <PostFormattingWrapper>
                        <PostFormatting
                            itemOnclick={()=>navigate(`/post/${post._id}`)}
                            Icon={<FaEye />}
                            text={'View'}
                            iconColor={'blue'}
                        />     
                        <PostFormatting
                            itemOnclick={()=>navigate(`/edit/${post._id}`)}
                            Icon={<FaRegEdit/>}
                            text={'Edit'}
                            iconColor={'green'}
                        />       
                         <PostFormatting
                            itemOnclick={()=>handleDeletClick(post._id, post.title)}
                            Icon={<MdDelete/>}
                            text={'Delete'}
                            iconColor={'red'}
                        />
                     </PostFormattingWrapper>
                 </CategoryPosts>
            ))
        }

</PostContent>  

}     
                        <Pagination
                        currentPage={currentPage}
                        onPageChange={setCurrentPage}
                        totalPages={totalPages}
                        pageSize={POSTS_PER_PAGE}
                    />  
          
    </PostWrapper>

        {/* Overlay Popup */}
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

    </div>}
    </>
  )
}
