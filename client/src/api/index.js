import axios from 'axios';

const post_url = 'https://nuntia-tabula.herokuapp.com/posts';
const user_url = 'https://nuntia-tabula.herokuapp.com/users';
const sign_up_url = 'https://nuntia-tabula.herokuapp.com/sign-up';
const login_url = 'https://nuntia-tabula.herokuapp.com/log-in';

const add_post_url = 'https://nuntia-tabula.herokuapp.com/posts/newPost'


export const fetchUsers = () => axios.get(user_url)

export const fetchPosts = () => axios.get(post_url);

export const AddUser = (newUser) => axios.post(sign_up_url, newUser);

export const LoginUser = (UserNameAndPassword) => axios.post(login_url, UserNameAndPassword);

export const AddPosts = (newPost) => axios.post(add_post_url, newPost);

