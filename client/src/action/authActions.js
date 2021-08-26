//import { SET_CURRENT_USER } from "./types";
import { GET_ERRORS } from "./types";
import axios from "axios";
import Toasts from "../components/common/successtoast";
//import M from 'materialize-css'

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