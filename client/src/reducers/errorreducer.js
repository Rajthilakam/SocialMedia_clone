/* eslint-disable import/no-anonymous-default-export */

import { GET_ERRORS,CLEAR_ERRORS } from "../action/types";

const initialState = {}


export default function(state=initialState, action) {
    switch(action.type){
      case GET_ERRORS:       
        return action.payload 
      
      case CLEAR_ERRORS:
          return state;  
      default:
        return state;
    }
  }