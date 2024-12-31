import React, { useEffect, useState } from 'react';


import { ColorInput, EditCategoryContent, EditCategoryWrapper, InputWrapper } from './EditCategory.style';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../../../components/clicks/button/Button';
import { NameAndFileInput, PostPicture } from '../../posts/createpost/CreatePost.style';
import { AiFillPicture } from 'react-icons/ai';

const EditCategory = () => {

    const navigate = useNavigate();
    const [file, setFile] = useState()
    const [title, setTitle] = useState('')
    const [color, SetColor] = useState()
    let [photo, setPhoto ]= useState('');
    const [showPhoto, setShowPhoto] = useState(true);


    const [titleError, setTitleError] = useState(false)


   // const {  } = useParams()
    const {categoryId} = useParams();



    const handleInputChange = (type, e)=>{
       
        if (type === 'title') {
            setTitle(e.target.value); 
            setTitleError(false)
        }else if(type === 'color') {
            SetColor(e.target.value)
        }else if(type === 'file'){
            setFile(e.target.files[0])
            setShowPhoto(false);
        }
    }

    // Fetch category function
    const fetchCat = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/categories/${categoryId}`)
            setTitle(res.data.title)
            SetColor(res.data.color)
            setPhoto(res.data.photo)
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchCat()
    }, [categoryId])






    const handleSubmit = async (e) => {
        e.preventDefault()

        if(title === null || title === ''){
            setTitleError(true)
        }else {

       

        // const newCategory = {
        //     title,
        //     color,
        // }

        if (file) {
            const data = new FormData()
            const filename = file.name
            data.append('img', filename)
            data.append('file', file)
            photo = filename

            // img upload
            try {
                const imgUpload = await axios.post(process.env.REACT_APP_URL + '/api/upload', data)
                console.log(imgUpload.data)
            } catch (err) {
                console.log(err)
            }
        }

        // post creation
        try {
          const res = await axios.put(`${process.env.REACT_APP_URL}/api/categories/${categoryId}`,
                { title, color, photo })
            navigate(`/categories/${res.data._id}`)
            console.log(res.data)

        } catch (err) {
            console.log(err)
        }

    }
    }


    return (
        <EditCategoryWrapper>
            <EditCategoryContent onSubmit={handleSubmit}>
                <h3>Add Category</h3>
                 {/* Display Image befor posting to db */}
                 {showPhoto &&  <img src={`${process.env.REACT_APP_URL}/images/${photo}`} alt="" srcset="" />}
            { (file && (<img src={URL.createObjectURL(file)} alt="" srcset="" />))}
        
                <InputWrapper>
                <NameAndFileInput>
                    <input type='text' placeHolder={'Title'} value={title} onChange={(e)=>handleInputChange('title', e)} />

                    <label htmlFor="fileInput"><span>Post Picture</span> <AiFillPicture /> </label>
                    <PostPicture onChange={(e)=>handleInputChange('file', e)} type="file" id="fileInput" />
                    
                </NameAndFileInput>                    
                   {titleError? <>Title is required</> : ''}
                  <span>
                     <ColorInput>
                        <input
                                type={'color'}
                                value={'color'}
                                onChange={(e)=>handleInputChange('color', e)}
                            />
                     </ColorInput>

                        <div>
                            <Button
                                btnBorder={"none"}
                                btnColor={"black"}
                                btnText={'Update'}
                                btnTxtClr={'white'}
                                btnPd={"10px 20px"}
                            />
                        </div>
                    </span>  
                </InputWrapper>  
            </EditCategoryContent>
        </EditCategoryWrapper>
    );
}

export default EditCategory;