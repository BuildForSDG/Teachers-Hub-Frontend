import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";
import TeachersPage from "./components/TeachersPage.jsx";
import LoginContainer from "./containers/LoginContainer.jsx";
import SingleCourseContainer from "./containers/SingleCourseContainer.jsx";
import AdminPanel from "./components/AdminPanel";


const Routes = () => (
  <BrowserRouter>
    <Switch>
     <Route path="/" exact component={LandingPage} />
      <Route path="/login" exact component={LoginContainer} />
      <Route path="/courses/:id" exact component={SingleCourseContainer} />
      <ProtectedRoute path="/admin" exact component={AdminPanel} />
      <ProtectedRoute path='/teacher' exact component={TeachersPage} />
      <Route component={LandingPage} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
