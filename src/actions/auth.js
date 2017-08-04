import {
    AUTH_LOGIN_USER_REQUEST,
    AUTH_LOGIN_USER_SUCCESS,
    AUTH_LOGIN_USER_FAILURE,
    AUTH_LOGIN_USER_EXPIRED,
    NAVIGATION_GOTO_MAIN,
} from '../constants';

export function userLoginRequest() {
    return {
        type: AUTH_LOGIN_USER_REQUEST
    };
}

export function userLoginSuccess(token, user) {
    return {
        type: AUTH_LOGIN_USER_SUCCESS,
        payload: {
            token,
            user
        }
    };
}

export function userLoginFailure(error, errorObject) {
    return {
        type: AUTH_LOGIN_USER_FAILURE,
        payload: {
            error,
            errorObject
        }
    };
}

export function userLoginExpired(error, errorObject) {
    return {
        type: AUTH_LOGIN_USER_EXPIRED,
        payload: {
            error,
            errorObject
        }
    };
}

// TODO login Facebook
export function loginFacebook(token) {
    return (dispatch) => {
        dispatch(userLoginRequest())
        // call the server, fetch user data blah blah
        dispatch({type: NAVIGATION_GOTO_MAIN})
        dispatch(userLoginSuccess(
            'dummy_token',
            { user : {
                    first_name : 'dummy_name',
                    last_name : 'dummy_last_name',
                    facebook_uid : 'dummy_facebook_uid',
                    email : 'dummy_email',
                }
            }
        ))
    }
}
