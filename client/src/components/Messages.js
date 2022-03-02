import React, { useState, useEffect } from "react";
import '../styles/contentStyles.css'
import { useSelector } from 'react-redux';
import posts from "../reducers/posts";
import PostMessage from "./PostMessage";

var signed_in = false

const Messages = () => {
    const [postArray, setPostArray] = useState([{"creator": "dave", "title": "hello world", "message": "first post"}])
    const posts = useSelector((state) => state.posts);
    const user = useSelector((state) => state.users);

    if (user.length >= 1) {
        signed_in = true
    }
    
    useEffect(() => {
        setPostArray(posts)
    }, [posts])


    if (signed_in === false) {
        return (
            <div className="messageContainerParent">
                {posts.map(Element => 
                    <div className="message">
                        <h1>{Element.creator + " posted"}</h1>
                        <h2>{Element.title}</h2>
                        <h3>{Element.message}</h3>
                    </div>
                 )}
            </div>
        )
    }
    else {
        return (
            <div>
                <div className="messageContainerParent">
                {posts.map(Element => 
                    <div className="message">
                        <h1>{Element.creator + " posted"}</h1>
                        <h2>{Element.title}</h2>
                        <h3>{Element.message}</h3>
                    </div>
                    )}
                    <PostMessage />
                </div>
            </div>
        )
    }
}

export default Messages

