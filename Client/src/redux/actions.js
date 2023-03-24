import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_QUERY,
  GET_PIZZAS,
  PUSH_TO_CART,
  SORT_PIZZAS,
  POP_TO_CART,
  FILTER_BY_VEGETARIAN,
  ERROR_QUERY,
  FILTER_DRINKS_TERMS,
  FILTER_SIDES_TERMS,
  FILTER_PIZZAS_TERMS,
  GET_DATA_USERS,
} from "./actionTypes";
import axios from "axios";

export const getIngredients = () => {
  return async function (dispatch) {
    let response = await axios(`/ingredients`);
    return dispatch({ type: GET_INGREDIENTS, payload: response.data });
  };
};

export const getIngredientsQuery = (name) => {
  return function (dispatch) {
    axios(`/ingredients?name=${name}`)
      .then((res) => res.data)
      .then((data) => dispatch({ type: GET_INGREDIENTS_QUERY, payload: data }));
  };
};

export const getPizzas = () => {
  return async function (dispatch) {
    let response = await axios.get(`/pizzas`);
    return dispatch({ type: GET_PIZZAS, payload: response.data });
  };
};

export const getDataUsers = () => {
  return async function (dispatch) {
    let response = await axios.get(`/users`);
    return dispatch({ type: GET_DATA_USERS, payload: response.data });
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

export const filterDrinksTerms = (filterTerms) => {
  return { type: FILTER_DRINKS_TERMS, payload: filterTerms };
};

export const filterSidesTerms = (sidesTerms) => {
  return { type: FILTER_SIDES_TERMS, payload: sidesTerms };
};

export const filterPizzasTerms = (pizzasTerms) => {
  return { type: FILTER_PIZZAS_TERMS, payload: pizzasTerms };
};
