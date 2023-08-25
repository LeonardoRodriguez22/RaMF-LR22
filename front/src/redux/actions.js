import axios from "axios";

export const addFav = (character) => {
  try {
    const endpoint = "http://localhost:3001/rickandmorty/fav/";
    return async (dispatch) => {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: "ADD_FAVS",
        payload: data,
      });
    };
  } catch (error) {
    console.log(error.message);
  }
};

export const removeFav = (id) => {
  try {
    const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
    return async (dispatch) => {
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: "REMOVE_FAVS",
        payload: data,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const characterDetail = (id) => {
  try {
    const endpoint = "http://localhost:3001/rickandmorty/detail/" + id;
    return async (dispatch) => {
      const { data } = await axios.get(endpoint);
      return dispatch({
        type: "CHARACTER_DETAIL",
        payload: data,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const filterCards = (gender) => {
  return {
    type: "FILTER",
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: "ORDER",
    payload: order,
  };
};

export const cleanStateDetail = () => {
  return { type: "CLEANER" };
};
