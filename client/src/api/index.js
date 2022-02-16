import axios from 'axios';

const post_url = 'http://localhost:5000/posts';
const user_url = 'http://localhost:5000/users';


export const fetchUsers = () => axios.get(user_url)

export const fetchPosts = () => axios.get(post_url);
