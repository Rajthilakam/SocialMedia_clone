import { SET_CURRENT_USER } from "../action/types"

/* eslint-disable import/no-anonymous-default-export */
const initialState = {
    isAuthenticated:false,
    user:{}
}

export default function (state=initialState,action){
    switch(action.type){
        case SET_CURRENT_USER:
            return {
                ...state,
                user:action.payload
            }

        default:
            return state
    }
}