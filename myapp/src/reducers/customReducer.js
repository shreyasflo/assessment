import { DEFAULT_STATE } from "../actions/defaultState";

export default (state = {}, action) => {
  switch (action.type) {
    case DEFAULT_STATE:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
