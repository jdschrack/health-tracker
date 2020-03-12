import { AUTH_ACTIONS } from '../actions/types';

export const loginAction = (userId, password) => dispatch => {
    dispatch({
        type: AUTH_ACTIONS.LOG_IN,
        payload: {
            isAuthorized: true,
            authToken: "",
            authTokenExpires: new Date(),
            refreshToken: "",
            refreshTokenExpires: new Date()
        }
    })
}

export const setRedirect = (path) => dispatch => {
    dispatch({
        type: AUTH_ACTIONS.SET_REDIRECT_URL,
        payload: path
    })
}