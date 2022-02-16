import React, { useState, useEffect } from "react";
import { getPosts } from '../actions/posts';
import  { useSelector,  useDispatch } from 'react-redux';


const Header = () => {
    
    const posts = useSelector((state) => state.posts);

    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])

    
    return (
        <div>
            {posts}
            <p>hello world</p>
        </div>
    )
}


export default Header