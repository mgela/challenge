//redux
import { combineReducers } from "redux";

//Initial States for reducers
const words = { words: null, isLoading: false};

///////////////=========== REDUCERS

const wordList = (state = words, action) => {
  switch (action.type) {
    case "CONVERTED":
      return {
        words: action.res,
        isLoading: !state.isLoading
      };
    case "GET_WORDS_INIT":
      return {
        isLoading: !state.isLoading
      }
    default:
      return state;
  }
};

export const reducers = combineReducers({
  wordList: wordList
});
