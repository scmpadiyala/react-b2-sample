import { createStore } from "redux";
import quantityReducer from "../reducers/quantityreducer";

// getState for accessing the current state of the application
// dispatch for dispatching an action
// subscribe for listening on state changes

const samplestore = createStore(quantityReducer);

export default samplestore;
