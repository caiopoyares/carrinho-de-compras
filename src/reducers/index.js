import { combineReducers } from "redux";
import itemsReducer from "./itemsReducer";
import cartReducer from "./cartReducer";

//combining all the reducers into one and renaming them
const rootReducer = combineReducers({
  items: itemsReducer,
  cart: cartReducer
});

export default rootReducer;
