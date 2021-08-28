import { combineReducers} from "redux";
import alertreducer from "./alertreducer";
import authreducer from "./authreducer";
import errorreducer from "./errorreducer";

export default combineReducers ({
    auth:authreducer,
    errors:errorreducer,
    alert:alertreducer,
})