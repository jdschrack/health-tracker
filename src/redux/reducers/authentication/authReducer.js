import { AUTH_ACTIONS } from '../../actions/types';
import { initialState } from './authInitialState';

export default (state = initialState, action) => {
    switch (action.type) {
        case (AUTH_ACTIONS.LOG_IN): {
            return {
                ...state,
                authData: action.payload,                
                isError: false,
                errors: []
            }
        }
        case (AUTH_ACTIONS.LOG_OUT): {
            return {
                initialState
            }
        }
        case (AUTH_ACTIONS.SET_REDIRECT_URL): {
            return {
                ...state,
                redirectUrl: action.payload
            }
        }
        case (AUTH_ACTIONS.AUTH_ERROR): {
            return {
                ...state,
                isError: true,
                errors: [action.payload]
            }
        }
        default: {
            return state;
        }
    }
}