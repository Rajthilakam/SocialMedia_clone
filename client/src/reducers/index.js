import { combineReducers} from "redux";
import authreducer from "./authreducer";
import errorreducer from "./errorreducer";

export default combineReducers ({
    auth:authreducer,
    errors:errorreducer
})