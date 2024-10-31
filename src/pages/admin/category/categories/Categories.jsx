
import React, { useEffect, useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import axios from 'axios'
import { FaEye, FaRegClock, FaRegEdit, FaTimes } from 'react-icons/fa'
import Markdown from 'markdown-to-jsx'
import { useNavigate } from 'react-router-dom'
import { MdDelete, MdOutlineAdd } from 'react-icons/md'
import { View } from 'lucide'
import { CategoryContent, CategoryHeader, CategoryImage, CategoryItems, CategorySpan, CategoryText, CategoryWrapper, DateIconStyled, DateStyled, DateTitledStyled, EditIconStyled, EditStyled, EditTitledStyled, PostFormattingWrapper, PostIconStyled, PostLink, PostLinks, PostTitleStyled } from './Categories.style'
import Button from '../../../../components/clicks/button/Button'
import Loader from '../../../../components/loader/Loader'
import PostFormatting from '../../../../components/post_formating_items/PostFormatting'
import Pagination from '../../../../components/pagination/Pagination'
import Overlay from '../../../../components/overlay/Overlay'




const POSTS_PER_PAGE = 6; //for pagination

export default function Categories() {


    const navigate = useNavigate();
    const [categories, setCategories] = useState([])
    const [loader, setLoader] = useState(false) //Loader
    const [currentPage, setCurrentPage] = useState(1); //for paginaon

    // TO DELET POST
    const [categoryId, setCategoryId] = useState('');
    const [categoryTitle, setCategoryTitle] = useState('');
    
    // overlay
    const [showOverlay, setShowOverlay] = useState(false);

    const totalPages = Math.ceil(categories.length / POSTS_PER_PAGE); //for pagination
    const currentCategories = categories.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE); //for pagination



    // Fetch category function
    const fetchCat = async () => {
        setLoader(true)
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/categories`)
            setCategories(res.data)
            setLoader(false)
        } catch (err) {
            console.log(err)
            setLoader(false)
        }
    }
    useEffect(() => {
        fetchCat()
    }, [])




    


    // Delete Function
       // Delete Function
       const handleDelete = async (categoryId) => {
        setLoader(true)
        try {
          const res = await axios.delete(`${process.env.REACT_APP_URL}/api/categories/${categoryId}`, { withCredentials: true });
            setLoader(false)
            navigate('/categories')
            alert('deleted')
        } catch (err) {
            console.log(err)
            setLoader(false)
        }
        setShowOverlay(false)
    }


    // Onclick Delete Icon
    const handleDeletClick = (deleteId, deleteTitle) =>{
        setCategoryId(deleteId);
        setCategoryTitle(deleteTitle)
        setShowOverlay(true)

    }

   


  return (
    <>
    {
        loader ? <Loader title={'Categories'} /> :
    <div>    
    <CategoryWrapper postWrapperHeight={categories.length === 0 || currentCategories.length  < 6 ? '100vh' : 'auto'} >
       
        <CategoryHeader>
           <h1>All Categories</h1>
           <Button 
                  btnText={'Add New'} 
                  btnColor={'blue'} 
                  btnLeftIcon={<MdOutlineAdd />}
                  btnOnClick={()=>navigate('/create-category')}
            />
        </CategoryHeader>

      <CategoryContent>
        {
            currentCategories.map((category)=>(
                    <CategoryItems key={category._id}>
                     <CategoryImage bg={`${process.env.REACT_APP_URL}/images/${category?.photo}`}>
                         <PostLink to={`/category/${category._id}`}></PostLink>
                     </CategoryImage>

                     {/* Post Category Contents */}
                     <CategoryText>
                         <PostLink to={`/category/${category._id}`}>
                                 <PostTitleStyled fnt={"14px"} lingHeight={"30px"}>{category.title}</PostTitleStyled>     
                         </PostLink>
            

                     <PostFormattingWrapper>
                        <PostFormatting
                            itemOnclick={()=>navigate(`/category/${category._id}`)}
                            Icon={<FaEye />}
                            text={'View Posts'}
                            iconColor={'blue'}
                        />     
                        <PostFormatting
                            itemOnclick={()=>{}}
                            Icon={<FaRegEdit/>}
                            text={'Edit'}
                            iconColor={'green'}
                        />       
                         <PostFormatting
                            itemOnclick={()=>handleDeletClick(category._id, category.title)}
                            Icon={<MdDelete/>}
                            text={'Delete'}
                            iconColor={'red'}
                        />
                     </PostFormattingWrapper>
                     </CategoryText>
                 </CategoryItems>
            ))
        }

</CategoryContent>  
  
                        <Pagination
                        currentPage={currentPage}
                        onPageChange={setCurrentPage}
                        totalPages={totalPages}
                        pageSize={POSTS_PER_PAGE}
                    />  
          
    </CategoryWrapper>

        {/* Overlay Popup */}
        { showOverlay &&
           <Overlay
                contentHight={""}
                contentWidth={""}
                overlayButtonClick={()=>handleDelete(categoryId)}
                closeOverlayOnClick={()=>setShowOverlay(false)}
            >
            <h3>{categoryTitle}</h3>
            <span>Are sure you want to</span>
            <span>delete the category?</span> 
            </Overlay>}

    </div>
    }
    </>
  )
}
