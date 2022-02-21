import { ADD_FETCHED_DATA } from "../actions/types";
const initialState = {
    films: {
      title: ''
    },
    starshipData: {
      name: ""
    },
    characterMeta: {
      name: "",
      height: 0,
      hair_color: "",
    },
  }


export default function addFetchedDataReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FETCHED_DATA:
      return {...action.payload};
    default:
      return state;
  }
}
