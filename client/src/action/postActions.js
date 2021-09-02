import {ADD_POST,GET_POSTS} from './types';
import axios from "axios";
import { CLEAR_ERRORS,GET_ERRORS,POST_LOADING} from './types';


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

// Get Posts
export const getPosts = () => dispatch => {
  dispatch(setPostLoading());
  axios
    .post('/api/profile/userfollow/post')
    .then(res =>
      dispatch({
        type: GET_POSTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_POSTS,
        payload: null
      })
    );
};









export const setPostLoading = () => {
  return {
    type: POST_LOADING
  };
};


// Clear errors
export const clearErrors = () => {
    return {
      type: CLEAR_ERRORS
    };
  };