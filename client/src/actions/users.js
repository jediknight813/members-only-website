import { FETCH_ALL_POSTS, CREATE_USER, LOGIN_USER } from '../constants/actionTypes.js';
import * as api from '../api/index.js';

//action creators

export const getUsers = () =>  async (dispatch) => {
    try {
        const { data } = await api.fetchUsers();
        console.log(data)
       dispatch({type: FETCH_ALL_POSTS, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const AddUser = (user) => async (dispatch) => {
    try {
      const { data } = await api.AddUser(user);
      console.log(data)
      dispatch({ type: CREATE_USER, payload: data });

    } catch (error) {
      console.log(error);
    }
  };


  export const LoginUser = (user) => async (dispatch) => {
    try {
      const { data } = await api.LoginUser(user);
      console.log(data)
      dispatch({ type: LOGIN_USER, payload: data });

    } catch (error) {
      console.log(error);
    }
  };