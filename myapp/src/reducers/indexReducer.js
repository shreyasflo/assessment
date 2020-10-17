import { combineReducers } from "redux";
import customReducer from "./customReducer";

export default combineReducers({
  custom: customReducer
});
