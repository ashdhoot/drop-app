import axios from "axios";

export const getMyFilm = (id) => (dispatch) => {
  axios
    .get(`https://swapi.dev/api/films/${id}/`)
    .then((response) => {
      console.log(response.data);
      dispatch({ type: "GET__MY__FILM", payload: response.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getMyCharacter = (id) => (dispatch) => {
  axios
    .get(`https://swapi.dev/api/people/${id}/`)
    .then((response) => {
      console.log(response.data);
      dispatch({ type: "GET__CHARACTER", payload: response.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
