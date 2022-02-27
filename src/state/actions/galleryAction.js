
//! Actions to manipulate clinic state, dates, and other data
export const addCategoryAction = (newCategory) => (dispatch) => {
  dispatch({ type: "ADD_CATEGORY", payload: newCategory });
};
export const addImageAction = (payload) => (dispatch) => {
  dispatch({ type: "ADD_IMAGE", payload: payload });
};
export const addFavouriteAction = (payload) => (dispatch) => {
  dispatch({ type: "ADD_TO_FAVOURITE", payload: payload });
};

