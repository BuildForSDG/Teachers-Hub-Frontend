import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import LoginContainer from "./containers/LoginContainer.jsx";
import "./App.css";


const Routes = () => (
  <BrowserRouter>
    <Switch>
     <Route path="/" exact component={LandingPage} />
      <Route path="/login" exact component={LoginContainer} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
