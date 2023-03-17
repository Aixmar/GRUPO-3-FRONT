import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_QUERY,
  GET_PIZZAS,
  PUSH_TO_CART,
  SORT_PIZZAS,
  POP_TO_CART,
  FILTER_BY_VEGETARIAN,
} from "./actionTypes";
import axios from "axios";

export const getIngredients = () => {
  return async function (dispatch) {
    let response = await axios(`http://localhost:3001/ingredients`);
    return dispatch({ type: GET_INGREDIENTS, payload: response.data });
  };
};

export const getIngredientsQuery = (name) => {
  return async function (dispatch) {
    let response = await axios(
      `http://localhost:3001/ingredients?name=${name}`
    );
    return dispatch({ type: GET_INGREDIENTS_QUERY, payload: response.data });
  };
};

export const getPizzas = () => {
  return async function (dispatch) {
    let response = await axios.get(`http://localhost:3001/pizzas`);
    return dispatch({ type: GET_PIZZAS, payload: response.data });
  };
};

export const sortPizzas = (selectedSort) => {
  return { type: SORT_PIZZAS, payload: selectedSort };
};

export const pushToCart = (form) => {
  return { type: PUSH_TO_CART, payload: form };
};

export const popToCart = (sliceForm) => {
  return { type: POP_TO_CART, payload: sliceForm };
};

export const filterByVegetarian = (filterVege) => {
  return { type: FILTER_BY_VEGETARIAN, payload: filterVege };
};
