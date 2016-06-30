import * as types from "./actionTypes";
import {authLoggedIn} from "./authActions";

function extractUserProperties(firebaseUser) {

    const user = {};
    const userProperties = [
        'displayName',
        'email',
        'emailVerified',
        'isAnonymous',
        'photoURL',
        'providerData',
        'providerId',
        'refreshToken',
        'uid',
        'isAdmin'
    ];

    userProperties.map((prop) => {
        if (prop in firebaseUser) {
            user[prop] = firebaseUser[prop];
        }
    });

    return user;
}

export function userCreated(user) {
    return (dispatch) => {
        dispatch(authLoggedIn(user.uid));
        dispatch(userCreatedSuccess());
    };
}

export function userCreatedSuccess() {
    return {
        type: types.USER_CREATED_SUCCESS
    };
}

export function userLoadedSuccess(user) {
    return {
        type: types.USER_LOADED_SUCCESS, user: extractUserProperties(user)
    };
}
