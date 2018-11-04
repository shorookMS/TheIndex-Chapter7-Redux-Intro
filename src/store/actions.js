const ADD_AUTHOR = "ADD";
const DELETE_AUTHOR = "DELETE";

export const addAuthor = author => {
  return {
    type: ADD_AUTHOR,
    payload: author
  };
};

export const deleteAuthor = author => {
  return {
    type: DELETE_AUTHOR,
    payload: author
  };
};
