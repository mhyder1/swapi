import { ADD_FETCHED_DATA } from "./types";
import axios from "axios";
let swapi_url = "https://swapi.dev/api/people/22/";

// export const addFetchedData = (data) => {
//   return {
//     type: ADD_FETCHED_DATA,
//     payload: {
//       films: data.films,
//       starshipData: data.starships,
//     },
//   };
// };

export const fetchData = () => {
  return axios.get(swapi_url).then(({ data }) => data);
};
