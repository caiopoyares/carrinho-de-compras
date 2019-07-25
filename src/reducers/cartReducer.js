import {
  ADD_TO_CART,
  REMOVE_ITEM_ON_CART,
  ADD_ITEM_ON_CART
} from "../actions/cartActions";

const INITIAL_STATE = {
  totalAmount: 0,
  itemsId: [],
  itemsOnCart: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      //First, we check if the current item is already included on the itemsOnCart. If so, we won't add it again.
      if (state.itemsOnCart.includes(action.payload)) {
        return {
          ...state,
          itemsId: state.itemsId.concat(action.payload)
        };
      } else {
        //If it's not on the itemsOnCart array, we will add it.
        return {
          ...state,
          itemsId: state.itemsId.concat(action.payload),
          itemsOnCart: [...state.itemsOnCart, action.payload]
        };
      }
    case REMOVE_ITEM_ON_CART:
      if (action.quantity === 1) {
        return {
          ...state,
          itemsId: state.itemsId.filter(id => id !== action.payload),
          itemsOnCart: state.itemsOnCart.filter(id => id !== action.payload)
        };
      } else {
        const index = state.itemsId.indexOf(action.payload);
        const newItemsId = [...state.itemsId];
        newItemsId.splice(index, 1);
        return {
          ...state,
          itemsId: newItemsId
        };
      }
    case ADD_ITEM_ON_CART:
      if (action.quantity < action.maxQuantity) {
        return {
          ...state,
          itemsId: [...state.itemsId, action.payload]
        };
      }
    default:
      return state;
  }
};

export default cartReducer;
