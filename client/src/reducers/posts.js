import { FETCH_ALL_POSTS, ADD_POST} from '../constants/actionTypes.js';


// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], action) => {
    switch (action.type) {
      case FETCH_ALL_POSTS:
        return action.payload;
      case ADD_POST:
        return [...posts, action.payload];
      default:
        return posts;
    }
  };