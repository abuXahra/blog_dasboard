import React, { useState } from 'react';


import { ColorInput, CreateCategoryContent, CreateCategoryWrapper, InputWrapper } from './CreateCategory.style';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../components/clicks/button/Button';
import { NameAndFileInput, PostPicture } from '../../posts/createpost/CreatePost.style';
import { AiFillPicture } from 'react-icons/ai';

const CreateCategory = () => {

    const navigate = useNavigate();
    const [file, setFile] = useState()
    const [title, setTitle] = useState('')
    const [color, SetColor] = useState()
    let photo = '';


    const [titleError, setTitleError] = useState(false)


    const titleChange = (event) =>{
        setTitle(event.target.value); 
        setTitleError(false);
    }
    
    const colorChange = (event) =>{
        SetColor(event.target.value); 
    }
    


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
            // const res = await axios.post(`${process.env.REACT_APP_URL}/api/categories/create`, newCategory, )// { withCredentials: true })
            const res = await axios.post(`${process.env.REACT_APP_URL}/api/categories/create`,
                { title, color, photo }, { withCredentials: true })
            navigate(`/categories/${res.data._id}`)
            console.log(res.data)

        } catch (err) {
            console.log(err)
        }

    }
    }




    



    return (
        <CreateCategoryWrapper>
            <CreateCategoryContent onSubmit={handleSubmit}>
                <h3>Add Category</h3>
                 {/* Display Image befor posting to db */}
                    {file && (<img src={URL.createObjectURL(file)} alt="" srcset="" />)}
                <InputWrapper>
                <NameAndFileInput>
                    <input type='text' placeHolder={'Title'} value={title} onChange={titleChange} />

                    <label htmlFor="fileInput"><span>Post Picture</span> <AiFillPicture /> </label>
                    <PostPicture onChange={(e) => setFile(e.target.files[0])} type="file" id="fileInput" />
                    
                </NameAndFileInput>                    
                   {titleError? <>Title is required</> : ''}
                  <span>
                     <ColorInput>
                        <input
                                type={'color'}
                                value={'color'}
                                onChange={colorChange}
                            />
                     </ColorInput>

                        <div>
                            <Button
                                btnBorder={"none"}
                                btnColor={"black"}
                                btnText={'Create'}
                                btnTxtClr={'white'}
                                btnPd={"10px 20px"}
                            />
                        </div>
                    </span>  
                </InputWrapper>  
            </CreateCategoryContent>
        </CreateCategoryWrapper>
    );
}

export default CreateCategory;