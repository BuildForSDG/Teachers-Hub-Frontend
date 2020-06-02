import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import LoginContainer from "./containers/LoginContainer.jsx";
import TeachersPage from "./components/TeachersPage.jsx";
import SingleCourseContainer from "./containers/SingleCourseContainer.jsx";
import "./App.css";


const Routes = () => (
  <BrowserRouter>
    <Switch>
     <Route path="/" exact component={LandingPage} />
      <Route path="/login" exact component={LoginContainer} />
      <Route path="/teacher" exact component={TeachersPage} />
      <Route path="/courses/:id" exact component={SingleCourseContainer} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
