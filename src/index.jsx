import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CreateEstate } from "./components/routes/CreateEstate";
import { ConfigureEstate } from "./components/routes/ConfigureEstate";
import { HandoverEstate } from "./components/routes/HandoverEstate";
import Home from "./components/home/Home";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/createestate">
          <CreateEstate message="Create Estate" />
        </Route>
        <Route path="/configureestate" component={ConfigureEstate} />
        <Route path="/handoverestate">
          <HandoverEstate message="Handover Estate" />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
