
import React, { useEffect, useState } from 'react'
import { CategoryDetailWrapper, CategoryPosts, CategoryPostsImag, CategoryPostsText, CategorySpan, DateIconStyled, DateStyled, DateTitledStyled, EditIconStyled, EditStyled, EditTitledStyled, FilledScreenContainer, LoaderContainer, PostContent, PostFormattingIcon, PostFormattingItem, PostFormattingText, PostFormattingWrapper, PostHeader, PostIconStyled, PostLink, PostLinks, PostTitleStyled, PostWrapper } from './CategoryDetail.style'
import { AiFillEdit } from 'react-icons/ai'
import axios from 'axios'
import { FaEye, FaRegClock, FaRegEdit, FaTimes } from 'react-icons/fa'
import Markdown from 'markdown-to-jsx'
import { useNavigate, useParams } from 'react-router-dom'
import { MdDelete, MdOutlineAdd } from 'react-icons/md'
import Overlay from '../../../../components/overlay/Overlay'
import Pagination from '../../../../components/pagination/Pagination'
import PostFormatting from '../../../../components/post_formating_items/PostFormatting'
import Button from '../../../../components/clicks/button/Button'
import Loader from '../../../../components/loader/Loader'





const POSTS_PER_PAGE = 5; //for pagination

export default function CategoryDetail() {


    const navigate = useNavigate();
    const [loader, setLoader] = useState(false) //Loader
    const [currentPage, setCurrentPage] = useState(1); //for paginaon

    // TO DELET POST
    const [postId, setPostId] = useState('');
    const [postTitle, setPosTitle] = useState('');
    
    // overlay
    const [showOverlay, setShowOverlay] = useState(false);
   
    const [catPosts, setCatPosts] = useState([])
    const [catTitle, setCatTitle] = useState([])
    const { categoryId } = useParams()









    // fetch category title
    const fectCategoryTitle = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/categories/${categoryId}`)
            setCatTitle(res.data.title)
        } catch (err) {
            console.log(err)
        }
    }


    // fetch category pots
    const fetchCotegoryPosts = async () => {
      setLoader(true)
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/categories/${categoryId}/posts`)

            setCatPosts(res.data)
            setLoader(false)
            console.log(res.data)
        } catch (err) {
            console.log(err)
            setLoader(false)
        }
    }
    useEffect(() => {
        fetchCotegoryPosts()
        fectCategoryTitle()
    }, [categoryId])



    const totalPages = Math.ceil(catPosts.length / POSTS_PER_PAGE);
    const currentPosts = catPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE); 




    // Delete Function
    const handleDelete = async (categoryId) => {
        setLoader(true)
        try {
          const res = await axios.delete(`${process.env.REACT_APP_URL}/api/categories/${categoryId}`, { withCredentials: true });
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

    console.log(catPosts.length, currentPosts.length)
    
  return (
    <div>    
    <CategoryDetailWrapper postWrapperHeight={catPosts.length === 0 || currentPosts.length  < 5? '800x': 'auto'} >
       
        <PostHeader>
           <h1>{catTitle ? (catTitle) : ('Category Title')}</h1>
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
                             <PostTitleStyled fnt={"14px"} lingHeight={"30px"}>{post.title}</PostTitleStyled></PostLink>
                       <p><Markdown>{post.desc.substring(0, 230)}</Markdown></p> 
                       
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
          
    </CategoryDetailWrapper>

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

    </div>
  )
}
