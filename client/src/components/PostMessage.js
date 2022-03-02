import React from "react";

import  { useSelector,  useDispatch } from 'react-redux';
import '../styles/contentStyles.css'
import { AddPost } from '../actions/posts'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';


const PostMessage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.users);
    const [UserPost, SetUserPost] = useState({"title": '', "creator": user[0], "message": ''})
    

    const clear = () => {
        SetUserPost({"title": '', "creator": '', "message": ''});
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(UserPost)
        dispatch(AddPost(UserPost));
        clear()
        navigate("/")
      };

    return (
        <div className="PostMessageParentContaienr">
            <h1>Post Message</h1>
            <form action="" method="POST" onSubmit={handleSubmit}>
                <div className='sign_in_input_parent'>
                    <label for="title">Title</label>
                    <input className='input_container' name="title"  type="text" value={UserPost.title} onChange={(e) => SetUserPost({ ...UserPost, title: e.target.value })}/>
                </div>
                <div className='sign_in_input_parent'>
                    <label for="message">Message</label>
                    <input className='input_container' name="message" type="text" value={UserPost.message} onChange={(e) => SetUserPost({ ...UserPost, message: e.target.value })}/>
                </div>
                <div className='sign_in_button_parent'>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}


export default PostMessage