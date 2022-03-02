import axios from 'axios';

const post_url = 'http://localhost:5000/posts';
const user_url = 'http://localhost:5000/users';
const sign_up_url = 'http://localhost:5000/sign-up';
const login_url = 'http://localhost:5000/log-in';

const add_post_url = 'http://localhost:5000/posts/newPost'


export const fetchUsers = () => axios.get(user_url)

export const fetchPosts = () => axios.get(post_url);

export const AddUser = (newUser) => axios.post(sign_up_url, newUser);

export const LoginUser = (UserNameAndPassword) => axios.post(login_url, UserNameAndPassword);

export const AddPosts = (newPost) => axios.post(add_post_url, newPost);

