import fetchAPI from "../server/fetchAPI";

export const DEFAULT_STATE = "DEFAULT_STATE";

export const defaultState = () => (dispatch) => {
  dispatch({
    type: DEFAULT_STATE,
    payload: fetchAPI(),
  });
};
