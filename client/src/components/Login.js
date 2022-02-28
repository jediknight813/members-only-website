import  { useSelector,  useDispatch } from 'react-redux';
import '../styles/contentStyles.css'
import { LoginUser } from '../actions/users'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [UserSignIn, SetUserSignIn] = useState({"name": '', "password": ''})


    const clear = () => {
        SetUserSignIn({"name": '', "password": ''});
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(UserSignIn)
        dispatch(LoginUser(UserSignIn));
        clear()
        navigate("/")
      };

    return (
        <div className="sign_in_parent">
            <h1>Login</h1>
            <form action="" method="POST" onSubmit={handleSubmit}>
                <div className='sign_in_input_parent'>
                    <label for="username">Username</label>
                    <input className='input_container' name="username" placeholder="username" type="text" value={UserSignIn.name} onChange={(e) => SetUserSignIn({ ...UserSignIn, name: e.target.value })} />
                </div>
                <div className='sign_in_input_parent'>
                    <label for="password">Password</label>
                    <input className='input_container' name="password" placeholder='password' type="password" value={UserSignIn.password} onChange={(e) => SetUserSignIn({ ...UserSignIn, password: e.target.value })}/>
                </div>
                <div className='sign_in_button_parent'>
                    <button>Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default Login