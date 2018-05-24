//redux
import { combineReducers } from "redux";

//Initial States for reducers
const numberToPhoneWords = { words: null };

///////////////=========== REDUCERS

const convertNumber = (state = numberToPhoneWords, action) => {
  switch (action.type) {
    case "CONVERT":
      return state;
    default:
      return state;
  }
};

export const reducers = combineReducers({
  convertNumber: convertNumber
});
