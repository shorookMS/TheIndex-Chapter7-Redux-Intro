const ADD_AUTHOR = "ADD_AUTHOR";
const DELETE_AUTHOR = "DELETE_AUTHOR";

export const add_author = newAuthId => {
  let newAuthor = {
    first_name: "Author",
    last_name: `${newAuthId}`,
    imageUrl:
      "https://www.netz.de/images/2016-11-21-firefox-focus-header-58cfedd908c25_500_300.jpg",
    books: [
      {
        title: "Anonymous book",
        color: "mysterious color"
      }
    ]
  };
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
