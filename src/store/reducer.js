import authors from "../data";
const initialState = {
  authors: authors,
  id: 1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE":
      return {
        ...state,
        authors: state.authors.filter(author => author !== action.payload)
      };
    case "ADD":
      return {
        ...state,
        authors: state.authors.concat(action.payload),
        id: state.id + 1
      };
    default:
      return state;
  }
};

export default reducer;
