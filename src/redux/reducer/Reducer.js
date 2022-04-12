import {
  ADD_PRODUCT_INTO_CART,
  INCREMENT_PRODUCT_COUNT,
  DECREMENT_PRODUCT_COUNT,
  DECREMENT_VALUE_GRATER_THAN_ZERO
} from "../action/Action";

const intialState = {
  cartItem: {},
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_INTO_CART:
      return {
        ...state,
        cartItem: { ...state.cartItem, [action.payload.id]: action.payload },
      };
    case INCREMENT_PRODUCT_COUNT:
      return {
        ...state,
        cartItem: {
          ...state.cartItem,
          [action.payload]: {
            ...state.cartItem[action.payload],
            count: state.cartItem[action.payload].count + 1,
          },
        },
      };
      case DECREMENT_PRODUCT_COUNT:
      return {
        ...state,
        cartItem: {
          ...state.cartItem,
          [action.payload]: {
            ...state.cartItem[action.payload],
            count: state.cartItem[action.payload].count - 1 ,
          },
        },
      };
      case DECREMENT_VALUE_GRATER_THAN_ZERO:
        return {
          ...state,
          cartItem: {
            ...state.cartItem,
            [action.payload]: {
              ...state.cartItem[action.payload],
              count: state.cartItem[action.payload].count >= 0,
            },
          },
        };
    default:
      return state;
  }
};
export default reducer;
