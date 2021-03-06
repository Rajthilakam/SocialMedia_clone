import {ADD_POST,GET_POSTS,DELETE_POST,GET_POST,DELETE_COMMENT} from '../action/types';

const initialState = {
    posts: [],
    post: {},
    comments:[],
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

      case GET_POST:
        console.log(action.payload)
      return {
        ...state,
        post: action.payload,
        loading: false
      };

      case DELETE_POST:
        return {
          ...state,
          posts: state.posts.filter(post => post._id !== action.payload)
          //posts:action.payload
        };

        case DELETE_COMMENT:
        return {
          ...state,
          comments: state.comments.filter(comment => comment._id !== action.payload)
          //posts:action.payload
        };



      default:
          return state;
    }
  }  

  