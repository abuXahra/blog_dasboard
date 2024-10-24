
import React, { useEffect, useState } from 'react'
import { AiFillEdit, AiFillPicture } from 'react-icons/ai'
import axios from 'axios'
import { FaEye, FaRegClock, FaRegEdit, FaTimes } from 'react-icons/fa'
import Markdown from 'markdown-to-jsx'
import { useNavigate } from 'react-router-dom'
import { MdDelete, MdOutlineAdd } from 'react-icons/md'
import { View } from 'lucide'
import { AdvertContent, AdvertHeader, AdvertImage, AdvertItems, AdvertSpan, AdvertText, AdvertWrapper, DateIconStyled, DateStyled, DateTitledStyled, EditIconStyled, EditStyled, EditTitledStyled, PictureWrapper, PostFormattingWrapper, PostIconStyled, PostLink, PostLinks, PostTitleStyled } from './Adverts.style'
import Loader from '../../../components/loader/Loader'
import Button from '../../../components/clicks/button/Button'
import PostFormatting from '../../../components/post_formating_items/PostFormatting'
import Pagination from '../../../components/pagination/Pagination'
import Overlay from '../../../components/overlay/Overlay'
import bannerAds from '../../../images/banner-top-2.jpg'
import { NameAndFileInput, PostPicture } from '../posts/createpost/CreatePost.style'
import AddAds from '../../../components/ads_components/add_ads/AddAds'





const POSTS_PER_PAGE = 6; //for pagination

export default function Adverts() {
    


    const navigate = useNavigate();
    const [categories, setCategories] = useState([])
    const [loader, setLoader] = useState(false) //Loader
    const [currentPage, setCurrentPage] = useState(1); //for paginaon

    // TO DELET POST
    const [categoryId, setCategoryId] = useState('');
    const [categoryTitle, setCategoryTitle] = useState('');
    
    // overlay
    const [showBannerAdOverlay, setShowBannerAdOverlay] = useState(false);

    const [showOverlay, setShowOverlay] = useState(false);
    const [showAddAdvertCard, setShowAddAdvertCard] = useState(false)

    const totalPages = Math.ceil(categories.length / POSTS_PER_PAGE); //for pagination
    const currentCategories = categories.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE); //for pagination



    // Fetch category function
    const fetchCat = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/categories`)
            setCategories(res.data)
        } catch (err) {
            console.log(err)
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
    <AdvertWrapper postWrapperHeight={categories.length === 0 || currentCategories.length  < 6 ? '100vh' : 'auto'} >
       
        <AdvertHeader>
           <h1>All Adverts</h1>
           <Button 
                  btnText={'Add New'} 
                  btnColor={'blue'} 
                  btnLeftIcon={<MdOutlineAdd />}
                  btnOnClick={()=>setShowAddAdvertCard(true)}
            />
        </AdvertHeader>

      <AdvertContent>
      <AdvertHeader>
           <h3>Banner Ads</h3>
        </AdvertHeader>
        {
            currentCategories.map((Advert)=>(
                    <AdvertItems key={Advert._id}>
                     <AdvertImage bg={`${process.env.REACT_APP_URL}/images/${Advert?.photo}`}>
                         <PostLink to={`/Advert/${Advert._id}`}></PostLink>
                     </AdvertImage>

                     {/* Post Advert Contents */}
                     <AdvertText>
                         <PostLink to={`/Advert/${Advert._id}`}>
                                 <PostTitleStyled fnt={"14px"} lingHeight={"30px"}>{Advert.title}</PostTitleStyled>     
                         </PostLink>
            

                     <PostFormattingWrapper>
                        <PostFormatting
                            itemOnclick={()=>navigate(`/Advert/${Advert._id}`)}
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
                            itemOnclick={()=>handleDeletClick(Advert._id, Advert.title)}
                            Icon={<MdDelete/>}
                            text={'Delete'}
                            iconColor={'red'}
                        />
                     </PostFormattingWrapper>
                     </AdvertText>
                 </AdvertItems>
            ))
        }
</AdvertContent>  

<AdvertContent>
      <AdvertHeader>
           <h3>Sidebar Ads</h3>
  
        </AdvertHeader>
        {
            currentCategories.map((Advert)=>(
                    <AdvertItems key={Advert._id}>
                     <AdvertImage bg={`${process.env.REACT_APP_URL}/images/${Advert?.photo}`}>
                         <PostLink to={`/Advert/${Advert._id}`}></PostLink>
                     </AdvertImage>

                     {/* Post Advert Contents */}
                     <AdvertText>
                         <PostLink to={`/Advert/${Advert._id}`}>
                                 <PostTitleStyled fnt={"14px"} lingHeight={"30px"}>{Advert.title}</PostTitleStyled>     
                         </PostLink>
            

                     <PostFormattingWrapper>
                        <PostFormatting
                            itemOnclick={()=>navigate(`/Advert/${Advert._id}`)}
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
                            itemOnclick={()=>handleDeletClick(Advert._id, Advert.title)}
                            Icon={<MdDelete/>}
                            text={'Delete'}
                            iconColor={'red'}
                        />
                     </PostFormattingWrapper>
                     </AdvertText>
                 </AdvertItems>
            ))
        }
</AdvertContent> 
    
          
    </AdvertWrapper>




        {/* Create Ads Popup */}
        
              { showAddAdvertCard &&  
                <AddAds 
                    closeOverlayOnClick={()=>setShowAddAdvertCard(false)}
                    setCloseOverlay={setShowAddAdvertCard}
                />
              }
       
            



            {/* Overlay Popup to change banner Ads*/}
            { showBannerAdOverlay &&
            <Overlay
                    contentHight={""}
                    contentWidth={"auto"}
                    overlayButtonClick={()=>handleDelete('postId')}
                    closeOverlayOnClick={()=>setShowBannerAdOverlay(false)}
                    btnText1={'Change Ads'}
                    
                >
                
                <AdvertHeader>
                    <h2>{'Nafdac ads'}</h2>

                        <PictureWrapper>
                            <label htmlFor="fileInput"><span><AiFillPicture /> Upload Picture </span> </label>
                            <PostPicture onChange={(e) => {  }} type="file" id="fileInput" />
                        </PictureWrapper>
                </AdvertHeader>         

                <img src={bannerAds} alt="" srcset="" />
                <span>This Ads is running for 8 days and it is 4 days left</span>
            </Overlay>
            }







        {/* Overlay Popup */}
        { showOverlay &&
           <Overlay
                contentHight={""}
                contentWidth={""}
                overlayButtonClick={()=>handleDelete('postId')}
                closeOverlayOnClick={()=>setShowOverlay(false)}
            >
            <h3>{'postTitle'}</h3>
            <span>Are sure you want to</span>
            <span>delete the Advert?</span> 
            </Overlay>}

    </div>
    }
    </>
  )
}
