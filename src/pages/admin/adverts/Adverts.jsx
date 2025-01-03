
import React, { useEffect, useState } from 'react'
import { AiFillEdit, AiFillPicture } from 'react-icons/ai'
import axios from 'axios'
import { FaEye, FaRegClock, FaRegEdit, FaTimes } from 'react-icons/fa'
import Markdown from 'markdown-to-jsx'
import { useNavigate } from 'react-router-dom'
import { MdDelete, MdOutlineAdd } from 'react-icons/md'
import { View } from 'lucide'
import { AdvertContent, HeaderWrapper, AdvertImage, AdvertItems, AdvertSpan, AdvertText, AdvertWrapper, DateIconStyled, DateStyled, DateTitledStyled, EditIconStyled, EditStyled, EditTitledStyled, PictureWrapper, PostFormattingWrapper, PostIconStyled, PostLink, PostLinks, PostTitleStyled } from './Adverts.style'
import Loader from '../../../components/loader/Loader'
import Button from '../../../components/clicks/button/Button'
import PostFormatting from '../../../components/post_formating_items/PostFormatting'
import Pagination from '../../../components/pagination/Pagination'
import Overlay from '../../../components/overlay/Overlay'
import bannerAds from '../../../images/banner-top-2.jpg'
import { NameAndFileInput, PostPicture } from '../posts/createpost/CreatePost.style'
import AddAds from '../../../components/ads_components/add_ads/AddAds'
import EditAds from '../../../components/ads_components/edit_ads/EditAds'
import ViewAds from '../../../components/ads_components/veiw_ads/ViewAds'





