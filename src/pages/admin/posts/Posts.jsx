
import React, { useEffect, useState } from 'react'
import { CategoryPosts, CategoryPostsImag, CategoryPostsText, CategorySpan, DateIconStyled, DateStyled, DateTitledStyled, EditIconStyled, EditStyled, EditTitledStyled, LoaderContainer, PostContent, PostHeader, PostIconStyled, PostLink, PostLinks, PostTitleStyled, PostWrapper } from './Posts.style'
import { AiFillEdit } from 'react-icons/ai'
import axios from 'axios'
import { FaRegClock } from 'react-icons/fa'
import Markdown from 'markdown-to-jsx'
import Button from '../../../components/clicks/button/Button'
import { useNavigate } from 'react-router-dom'
import Links from '../../../components/clicks/links/Links'
import Loader from '../../../components/loader/Loader'
import { MdOutlineAdd } from 'react-icons/md'
import Pagination from '../../../components/pagination/Pagination'


const POSTS_PER_PAGE = 5; //for pagination

export default function Posts() {


    const navigate = useNavigate();
    const [posts, setPosts] = useState([])
    const [loader, setLoader] = useState(false) //Loader
    const [currentPage, setCurrentPage] = useState(1); //for paginaon

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


console.log("===================posts===============: \n",posts)
    
  return (
    <div>
     

    
    <PostWrapper>
       
        <PostHeader>
           <h1>All Posts</h1>
           <Button 
                  btnText={'Add New'} 
                  btnColor={'orange'} 
                  btnLeftIcon={<MdOutlineAdd />}
                  btnOnClick={()=>navigate('/dashboard')}
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

    </div>
  )
}
