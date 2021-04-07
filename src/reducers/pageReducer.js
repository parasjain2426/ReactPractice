import { CHANGEPAGE, PAGECONTENT } from "../actions/actionVars";

const defaultState = {
  currentPage: 1,
  pageContent: []
};

export const pageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGEPAGE:
      return {
        currentPage: action.pageNumber,
        pageContent: [...state.pageContent]
      };
    case PAGECONTENT:
      return {
        currentPage: state.currentPage,
        pageContent: action.currentData
      };
    default:
      return state;
  }
};
