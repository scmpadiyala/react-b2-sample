import { createStore, combineReducers, applyMiddleware } from "redux";
import { asyncReducer } from "./asyncreducer";
import thunkMiddleware from "redux-thunk";
import logger from "./logmiddleware";

const userstore = createStore(
  asyncReducer,
  applyMiddleware(thunkMiddleware, logger)
);
// const samplestore = createStore(
//   combineReducers({ a: quantityReducer, b: quantityReducer1 })
// );

export default userstore;
