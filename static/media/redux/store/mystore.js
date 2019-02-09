import { createStore } from "redux";

import ordermgmtReducer from "../reducers/ordermgmtreducer";


// getState for accessing the current state of the application
// dispatch for dispatching an action
// subscribe for listening on state changes
const mystore = createStore(ordermgmtReducer);
export default mystore;