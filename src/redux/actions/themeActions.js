import { THEME_ACTIONS } from './types';

export const setDarkMode = (type) => dispatch => {
    dispatch({
        type: THEME_ACTIONS.SET_MODE,
        payload: type
    })
};