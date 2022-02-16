import { FETCH_ALL_POSTS} from '../constants/actionTypes.js';


// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], action) => {
    switch (action.type) {
      case FETCH_ALL_POSTS:
        return action.payload;
      default:
        return posts;
    }
  };