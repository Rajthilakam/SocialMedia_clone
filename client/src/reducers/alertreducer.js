import { SET_ALERT_MSG} from "../action/types";
//import isEmpty from "../validation/is-empty";

const initialState = {}

/* eslint-disable import/no-anonymous-default-export */
export default function (state=initialState,action){
    switch(action.type){
        case SET_ALERT_MSG:
            return action.payload           
        default:
            return state
    }
}
