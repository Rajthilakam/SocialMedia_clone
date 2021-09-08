import {GET_PROFILE,GET_PROFILES,PROFILE_LOADING,CLEAR_CURRENT_PROFILE, GET_FOLLOWINGS} from '../action/types';

const initialState = {
    profile: {},
    profiles: [],
    followings:[],
    loading: false
  };

/* eslint-disable import/no-anonymous-default-export */
export default function(state = initialState, action) {
    switch (action.type) {
      case PROFILE_LOADING:
        return {
          ...state,
          loading: true
        };
      case GET_PROFILE:
        console.log('in reducer')
        console.log(action.payload)
        return {
          ...state,
          profile: action.payload,
          loading: false
        };
      case GET_PROFILES:
        return {
          ...state,
          profiles: action.payload,
          loading: false
        };
        case GET_FOLLOWINGS:
          return {
            ...state,
            followings: action.payload,
            loading: false
          };  

      case CLEAR_CURRENT_PROFILE:
        return {
          ...state,
          profile: null
        };
      default:
        return state;
    }
  }  