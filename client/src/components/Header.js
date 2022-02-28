import React, { useState, useEffect } from "react";
import { getPosts } from '../actions/posts';
import  { useSelector,  useDispatch } from 'react-redux';
import '../styles/headerStyles.css'
import {useNavigate} from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const posts = useSelector((state) => state.posts);
    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])

    
    return (
        <div className="header_banner">
            <h1> nuntius tabula </h1>
            <button onClick={() => {navigate("/Login")}} style={{"marginLeft": "auto"}}> Login </button>
            <button onClick={() => {navigate("/SignUp")}} style={{"marginRight": "15px"}}> Sign Up </button>
        </div>
    )
}


export default Header