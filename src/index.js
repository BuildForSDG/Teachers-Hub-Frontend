/* eslint-disable import/extensions */
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import combineReducers from "./redux/reducers/combinedReducer.jsx";
import Routes from "./app.js";


const store = createStore(combineReducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
<Provider store={store}>
    <Routes />
</Provider>, document.getElementById("root")
);
