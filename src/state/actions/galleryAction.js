
//! Actions to manipulate clinic state, dates, and other data
export const addCategoryAction = (newCategory) => (dispatch) => {
  console.log(newCategory)
  dispatch({ type: "ADD_CATEGORY", payload: newCategory });
};
export const addImageAction = (payload) => (dispatch) => {
  dispatch({ type: "ADD_IMAGE", payload: payload });
};

