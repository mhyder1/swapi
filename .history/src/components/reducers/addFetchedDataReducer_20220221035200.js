import { ADD_FETCHED_DATA } from "../actions/types";

export default function addFetchedDataReducer(state = [], action) {
  switch (action.type) {
    case ADD_FETCHED_DATA:
      // console.log(action.payload)
      return [...state, action.payload];
    default:
      return state;
  }
}
