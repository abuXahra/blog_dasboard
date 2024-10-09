import React, { useContext, useEffect, useState } from 'react';
import { CatContainer, CatStyled, CategorySpan, PostLinks, ProfileContent, ProfileCredentials, ProfileData, ProfilePicture, ProfilePost, ProfileWrapper, VidDiv } from './Profile.style';
import { CategoryPosts, CategoryPostsImag, CategoryPostsText } from '../../../components/category/Category.style';
import { DateIconStyled, DateStyled, DateTitledStyled, EditIconStyled, EditStyled, EditTitledStyled, PostIconStyled, PostLink, PostTitleStyled } from '../../home/Home.style';
import { AiFillEdit, AiOutlineLogout } from 'react-icons/ai';
import { FaRegClock, FaRegEdit, FaTrash, FaTrashAlt } from 'react-icons/fa';
import placeHolder from '../../../images/placeholder_image.png'
import { MarginTop } from '../../../components/sidebar/Sidebar.style';
import Input from '../../../components/input/Input';
import Button from '../../../components/clicks/button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../../components/context/UserContext';
import axios from 'axios';
import Links from '../../../components/clicks/links/Links';
import Loader from '../../../components/loader/Loader';
import AddCategory from "../../add-category/AddCategory";
import Pagination from '../../../components/pagination/Pagination';

const Profile = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const { user } = useContext(UserContext);
    const { setUser } = useContext(UserContext);
    const [loader, setLoader] = useState(false)
    const [userUpdated, setUserUpdated] = useState(false)
    const [userPost, setUserPost] = useState('')
    const [category, setCategory] = useState('')
    const [dbCat, setDbCat] = useState([])
    const [noResults, setNoResults] = useState(false)
    const [catColor, setCatColor] = useState()

    const [isAdmin, setIsAdmin] = useState(false);

    

    // Inputs  variable vinctions
    const nameHandler = (e) => {
        setName(e.target.value);
    }

    const emailHandler = (e) => {
        setEmail(e.target.value);
    }


    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }


    // User Update Fuction
    const updateHandler = async () => {
        const userUpdate = {
            username: name,
            email: email,
            userId: user._id,
            password: password,
        }
        setLoader(true)
        setUserUpdated(false)
        try {
            const res = await axios.put(`${process.env.REACT_APP_URL}/api/users/${user._id}`, userUpdate, { withCredentials: true })
            console.log(res.data)
            setUserUpdated(true)
            setLoader(false)
        } catch (err) {
            setUserUpdated(false)
            console.log(err)
        }

    }






    // Logout function
    const handleLogout = async () => {

        try {
            const res = await axios.get(process.env.REACT_APP_URL + '/api/auth/logout', { withCredentials: true })
            setUser(null)
            navigate('/login')
        } catch (err) {
            console.log(err)
        }
    }

    // User Role
    const [userRole, setUserRole] = useState();
  
    // fetch profile data
    const fetchProfile = async () => {
        try {
            const res = await axios.get(process.env.REACT_APP_URL + '/api/users/' + user._id)
            setName(res.data.username)
            setEmail(res.data.email)
            setPassword(res.data.password)
            setUserRole(res.data.role); 
             
        } catch (err) {
            console.log(err)
        }
    }


console.log('userRole', userRole)

