import {ADD_POST} from '../action/types';

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

      default:
          return state;
    }
  }  

  