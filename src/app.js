import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import LoginContainer from "./containers/LoginContainer.jsx";
import TeachersPage from "./components/TeachersPage.jsx";
import SingleCourseContainer from "./containers/SingleCourseContainer.jsx";
import LayOut from "./components/AdminPanel/LayOut.jsx";
import "./App.css";


const Routes = () => (
  <BrowserRouter>
    <Switch>
     <Route path="/" exact component={LandingPage} />
      <Route path="/login" exact component={LoginContainer} />
      <Route path="/teacher" exact component={TeachersPage} />
      <Route path="/courses/:id" exact component={SingleCourseContainer} />
      <Route path="/admin" exact component={LayOut} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
