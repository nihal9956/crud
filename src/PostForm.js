import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { CREATE_POST } from './ActionType/actionType'
import './PostForm.css'
function PostForm() {

    let titleInput=React.createRef()
    let postInput=React.createRef()

     const dispatch = useDispatch()

     useEffect(()=>{
     
         return  titleInput.current.focus();
    
     },[])

    function handleSubmit(e){
        e.preventDefault();

        dispatch({
            type:CREATE_POST,
            data:{
                title:titleInput.current.value,
                post:postInput.current.value,
                id:new Date(),
                edit:false
            }

        })
        titleInput.current.value=null
        postInput.current.value=null

       
    }
    return (
        <div className='form__container'>
            
            <form autoComplete='off'>
                <input type='text' name='title' ref={titleInput}/><br/><br/>
                <textarea rows='3' cols='18' ref={postInput}/><br/><br/>
                <button type="submit" onClick={handleSubmit}>Post</button>
            </form>
            
        </div>
    )
}

export default PostForm
