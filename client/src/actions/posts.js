import { FETCH_ALL_POSTS, ADD_POST } from '../constants/actionTypes.js';
import * as api from '../api/index.js';

// action creators

export const getPosts = () =>  async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        //console.log(data)
        dispatch({type: FETCH_ALL_POSTS, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const AddPost = (post) => async (dispatch) => {
    try {
      const { data } = await api.AddPosts(post);
      //console.log(data)
      dispatch({ type: ADD_POST, payload: data });

    } catch (error) {
      console.log(error);
    }
  };