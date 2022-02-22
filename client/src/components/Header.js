import React, { useState, useEffect } from "react";
import { getPosts } from '../actions/posts';
import  { useSelector,  useDispatch } from 'react-redux';
import '../styles/headerStyles.css'


const Header = () => {
    

    const posts = useSelector((state) => state.posts);
    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])

    
    return (
        <div className="header_banner">
            <h1> nuntius tabula </h1>
            <button onClick={() => {}} style={{"marginLeft": "auto"}}> Sign In </button>
            <button onClick={() => {}} style={{"marginRight": "15px"}}> Sign Up </button>
        </div>
    )
}


export default Header