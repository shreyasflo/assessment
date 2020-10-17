import getData from "../server/fetchAPI";
export const INTIALIZE_STATE = "INTIALIZE_STATE";
export const initializeState = () => dispatch => {
  dispatch({
    type: INTIALIZE_STATE,
    payload: getData()
  });
};