import { SET_ITEMS } from "../actions/itemsActions";

const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_ITEMS:
      return action.payload;
    default:
      return state;
  }
};

export default itemsReducer;
