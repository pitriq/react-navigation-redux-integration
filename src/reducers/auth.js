import {
    AUTH_LOGIN_USER_REQUEST,
    AUTH_LOGIN_USER_SUCCESS,
    AUTH_LOGIN_USER_FAILURE,
    AUTH_LOGIN_USER_EXPIRED,
} from '../constants';

const initialAuthState = {
    isAuthenticated: false,
    isAuthenticating: false,
    authenticationExpired: false,
    token: null,
    firstName: null,
    lastName: null,
    email: null,
    facebook_uid: null,
    errorCode: null,
    errorObject: null,
};

export default function authReducer(state = initialAuthState, action) {
    const { type, payload } = action
    switch (type) {
        case AUTH_LOGIN_USER_REQUEST:
            return {
                ...state,
                isAuthenticating: true,
                authenticationExpired: false,
                errorCode: null,
                errorObject: null,
            }
        case AUTH_LOGIN_USER_SUCCESS:
            return {
                ...state,
                isAuthenticating: false,
                isAuthenticated: true,
                authenticationExpired: false,
                token: payload.token,
                firstName: payload.user.first_name,
                lastName: payload.user.last_name,
                facebook_uid: payload.user.facebook_uid,
                email: payload.user.email,
                errorCode: null,
                errorObject: null,
            }
        case AUTH_LOGIN_USER_FAILURE:
            return {
                ...state,
                isAuthenticating: false,
                isAuthenticated: false,
                authenticationExpired: false,
                token: null,
                firstName: null,
                lastName: null,
                facebook_uid: null,
                email: null,
                errorCode: payload.error,
                errorObject: payload.errorObject,
            }
        case AUTH_LOGIN_USER_EXPIRED:
            return {
                ...state,
                isAuthenticating: false,
                isAuthenticated: false,
                authenticationExpired: true,
                token: null,
                firstName: null,
                lastName: null,
                facebook_uid: null,
                email: null,
                errorCode: payload.error,
                errorObject: payload.errorObject,
            }
        default:
            return state;
  }
}
