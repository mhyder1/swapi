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

  //   return (dispatch) => {
  //     return (
  //       axios
  //         .get(swapi_url)
  //         //   const response = await axios.get(swapi_url);
  //         //       const responsefilms = await axios.get(response.data.films[0]);
  //         //       const responseStarship = await axios.get(response.data.starships[0]);
  //         .then((response) => {
  //           return response.data;
  //         })
  //         .then((data) => {
  //           dispatch({
  //             type: ADD_FETCHED_DATA,
  //             payload: {
  //               films: data.films[0],
  //               starshipData: data.starships[0],
  //             },
  //           });
  //         })
  //         .catch((error) => {
  //           throw error;
  //         })
  //     );
  //   };
};
