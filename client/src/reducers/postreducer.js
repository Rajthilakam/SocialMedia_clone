import {ADD_POST,GET_POSTS} from '../action/types';

const initialState = {
    posts: [],
    post: {},
    loading: false
  };

/* eslint-disable import/no-anonymous-default-export */
  export default function(state = initialState, action) { 

    switch (action.type) {
    case ADD_POST:
      console.log(action.payload)
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };

      case GET_POSTS:
        console.log(action.payload)
      return {
        ...state,
        posts: action.payload,
        loading: false
      };

      default:
          return state;
    }
  }  

  