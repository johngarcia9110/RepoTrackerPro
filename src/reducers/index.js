import { combineReducers } from "redux";
import repoReducer from "./repoReducer";

// Using combineReducers preemptively to avoid refactoring in the future.
export default combineReducers({
  repoList: repoReducer,
});