export default function Adverts() {
    


    const navigate = useNavigate();
    const [adverts, setAdverts] = useState([])
    const [loader, setLoader] = useState(false) //Loader


    // TO DELET POST
    const [advertId, setAdvertId] = useState('');
    const [advertTitle, setAdvertTitle] = useState('');
    
    // overlay
    const [showBannerAdOverlay, setShowBannerAdOverlay] = useState(false);

    const [showOverlay, setShowOverlay] = useState(false);
    const [showAddAdvertCard, setShowAddAdvertCard] = useState(false)
    const [showEditAds, setShowEditAds] =useState(false)
    const [showViewAds, setShowViewAds] =useState(false)

    // Fetch category function
    const fetchCat = async () => {
        setLoader(true)
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/adverts`)
            setAdverts(res.data)
            setLoader(false)
        } catch (err) {
            console.log(err)
            setLoader(false)
        }
    }
    useEffect(() => {
        fetchCat()
    }, [])




    // Edit Popup
    const handleShowEdit = (advertId) => {
        setAdvertId(advertId)
        setShowEditAds(true)
    }


    // Edit Popup
    const handleShowView = (advertId) => {
        setAdvertId(advertId)
        setShowViewAds(true)
    }


    // Delete Function
       // Delete Function
       const handleDelete = async (advertId) => {
        setLoader(true)
        try {
          const res = await axios.delete(`${process.env.REACT_APP_URL}/api/adverts/${advertId}`, { withCredentials: true });
            setLoader(false)
            navigate('/adverts')
            alert('deleted')
        } catch (err) {
            console.log(err)
            setLoader(false)
        }
        setShowOverlay(false)
    }


    // Onclick Delete Icon
    const handleDeletClick = (deleteId, deleteTitle) =>{
        setAdvertId(deleteId);
        setAdvertTitle(deleteTitle)
        setShowOverlay(true)

    }

   



    // View popup delete and update funct
    const ViewCardUpdateBtn = (advertId) =>{
            setShowViewAds(false);
            setShowEditAds(true);
            setAdvertId(advertId)
    }


    const ViewCardDeletBtn = (advertId, advertTitle) =>{
        setShowViewAds(false);
        setShowOverlay(true);
        setAdvertId(advertId)
        setAdvertTitle(advertTitle)
}


  return (
    <>
    {
        loader ? <Loader title={'Adverts'} /> :
    <div>    
    <AdvertWrapper>
       
        <HeaderWrapper>
           <h1>All Adverts</h1>
           <Button 
                  btnText={'Add New'} 
                  btnColor={'blue'} 
                  btnLeftIcon={<MdOutlineAdd />}
                  btnOnClick={()=>setShowAddAdvertCard(true)}
            />
        </HeaderWrapper>

<AdvertContent>
        <HeaderWrapper>
           <h3>Banner Ads</h3>

        </HeaderWrapper>
        { adverts.map((Advert)=>(
                 Advert.adType === 'banner' ?  ( <AdvertItems key={Advert._id}>
                     <AdvertImage bg={`${process.env.REACT_APP_URL}/images/${Advert?.photo}`}>
                         <PostLink to={`/Advert/${Advert._id}`}></PostLink>
                     </AdvertImage>

                     {/* Post Advert Contents */}
                     <AdvertText>
                         <PostLink to={`/Advert/${Advert._id}`}>
                            <div>
                                <PostTitleStyled fnt={"14px"} lingHeight={"30px"}>{Advert.title}</PostTitleStyled>
                                <span style={{textTransform:"capitalize"}}>{Advert.adType}</span>
                            </div>

                         </PostLink>
            

                     <PostFormattingWrapper>
                        <PostFormatting
                            itemOnclick={()=>navigate(`/Advert/${Advert._id}`)}
                            Icon={<FaEye />}
                            text={'View Posts'}
                            iconColor={'blue'}
                        />     
                        <PostFormatting
                            itemOnclick={()=>handleShowEdit(Advert._id)}
                            Icon={<FaRegEdit/>}
                            text={'Change'}
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
                 </AdvertItems>):<></>
            ))
        }
</AdvertContent> 


<AdvertContent>
        <HeaderWrapper>
           <h3>Sidebar Ads</h3>

        </HeaderWrapper>
        { adverts.map((Advert)=>(
                 Advert.adType === 'sidebar' ?  ( <AdvertItems key={Advert._id}>
                     <AdvertImage bg={`${process.env.REACT_APP_URL}/images/${Advert?.photo}`}>
                         <PostLink to={`/Advert/${Advert._id}`}></PostLink>
                     </AdvertImage>

                     {/* Post Advert Contents */}
                     <AdvertText>
                         <PostLink to={`/Advert/${Advert._id}`}>
                            <div>
                                <PostTitleStyled fnt={"14px"} lingHeight={"30px"}>{Advert.title}</PostTitleStyled>
                                <span style={{textTransform:"capitalize"}}>{Advert.adType}</span>
                            </div>

                         </PostLink>
            

                     <PostFormattingWrapper>
                        <PostFormatting
                            itemOnclick={()=>handleShowView(Advert._id)}
                            Icon={<FaEye />}
                            text={'View Ads'}
                            iconColor={'blue'}
                        />     
                        <PostFormatting
                            itemOnclick={()=>handleShowEdit(Advert._id)}
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
                 </AdvertItems>):<></>
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
       
            
        {/* Edit Ads Popup */}
              { showEditAds &&  
                <EditAds 
                    closeOverlayOnClick={()=>setShowEditAds(false)}
                    setCloseOverlay={setShowEditAds}
                    advertId={advertId}
                />
        }

        {/* view Ads Popup */}
              { showViewAds &&  
                <ViewAds 
                    closeOverlayOnClick={()=>setShowViewAds(false)}
                    alternatFunc={()=>ViewCardDeletBtn(advertId, advertTitle)}
                    overlayButtonClick={()=>ViewCardUpdateBtn(advertId)}
                    advertId={advertId}
                />
        }





        {/* Delete Ads Popup overlay */}
        
        { showOverlay &&
           <Overlay
                contentHight={""}
                contentWidth={""}
                overlayButtonClick={()=>handleDelete(advertId)}
                closeOverlayOnClick={()=>setShowOverlay(false)}
            >
            <h3>{advertTitle}</h3>
            <span>Are sure you want to</span>
            <span>delete the Advert?</span> 
            </Overlay>} 

    </div>
    }
    </>
  )
}
