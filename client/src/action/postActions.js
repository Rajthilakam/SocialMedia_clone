import {ADD_POST} from './types';
import axios from "axios";
import { CLEAR_ERRORS,GET_ERRORS} from './types';


// Add Post
export const addPost = postData => dispatch => {
    dispatch(clearErrors());
    axios
      .post('/api/posts/createpost', postData)
      .then(res =>
        dispatch({
          type: ADD_POST,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };



// Clear errors
export const clearErrors = () => {
    return {
      type: CLEAR_ERRORS
    };
  };