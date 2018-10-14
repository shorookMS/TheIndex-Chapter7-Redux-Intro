const ADD_AUTHOR = "ADD_AUTHOR";
const DELETE_AUTHOR = "DELETE_AUTHOR";

export const add_author = newAuthor => {
  return {
    type: ADD_AUTHOR,
    payload: newAuthor
  };
};

export const delete_author = author => {
  return {
    type: DELETE_AUTHOR,
    payload: author
  };
};
