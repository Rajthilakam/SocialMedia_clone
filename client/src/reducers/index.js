import { combineReducers} from "redux";
import alertreducer from "./alertreducer";
import authreducer from "./authreducer";
import errorreducer from "./errorreducer";
import postreducer from './postreducer';
import profilereducer from './profilereducer';

export default combineReducers ({
    auth:authreducer,
    errors:errorreducer,
    alert:alertreducer,
    post:postreducer,
    profile:profilereducer

})