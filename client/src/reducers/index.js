import { combineReducers} from "redux";
import alertreducer from "./alertreducer";
import authreducer from "./authreducer";
import errorreducer from "./errorreducer";
import postreducer from './postreducer';

export default combineReducers ({
    auth:authreducer,
    errors:errorreducer,
    alert:alertreducer,
    post:postreducer

})