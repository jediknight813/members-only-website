import React, { useState, useEffect } from "react";
import { getPosts } from '../actions/posts';
import  { useSelector,  useDispatch } from 'react-redux';
import '../styles/headerStyles.css'
import {useNavigate} from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.users);
    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])

    if (user.length >= 1) {
        return (
            <div className="header_banner">
                <h1 style={{"cursor": "pointer"}} onClick={() => {navigate("/")}} > nuntius tabula </h1>
                <h1 onClick={() => {navigate("/")}} style={{"marginLeft": "auto", paddingRight: "20px"}}> {user[0]} </h1>
            </div>
        )
    }
    else {
        return (
            <div className="header_banner">
                <h1 style={{"cursor": "pointer"}} onClick={() => {navigate("/")}} > nuntius tabula </h1>
                <button onClick={() => {navigate("/Login")}} style={{"marginLeft": "auto"}}> Login </button>
                <button onClick={() => {navigate("/SignUp")}} style={{"marginRight": "15px"}}> Sign Up </button>
            </div>
        )
    }
}


export default Header