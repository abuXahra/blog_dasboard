
import React, { useEffect, useState } from 'react'
import { AiFillEdit, AiFillPicture } from 'react-icons/ai'
import axios from 'axios'
import { FaEye, FaRegClock, FaRegEdit, FaTimes } from 'react-icons/fa'
import Markdown from 'markdown-to-jsx'
import { useNavigate } from 'react-router-dom'
import { MdDelete, MdOutlineAdd } from 'react-icons/md'
import { View } from 'lucide'
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
import { HeaderWrapper, PostFormattingWrapper, PostLink, PostTitleStyled, UsersContent, UsersImage, UsersItems, UsersText, UsersWrapper } from './Users.style'
import AddUser from '../../../components/user_comp/add_user/AddUser'
import EditUser from '../../../components/user_comp/edit_user/EditUser'





export default function Users() {
    


    const navigate = useNavigate();
    const [users, setUsers] = useState([])
    const [loader, setLoader] = useState(false) //Loader


    // TO DELET POST
    const [userIds, setUserIds] = useState('');
    const [userTitle, setUserTitle] = useState('');
    
    // overlay
    const [showBannerAdOverlay, setShowBannerAdOverlay] = useState(false);

    const [showOverlay, setShowOverlay] = useState(false);
    const [showAddUsersCard, setShowAddUsersCard] = useState(false)
    const [showEditUser, setShowEditUser] =useState(false)
    const [showViewUser, setShowViewUser] =useState(false)

    // Fetch category function
    const fetchUser = async () => {
        setLoader(true)
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/users`)
            setUsers(res.data)
            setLoader(false)
        } catch (err) {
            console.log(err)
            setLoader(false)
        }
    }
    useEffect(() => {
        fetchUser()
    }, [])




    // Edit Popup
    const handleShowEditUser = (userId) => {
        setUserIds(userId)
        setShowEditUser(true)
    }


    // Edit Popup
    const handleShowViewUser = (userId) => {
        setUserIds(userId)
        setShowViewUser(true)
    }


    // Delete Function
       // Delete Function
       const handleDelete = async (userId) => {
        setLoader(true)
        try {
          const res = await axios.delete(`${process.env.REACT_APP_URL}/api/Users/${userId}`, { withCredentials: true });
            setLoader(false)
            navigate('/users')
            alert('deleted')
        } catch (err) {
            console.log(err)
            setLoader(false)
        }
        setShowOverlay(false)
    }


    // Onclick Delete Icon
    const handleDeletClick = (deleteId, deleteTitle) =>{
        setUserIds(deleteId);
        setUserTitle(deleteTitle)
        setShowOverlay(true)

    }

   



    // View popup delete and update funct
    const ViewCardUpdateBtn = (userId) =>{
            setShowViewUser(false);
            setShowEditUser(true);
            setUserIds(userId)
    }


    const ViewCardDeletBtn = (UsersId, UsersTitle) =>{
        setShowViewUser(false);
        setShowOverlay(true);
        setUserIds(UsersId)
        setUserTitle(UsersTitle)
}


    // {
    //     loader ? <Loader title={'Users'} /> :
    // <div>  
  return (
      <>
    <UsersWrapper>
       
        <HeaderWrapper>
           <h1>All Users</h1>
           <Button 
                  btnText={'Add New'} 
                  btnColor={'blue'} 
                  btnLeftIcon={<MdOutlineAdd />}
                  btnOnClick={()=>setShowAddUsersCard(true)}
            />
        </HeaderWrapper>

<UsersContent>

        { users.map((user)=>(
                <UsersItems key={user._id}>
                     <UsersImage bg={`${process.env.REACT_APP_URL}/images/${user?.photo}`}>
                         <PostLink to={`/users/${user._id}`}></PostLink>
                     </UsersImage>

                     {/* Post Users Contents */}
                     <UsersText>
                         <PostLink to={`/users/${user._id}`}>
                            <div>
                                <PostTitleStyled fnt={"14px"} lingHeight={"30px"}>{user.username}</PostTitleStyled>
                                <div>{user.email}</div>
                                <div style={{textTransform:"capitalize"}}>{user.role}</div>
                            </div>

                         </PostLink>
            

                     <PostFormattingWrapper>
                        <PostFormatting
                            itemOnclick={()=>navigate(`/users/${user._id}`)}
                            Icon={<FaEye />}
                            text={'View Posts'}
                            iconColor={'blue'}
                        />     
                        <PostFormatting
                            itemOnclick={()=>handleShowEditUser(user._id)}
                            Icon={<FaRegEdit/>}
                            text={'Edit'}
                            iconColor={'green'}
                        />       
                         <PostFormatting
                            itemOnclick={()=>handleDeletClick(user._id, user.title)}
                            Icon={<MdDelete/>}
                            text={'Delete'}
                            iconColor={'red'}
                        />
                     </PostFormattingWrapper>
                     </UsersText>
                 </UsersItems>
            ))
        }
</UsersContent>           
    </UsersWrapper>




        {/* Create Ads Popup */}
              { showAddUsersCard &&  
              <AddUser
                closeOverlayOnClick={()=>setShowAddUsersCard(false)}
                setCloseOverlay={setShowAddUsersCard}
              />
                // <AddAds 
                  
                // />
              }
       
            
        {/* Edit Ads Popup */}
              { showEditUser &&  
              <EditUser
                    closeOverlayOnClick={()=>setShowEditUser(false)}
                    setCloseOverlay={setShowEditUser}
                    userId={userIds}
              />
        }

        {/* view Ads Popup */}
              { showViewUser &&  
                <ViewAds 
                    closeOverlayOnClick={()=>setShowViewUser(false)}
                    alternatFunc={()=>ViewCardDeletBtn(userIds, userTitle)}
                    overlayButtonClick={()=>ViewCardUpdateBtn(userIds)}
                    userId={userIds}
                />
        }





        {/* Delete Ads Popup overlay */}
        
        { showOverlay &&
           <Overlay
                contentHight={""}
                contentWidth={""}
                overlayButtonClick={()=>handleDelete(userIds)}
                closeOverlayOnClick={()=>setShowOverlay(false)}
            >
            <h3>{userTitle}</h3>
            <span>Are sure you want to</span>
            <span>delete the Users?</span> 
            </Overlay>} 

  
    </>
  )
}

  // </div>
    // }