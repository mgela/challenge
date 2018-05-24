//redux
import { combineReducers } from "redux";

//Initial States for reducers
const words = { words: null };

///////////////=========== REDUCERS

const wordList = (state = words, action) => {
  switch (action.type) {
    case "CONVERT":
      return {
        words: action.res
      };
    default:
      return state;
  }
};

export const reducers = combineReducers({
  wordList: wordList
});
