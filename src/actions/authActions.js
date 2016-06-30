import * as types from "./actionTypes";
import {push} from "react-router-redux";
import {userLoadedSuccess, userCreated} from "./userActions";

const USER_DEMO = {
    displayName: 'User demo',
    email: 'demo@demo.com',
    emailVerified: true,
    isAnonymous: false,
    photoURL: 'https://github.com/identicons/jasonlong.png',
    providerData: 'asdf',
    providerId: 'asdf',
    refreshToken: '',
    uid: 'user-demo',
    isAdmin: true
};

export function authInitializedDone() {
    return {
        type: types.AUTH_INITIALIZATION_DONE
    };
}

export function authLoggedInSuccess(userUID) {
    return {
        type: types.AUTH_LOGGED_IN_SUCCESS, userUID
    };
}

export function authLoggedOutSuccess() {
    return { type: types.AUTH_LOGGED_OUT_SUCCESS };
}

export function authInitialized(user) {
    return (dispatch) => {
        dispatch(authInitializedDone());
        if (user) {
            dispatch(authLoggedIn(user.uid));
        } else {
            dispatch(authLoggedOutSuccess());
        }
    };
}

export function authLoggedIn(userUID) {
    return (dispatch) => {
        dispatch(authLoggedInSuccess(userUID));
        dispatch(userLoadedSuccess(USER_DEMO));
        dispatch(push('/'));
    };
}

export function createUserWithEmailAndPassword(user) {
    return (dispatch) => {
        dispatch(userCreated(USER_DEMO));
    };
}

export function signInWithEmailAndPassword(user) {
    return (dispatch) => {
        dispatch(authLoggedIn(user.uid));
    };
}

export function signOut() {
    return (dispatch, getState) => {
        dispatch(authLoggedOutSuccess());
        if (getState().routesPermissions.requireAuth
                .filter(route => route === getState().routing.locationBeforeTransitions.pathname).toString()) {
            dispatch(push('/login'));
        }
    };
}

function redirect(replace, pathname, nextPathName, error = false) {
    replace({
        pathname: pathname,
        state: { nextPathname: nextPathName }
    });
}

export function requireAuth(nextState, replace) {
    return (dispatch, getState) => {
        if (!getState().auth.isLogged) {
            redirect(replace, '/login', nextState.location.pathname, 'You need to be logged to access this page');
        }
    };
}
