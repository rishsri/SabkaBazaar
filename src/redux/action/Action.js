export const ADD_PRODUCT_INTO_CART = "ADD_PRODUCT_INTO_CART";
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";
export const REMOVE_ALL_PRODUCT_FROM_CART = "REMOVE_ALL_PRODUCT_FROM_CART";
export const INCREMENT_PRODUCT_COUNT = "INCREMENT_PRODUCT_COUNT"
export const DECREMENT_PRODUCT_COUNT = "DECREMENT_PRODUCT_COUNT"
export const DECREMENT_VALUE_GRATER_THAN_ZERO = "DECREMENT_VALUE_GRATER_THAN_ZERO"

export const addToCart = (productInfo) => {
  return function (dispatch) {
    fetch("http://localhost:5000/addToCart" , {
        method: "POST",
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: ADD_PRODUCT_INTO_CART, payload: productInfo });
      })
      .catch((error) => console.log(error));
  };
};

export const incrementProductCount = (productID) => {
    return function (dispatch) {
          dispatch({ type: INCREMENT_PRODUCT_COUNT, payload: productID });
    };
  };

  export const decrementProductCount = (productID) => {
    return function (dispatch) {
          dispatch({ type: DECREMENT_PRODUCT_COUNT, payload: productID });
    };
  };


export const removeFromCart = (productInfo) => {
  return function (dispatch) {
    dispatch({ type: REMOVE_PRODUCT_FROM_CART, payload: productInfo });
  };
};

export const clearCart = () => {
  return function (dispatch) {
    dispatch({ type: REMOVE_ALL_PRODUCT_FROM_CART, payload: [] });
  };
};

export const decrementValueZero = () => {
  return function(dispach){
      dispach({type: DECREMENT_VALUE_GRATER_THAN_ZERO, payload: []})
  }
}
