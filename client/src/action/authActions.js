import { SET_CURRENT_USER } from "./types";
import { GET_ERRORS } from "./types";
import { SET_ALERT_MSG } from "./types";
import axios from "axios";
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
//import Toasts from "../components/common/successtoast";
//import M from 'materialize-css'


//Register
export const registerUser = (userData,history) => dispatch => {
    axios
    .post('/api/users/register', userData)
    .then(res => history.push('/login'))
    .catch(err => 
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }));
}

//Login
export const loginUser = (userData,history) => dispatch => {
  axios
  .post("/api/users/login", userData)
  .then((res) => {
    //save the token to localstorage
    const {token} = res.data;
    localStorage.setItem('jwtToken', token);
    //set token to auth header
    setAuthToken(token);
    //decode token
    const decoded = jwt_decode(token);
    //Write user info to redux
    dispatch({
      type: SET_CURRENT_USER,
      payload: decoded,
    });
  })
  .catch((err) =>
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    })
  );
}
  
//LOGOUT  
export const logoutUser = () => dispatch => {
  //Remove token from ls
  localStorage.removeItem('jwtToken');
  //Remove token from axios header
  setAuthToken(false);
  //Reset user in the redux store
  dispatch({
    type: SET_CURRENT_USER,
    payload: {},
  });
}

//FORGOT PASSWORD

export const forgotPassword = (userEmail) => dispatch => {

  axios
  .post('/api/users/reset',userEmail)
  .then((res) => {
    dispatch({
      type: SET_ALERT_MSG,
      payload: res.data
    });
  }
      )
  .catch((err) =>
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    })
  )
}

//New Password

export const newPassword = (userPassword) => dispatch => {

  axios
  .post('/api/users/new-password',userPassword)
  .then((res) => {
    dispatch({
      type: SET_ALERT_MSG,
      payload: res.data
    });
  }
      )
  .catch((err) =>
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data,
    })
  )
}