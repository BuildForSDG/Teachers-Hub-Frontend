/* eslint-disable import/extensions */
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import combineReducers from "./redux/reducers/combinedReducer.jsx";
import Routes from "./app.js";
import Favicon from "react-favicon";

const store = createStore(combineReducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    {/* <Favicon url="http://oflisback.github.io/react-favicon/public/img/github.ico"/> */}
    <Routes />
  </Provider>,
  document.getElementById("root")
);
