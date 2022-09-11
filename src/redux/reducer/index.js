import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

const reducers = combineReducers({
  //counterReducer:counterReducer (bu şekildede kullanılabilir)
  counterReducer
});

export default reducers;