import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage.jsx";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";
import TeachersPage from "./components/TeachersPage.jsx";
import LoginContainer from "./containers/LoginContainer.jsx";
import SingleCourseContainer from "./containers/SingleCourseContainer.jsx";
import AdminPanel from "./components/AdminPanel";
import PrivateAdminRoute from "./components/ProtectedRoute/PrivateAdminRoute.jsx";
import Community from "./components/Community/Community.jsx";
import Instructor from "./components/Instructor/Instructor.jsx";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/login" exact component={LoginContainer} />
      <Route path="/courses/:id" exact component={SingleCourseContainer} />
      <PrivateAdminRoute path="/admin" exact component={AdminPanel} />
      <ProtectedRoute path="/teacher" exact component={TeachersPage} />
      <ProtectedRoute path="/instructor" exact component={Instructor} />
      <Route path="/community" exact component={Community} />
      <Route component={LandingPage} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
