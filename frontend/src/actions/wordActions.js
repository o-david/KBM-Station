import {
  WORD_LIST_FAIL,
  WORD_LIST_REQUEST,
  WORD_LIST_SUCCESS,
} from "../constants/wordConstants";
import axios from "axios";

export const allWords = (letter, search) => async (dispatch, getState) => {
  try {
    dispatch({
      type: WORD_LIST_REQUEST,
    });
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.get(`/api/public`, config);
    console.log(data);
    const sorted = data.sort((a, b) => (a.word > b.word ? 1 : -1));
    function groupByFirstLetter(array) {
      return array.reduce(function (acc, obj) {
        const firstLetter = obj.word[0].toUpperCase();
        if (!acc[firstLetter]) {
          acc[firstLetter] = [];
        }
        acc[firstLetter].push(obj);
        return acc;
      }, {});
    }

    const groupedWords = groupByFirstLetter(sorted);
    console.log(groupedWords);
    const filtered = sorted.filter((ind) => ind.word[0] === letter);

    dispatch({
      type: WORD_LIST_SUCCESS,
      payload: { data: sorted, groupedWords: groupedWords, filtered: filtered },
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: WORD_LIST_FAIL,
      payload: message,
    });
  }
};