const userRoleFunc = () =>{
    if (userRole === 'admin') {
        setIsAdmin(true)
    }else if(userRole === 'subadmin'){
        setIsAdmin(true)
    }else{
        setIsAdmin(false)
    }
}


    // variable for pagination
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(1);

    // fetch user post function
    const fetchUserPost = async () => {
        setLoader(true)
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/posts/user/${user._id}?page=${page}`)
            const { data, pages: totalPages } = await res.data;

            setPages(totalPages);
            setUserPost(data)
            setLoader(false)
            console.log(`user post are" ${res.data}`)
            if (res.data.length === 0) { //if search result not dund
                setNoResults(true)
            } else {
                setNoResults(false)
            }

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchProfile();
        fetchUserPost();
    }, [user?._id, page])


    // Fetch category function
    const fetchCat = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/categories`)
            setDbCat(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchCat()
    }, [])



    // Delete User
    const deleteHandler = async (e) => {
        try {
            const res = await axios.delete(`${process.env.REACT_APP_URL}/api/users/${user._id}`, { withCredentials: true })
            setUser(null)
            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }



    // create category function
    const postCategory = async () => {
        try {
            const res = await axios.post(`${process.env.REACT_APP_URL}/api/categories/create`,
                { title: category, color: catColor }, { withCredentials: true })
            setCategory('')
        } catch (err) {
            console.log(err)
        }
    }



    // User Delete category Fuction
    const deleteCat = async (categoryId) => {
        try {
            const res = await axios.delete(`${process.env.REACT_APP_URL}/api/categories/${categoryId}`, { withCredentials: true })
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }


    return ( 
        <ProfileWrapper> {loader ? <Loader /> :
            <ProfileContent>
                {/* USER POSTS */}

                <ProfilePost>
                    <h3>My Posts</h3>
                    {!noResults ? (
                        userPost && userPost?.map((post) => (
                            <CategoryPosts key={post._id}>
                                <CategoryPostsImag>
                                    <PostLink to={`/post/${post._id}`}>
                                        <img src={`${process.env.REACT_APP_URL}/images/${post.photo}`} alt="" />
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
                                    <p>{post.desc.substring(0, 230)}</p>

                                    <CategorySpan>
                                        {
                                            post.categories.map((cat) => (
                                                <div key={cat._id}>
                                                    <PostLinks to={`/category/${cat._id}`} linkColor='white'>{cat.title}</PostLinks>
                                                </div>
                                            ))
                                        }
                                    </CategorySpan>
                                </CategoryPostsText>


                            </CategoryPosts>
                        ))) : ((<div style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            gap: "20px",
                            marginTop: "100px",
                            alignItems: "center",
                            justifyContent: "center"
                        }}><div>You are yet to make post.</div>  <PostLinks to={'/new'}>Click here to create post </PostLinks> </div>))

                    }
                    <Pagination page={page} pages={pages} changePage={setPage} />
                </ProfilePost>

                {/* INPUT FORM CONTAINER */}
                <ProfileData onSubmit={updateHandler}>
                    <h3>Profile</h3>
                    <ProfilePicture>
                        <img src={placeHolder} alt="" srcset="" />
                    </ProfilePicture>
                    <MarginTop mt={"20px"} />
                    {/* INPUT FORM */}
                    <ProfileCredentials onSubmit={updateHandler}>
                        <Input
                            inputType={'text'}
                            inputValue={name}
                            inputColor={"#000"}
                            onchangeHandler={nameHandler}
                            placeHolder={'username'}

                        />
                        <Input
                            inputType={'email'}
                            inputValue={email}
                            inputColor={'#000'}
                            onchangeHandler={emailHandler}
                            placeHolder={'email'}
                            disabled={'true'}
                        />
                        <Input
                            inputType={'password'}
                            inputValue={password}
                            inputColor={'#000'}
                            onchangeHandler={passwordHandler}
                            placeHolder={'password'}
                        />
                        {
                            user &&
                            <span>

                                <Button
                                    btnBorder={"none"}
                                    btnColor={"green"}
                                    btnText={'UPDATE'}
                                    btnTxtClr={'white'}
                                    btnPd={"8px 10px"}
                                />


                                <div onClick={deleteHandler}>
                                    DELETE
                                </div>
                                <div onClick={handleLogout}>
                                    <AiOutlineLogout /> LOGOUT
                                </div>
                            </span>
                        }
                        <VidDiv>
                            <div onClick={() => navigate('/new')}>Add Post</div>
                            <div onClick={() => navigate('/video')}>Add Video Post</div>
                        </VidDiv>
                    </ProfileCredentials>
                    {userUpdated && <div>fghfghjhk jkhkjh jkhk hk hk jh k</div>}

                    <AddCategory
                        value={category}
                        placeHolder={'Add Category'}
                        onchange={(e) => (setCategory(e.target.value))}
                        sumbitHandler={postCategory}
                        valueColor={catColor}
                        onchangeColor={(e) => (setCatColor(e.target.value))}
                        btnText={"Add Category"}
                    />


                        {/* ADDING AND EDITING CATEGORY ONLY ADMIN/SUBADMIN*/}
                {userRoleFunc && isAdmin &&
                 <CatContainer>
                        {
                            dbCat.map((cat) => (
                                <CatStyled edCl={cat.color} key={cat._id}>
                                    <span onClick={() => (navigate(`/category/${cat._id}`))}>{cat.title}</span>
                                    <div>
                                        <span onClick={() => (navigate(`/editcategory/${cat._id}`))}><FaRegEdit /></span>
                                        <span onClick={() => { deleteCat(cat._id) }}><FaTrashAlt /></span>
                                    </div>
                                </CatStyled>
                            ))
                        }
                    </CatContainer>
                }
                    {/* Advert */}
                    {/* Top Banner */}
                    {/* SideBar */}
                </ProfileData>
            </ProfileContent>}
        </ProfileWrapper> 
    );
}


export default Profile;



