import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import CoreApp from "./reduxsample/CoreApp";
import { Provider } from "react-redux";
import samplestore from "./reduxsample/redux/store/samplestore";

import AsyncComponent from "./reduxsample/aync-redux/aynccoponent";
import userstore from "./reduxsample/aync-redux/ayncstore";

import SampleForm from "./jestenzymetest/sampleform";

ReactDOM.render(<App />, document.getElementById("root"));

//console.log("Store " + samplestore.dispatch);
// ReactDOM.render(
//   <Provider store={samplestore}>
//     <CoreApp />
//   </Provider>,

//   document.getElementById("root")
// );

// ReactDOM.render(
//   <Provider store={userstore}>
//     <AsyncComponent />
//   </Provider>,

//   document.getElementById("root")
// );

//ReactDOM.render(<SampleForm />, document.getElementById("root"));

registerServiceWorker();
