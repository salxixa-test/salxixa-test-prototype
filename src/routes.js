import React from "react";
import {Route, IndexRoute} from "react-router";
import Layout from "./components/Layout";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/login/LoginPage";
import RegistrationPage from "./components/registration/RegistrationPage";
import {requireAuth} from "./actions/authActions"; //eslint-disable-line import/no-named-as-default
//eslint-disable-line import/no-named-as-default

export default function Routes(store) {

    const checkAuth = (nextState, replace) => {
        store.dispatch(requireAuth(nextState, replace));
    };

    return (
        <Route path="/" component={Layout}>
            <IndexRoute component={HomePage} onEnter={checkAuth} />
            <Route path="register" component={RegistrationPage} />
            <Route path="login" component={LoginPage} />
        </Route>
    );
}
