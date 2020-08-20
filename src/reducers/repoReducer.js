import { ADD_REPO_TO_LIST, SET_REPO_DATA } from "../actions/repoActions";
import { saveLocalRepoList } from "../utils/localStorage";

const DEFAULT_STATE = [];

const repoReducer = (state = DEFAULT_STATE, action) => {
  const { type, data } = action;
  switch (type) {
    case SET_REPO_DATA: {
      return [...data];
    }
    case ADD_REPO_TO_LIST: {
      const newState = [...state, data];
      saveLocalRepoList(newState);
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default repoReducer;
