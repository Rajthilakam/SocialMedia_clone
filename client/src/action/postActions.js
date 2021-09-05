import {ADD_POST,GET_POSTS,GET_POST,DELETE_POST,DELETE_COMMENT} from './types';
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


//GET USERPOSTS
export const getUserPosts = () => dispatch => {
  dispatch(setPostLoading());
  axios
    .get('/api/posts/user/posts')
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

// Get User and Followers Posts
export const getPosts = () => dispatch => {
  dispatch(setPostLoading());
  axios
    .post('/api/profile/friendfollow/post')
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

//Get Post by id
export const getPost = postid => dispatch => {
  dispatch(setPostLoading());
  axios
    .get(`/api/posts/${postid}`)
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_POST,
        payload: null
      })
    );
};

// Add Comment
export const addComment = (postId, commentData) => dispatch => {
  dispatch(clearErrors());
  axios
    .post(`/api/posts/comment/${postId}`, commentData)
    .then(res =>
      dispatch({
        type: GET_POST,
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

// Add Comment
export const addCommentNewsFeed = (postId, commentData) => dispatch => {
  dispatch(clearErrors());
  axios
    .post(`/api/posts/comment/${postId}`, commentData)
    .then(res =>  dispatch(getPosts()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//deletepost
export const deletePost = id => dispatch => {
  axios
    .delete(`/api/posts/deletepost/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_POST,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//LIKE POST
export const likePost = id => dispatch => {
  axios
    .post(`/api/posts/like/${id}`)
    .then(res => dispatch(getPosts()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//UNLIKE POST
export const unLikePost = id => dispatch => {
  axios
    .post(`/api/posts/unlike/${id}`)
    .then(res => dispatch(getPosts()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//DELETE COMMENT
export const deleteCommentFeed = (postId,comment_id) => dispatch => {
  axios
    .delete(`/api/posts/comment/${postId}/${comment_id}`)
    .then(res => dispatch(getPosts())
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
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