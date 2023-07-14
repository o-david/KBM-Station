import {
  WORD_LIST_FAIL,
  WORD_LIST_REQUEST,
  WORD_LIST_SUCCESS,
} from "../constants/wordConstants";

export const wordListReducer = (state = { notes: [] }, action) => {
  switch (action.type) {
    case WORD_LIST_REQUEST:
      return { loading: true };
    case WORD_LIST_SUCCESS:
      return {
        loading: false,
        words: action.payload.data,
        groupedWords: action.payload.groupedWords,
        filteredWords: action.payload.filtered,
      };
    case WORD_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
