import axios from 'axios';
import {GET_PROFILE} from './types';
import {GET_PROFILES} from './types';




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




