import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import LayOut from "./components/AdminPanel/LayOut.jsx";
import LandingPage from "./components/LandingPage.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";
import TeachersPage from "./components/TeachersPage.jsx";
import LoginContainer from "./containers/LoginContainer.jsx";
import SingleCourseContainer from "./containers/SingleCourseContainer.jsx";


const Routes = () => (
  <BrowserRouter>
    <Switch>
     <Route path="/" exact component={LandingPage} />
      <Route path="/login" exact component={LoginContainer} />
      <Route path="/courses/:id" exact component={SingleCourseContainer} />
      <Route path="/admin" exact component={LayOut} />
      <ProtectedRoute path='/teacher' exact component={TeachersPage} />
      <Route component={LandingPage} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
