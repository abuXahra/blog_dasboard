
import React, { useContext, useEffect, useState } from 'react';
import { FaArrowDown, FaArrowUp, FaRegEdit, FaTrashAlt } from 'react-icons/fa';
// import { EditCatOptions, EditCatOptionsWrapper, EditPostCat, EditPostForm, EditPostWrapper, DeletCat, NameAndFileInput, PostPicture, TextAreaStyled } from './EditPost.style';
import { AiFillPicture } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import ReactQuill from 'react-quill';
import { DeletCat, EditCatOptions, EditCatOptionsWrapper, EditPostCat, EditPostForm, EditPostWrapper, NameAndFileInput, PostPicture, TextAreaStyled } from './EditPost.style';
import { UserContext } from '../../../../components/context/UserContext';
import Loader from '../../../../components/loader/Loader';
import Button from '../../../../components/clicks/button/Button';


const EditPost = () => {

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [file, setFile] = useState('')
    const [category, setCategory] = useState([]);
    const [dbCategory, setDbCategory] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [showCat, setShowCat] = useState(false);
    const [arroIcon, setArroIcon] = useState(<FaArrowDown />)
    const {postId} = useParams()
    console.log(postId)
    const { user } = useContext(UserContext)
    const navigate = useNavigate()
    const [loader, setLoader] = useState(false)
    const [post, setPost] = useState({})
    const [postPic, setPostPic] = useState('')

    // Fetch single post function
    const fetchPost = async () => {
        setLoader(true)
        try {
            const res = await axios.get(process.env.REACT_APP_URL + `/api/posts/` + postId);
            setPost(res.data)
            setTitle(res.data.title)
            setFile(res.data.photo)
            setPostPic(res.data.photo)
            setDesc(res.data.desc)
            setCategory(res.data.categories)
            setLoader(false)
        } catch (err) {
            console.log(err)
            setLoader(false)
        }
    }

    useEffect(() => {
        fetchPost();
    }, [postId])


    // function to display or hide check value
    const handleShowCat = () => {
        setShowCat(!showCat)
        if (showCat) {
            setArroIcon(<FaArrowDown />)
        } else if (!showCat) {
            setArroIcon(<FaArrowUp />)
        }

    }


    // Handle checked value options
    const handleCategoryChange = (categoryId) => {
        // Update selected categories based on checkbox selection
        const updatedSelected = [...selectedCategories];
        if (updatedSelected.includes(categoryId)) {
            updatedSelected.splice(updatedSelected.indexOf(categoryId), 1);
        } else {
            updatedSelected.push(categoryId);
        }
        setSelectedCategories(updatedSelected);
    };

    // Post Update Function
    const handleUpdate = async (e) => {
        e.preventDefault()
        const updatedPost = {
            title,
            desc,
            username: user.username,
            userId: user._id,
            categories: selectedCategories
        }

        if (file) {
            const data = new FormData()
            const filename = file.name
            data.append('img', filename)
            data.append('file', file)
            updatedPost.photo = filename

            // img upload
            try {
                const imgUpload = await axios.post(process.env.REACT_APP_URL + '/api/upload', data)
                console.log(imgUpload.data)
            } catch (err) {
                console.log(err)
            }
        }

        // post update
        try {
            const res = await axios.put(`${process.env.REACT_APP_URL}/api/posts/${postId}`, updatedPost, { withCredentials: true })
            navigate(`/post/${postId}`)
        } catch (error) {

        }
    }



    // delete category function
    const handleDelete = async () => {
        setLoader(true)
        try {
            // const res = await axios.delete(URL + `/api/posts/` + postId, { withCredentials: true });
            setLoader(false)
            navigate('/')
        } catch (err) {
            console.log(err)
            setLoader(false)
        }
    }


    const fetchCategory = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/categories/`)
            console.log('=========================== our categories==================================\n');
            console.log(res.data);
            console.log('===========================End  our categories==================================\n');
            setDbCategory(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchCategory();
    }, [])



    // for reach text editor REACT-QUILL:
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ]
    }

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ]


    return (<>{loader ? <Loader /> :
        <EditPostWrapper>
            <h1>Edit Post</h1>
            {/* Display Image befor posting to db */}
            {file ?
                (<img src={`${process.env.REACT_APP_URL}/images/${postPic}`} alt="" srcset="" />) : 
                (<img src={`${process.env.REACT_APP_URL}/images/${postPic}`} alt="" srcset="" />)
                
            }
             
            <DeletCat>
                {post.categories?.map((cat) => (
                    <span onClick={handleDelete} key={cat._id}><FaTrashAlt /><p>{cat.title}</p></span>
                ))
                }
            </DeletCat>

            <EditPostForm onSubmit={handleUpdate}>
                <NameAndFileInput>
                    <input type='text' value={title} onChange={(e) => { setTitle(e.target.value) }} />
                    <label htmlFor="fileInput"><span>Post Picture<AiFillPicture /></span> </label>
                    <PostPicture onChange={(e) => { setFile(e.target.files[0]) }} type="file" id="fileInput" />
                </NameAndFileInput>

                {/* <textarea value={desc} onChange={(e) => { setDesc(e.target.value) }} cols="23" col rows={'23'} placeholder=''></textarea> */}
                <TextAreaStyled><ReactQuill modules={modules} formats={formats} value={desc} onChange={setDesc} placeHolder='post content' /></TextAreaStyled>

                <EditPostCat onClick={handleShowCat}>Category {arroIcon}</EditPostCat>
                <EditCatOptionsWrapper>
                    {
                        showCat && dbCategory?.map((cat) => (
                            <EditCatOptions key={cat._id}>
                                <input type='checkbox'
                                    value={cat._id}
                                    onChange={() => handleCategoryChange(cat._id)}
                                />
                                <label htmlFor={cat._id}>{cat.title}</label>

                            </EditCatOptions>
                        ))
                    }
                </EditCatOptionsWrapper>
                <div><Button btnText={'UPDATE'} btnPd={'15px 30px'} /></div>
            </EditPostForm>
        </EditPostWrapper>
    }
    </>
    );
}
export default EditPost;
