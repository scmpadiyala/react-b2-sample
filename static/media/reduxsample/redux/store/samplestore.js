import { createStore, combineReducers } from "redux";
import quantityReducer from "../reducers/quantityreducer";
import quantityReducer1 from "../reducers/quantityreducer1";

// getState for accessing the current state of the application
// dispatch for dispatching an action
// subscribe for listening on state changes

const samplestore = createStore(quantityReducer);

// const samplestore = createStore(
//   combineReducers({ a: quantityReducer, b: quantityReducer1 })
// );

export default samplestore;
