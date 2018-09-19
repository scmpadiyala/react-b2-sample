import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import CoreApp from "./reduxsample/CoreApp";
import { Provider } from "react-redux";
import samplestore from "./reduxsample/redux/store/samplestore";
//ReactDOM.render(<App />, document.getElementById('root'));

//console.log("Store " + samplestore.dispatch);
ReactDOM.render(
  <Provider store={samplestore}>
    <CoreApp />
  </Provider>,

  document.getElementById("root")
);
registerServiceWorker();
