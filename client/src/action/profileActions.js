import axios from 'axios';
import {GET_POSTS} from './types';
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
