import axios from 'axios';
import {GET_PROFILE} from './types';
import {GET_PROFILES,GET_FOLLOWINGS,GET_FRIENDS} from './types';




//GET FRIENDS LIST IN PROFILE PAGE
export const getFriendsList = () => dispatch => {
   
    axios
      .post('/api/profile/followings')
      .then(res =>
        dispatch({
          type: GET_PROFILES,
          payload: res.data
        })
      )
      .catch(err =>
        dispatch({
          type: GET_PROFILES,
          payload: null
        })
      );
  };


//GET FRIENDS LISTBY USERID
export const getFriendsListById = (userid) => dispatch => {
   
  axios
    .post(`/api/profile/followings/${userid}`)
    .then(res =>
      dispatch({
        type: GET_FOLLOWINGS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_FOLLOWINGS,
        payload: null
      })
    );
}; 

//GET CURRENT PROFILE
export const getCurrentProfile = () => dispatch => {
   
  axios
    .get('/api/profile')
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: null
      })
    );
};


//GET PROFILE BY USERID
export const getProfileById = (userid) => dispatch => {
   
  axios
    .get(`/api/profile/user/${userid}`)
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: null
      })
    );
};

//CREATE PROFILE
export const createProfile = () => dispatch => {   
  axios
    .post('/api/profile')
    .then(res =>
      
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: null
      })
    );
};

//Get Suggestions list

export const getSuggestions = () => dispatch => {
   
  axios
    .post('/api/profile/suggestions')
    .then(res =>
      dispatch({
        type: GET_FOLLOWINGS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_FOLLOWINGS,
        payload: null
      })
    );
}; 

//Follow user
export const followUser = (id) => dispatch => {
   
  axios
    .post(`/api/profile/follow/${id}`)
    .then(res =>
      dispatch({
        type: GET_FOLLOWINGS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_FOLLOWINGS,
        payload: null
      })
    );
}; 

//unfollow friends
export const unfollowUser = (id) => dispatch => {
   
  axios
    .post(`/api/profile/unfollow/${id}`)
    .then(res =>
      dispatch({
        type: GET_FOLLOWINGS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_FOLLOWINGS,
        payload: null
      })
    );
}; 


//search friends
export const searchFriends = (name) => dispatch => {
   
  axios
    .post('/api/profile/searchfriends',name)
    .then(res =>
      dispatch({
        type: GET_FRIENDS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_FRIENDS,
        payload: null
      })
    );
}; 

