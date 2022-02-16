import { FETCH_ALL_POSTS } from '../constants/actionTypes.js';
import * as api from '../api/index.js';

// action creators

export const getUsers = () =>  async (dispatch) => {
    try {
        const { data } = await api.fetchUsers();
        console.log(data)
        dispatch({type: FETCH_ALL_POSTS, payload: data})
    } catch (error) {
        console.log(error)
    }
}