import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import CoreApp from "./reduxsample/CoreApp";
import { Provider } from "react-redux";

import AsyncComponent from "./reduxsample/aync-redux/aynccoponent";
import userstore from "./reduxsample/aync-redux/ayncstore";

import SampleForm from "./jestenzymetest/sampleform";
import OrderManagementComponent from "./fireoperations/OrderMgmt";
import mystore from "./redux/store/mystore";
import CreateOrder from "./ordermgmt/createorder";

ReactDOM.render(
  <Provider store={mystore}>
    <CreateOrder />
  </Provider>,

  document.getElementById("root")
);

// ReactDOM.render(<App />, document.getElementById("root"));

// ReactDOM.render(
//   <OrderManagementComponent test=" Welcome by Vijay" />,
//   document.getElementById("root")
// );

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
