import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CustomerRecquisition from "./components/customer-recquisition/CustomerRecquisition";
import CACustomerEstateDetails from "./components/cloud-admin-customer-estate-details/CACustomerEstateDetails";
import EstateDashboard from "./components/estate-dashboard/EstateDashboard";
import SMECustomerEstateDetails from "./components/sme-customer-estate-details/SMECustomerEstateDetails";
import rootReducer from "./reducers";

let store = createStore(rootReducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={EstateDashboard} />
          <Route path="/newcustomer" component={CustomerRecquisition} />
          <Route
            path="/cloudadmincustomerestatedetails"
            component={CACustomerEstateDetails}
          />
          <Route
            path="/smecustomerestatedetails"
            component={SMECustomerEstateDetails}
          />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
