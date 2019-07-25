export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_ITEM_ON_CART = "REMOVE_ITEM_ON_CART";
export const ADD_ITEM_ON_CART = "ADD_ITEM_ON_CART";

export const addToCart = itemId => {
  return {
    type: ADD_TO_CART,
    payload: itemId
  };
};

export const removeItem = (itemId, quantity) => {
  return {
    type: REMOVE_ITEM_ON_CART,
    payload: itemId,
    quantity
  };
};

export const addItem = (itemId, quantity, maxQuantity) => {
  return {
    type: ADD_ITEM_ON_CART,
    payload: itemId,
    quantity,
    maxQuantity
  };
};
