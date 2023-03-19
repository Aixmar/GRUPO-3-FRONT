import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_QUERY,
  GET_PIZZAS,
  PUSH_TO_CART,
  SORT_PIZZAS,
  POP_TO_CART,
  FILTER_BY_VEGETARIAN,
  FILTER_DRINKS_TERMS,
} from "./actionTypes";

const initialState = {
  ingredients: [],
  pizzas: [],
  pizzasbackup: [],
  cart: [],
  error_query: null,
  //-peruano3000--------
  filterDrinksTerms: {},
  //--------------------
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload,
      };

    case GET_INGREDIENTS_QUERY:
      if (Array.isArray(action.payload)) {
        let ingredientsQuery = action.payload.filter(
          (ingre) =>
            ingre.category === "Toppings" ||
            ingre.category === "Cheese" ||
            ingre.category === "Meat"
        );
        let ingredientsTotal = state.ingredients.filter(
          (ingre) =>
            ingre.category === "Dough" ||
            ingre.category === "Type" ||
            ingre.category === "Sauce base" ||
            ingre.category === "Cheese base"
        );
        return {
          ...state,
          ingredients: ingredientsTotal.concat(ingredientsQuery),
          error_query: null,
        };
      } else {
        return {
          ...state,
          error_query: action.payload,
        };
      }

    case GET_PIZZAS:
      return {
        ...state,
        pizzas: action.payload,
        pizzasbackup: action.payload,
      };

    case PUSH_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case POP_TO_CART:
      return {
        ...state,
        cart: action.payload,
      };

    case SORT_PIZZAS:
      if (action.payload === "None") return { ...state };

      let sortedPizzas;
      if (action.payload === "A-Z") {
        sortedPizzas = state.pizzas.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else if (action.payload === "Z-A") {
        sortedPizzas = state.pizzas.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      } else if (action.payload === "Price: Low to high") {
        sortedPizzas = state.pizzas.sort((a, b) => a.price - b.price);
      } else if (action.payload === "Price: High to low") {
        sortedPizzas = state.pizzas.sort((a, b) => b.price - a.price);
      }
      return {
        ...state,
        pizzas: [ ...sortedPizzas ],
      };

    case FILTER_BY_VEGETARIAN:
      if (action.payload === "all")
        return { ...state, pizzas: state.pizzasbackup };

      const filtrados =
        action.payload === "yes"
          ? state.pizzasbackup.filter((pizz) => pizz.vegetarian === true)
          : state.pizzasbackup.filter((pizz) => pizz.vegetarian === false);

      return {
        ...state,
        pizzas: filtrados,
      };

    case FILTER_DRINKS_TERMS:
      return { ...state, filterDrinksTerms: action.payload };

    default:
      return { ...state };
  }
};

export default rootReducer;
