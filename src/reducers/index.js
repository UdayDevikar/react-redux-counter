import { combineReducers } from "redux";
import counter from "./counter";
import { toggleReducer } from "./toggle";

export default combineReducers({counter, toggleReducer})