import { getRequest } from "../../apis/axiosInstance";

//! Actions to manipulate clinic state, dates, and other data
export const dateAction = (date) => (dispatch) => {
  dispatch({ type: "ADD_CATEGORY", payload: date });
};


