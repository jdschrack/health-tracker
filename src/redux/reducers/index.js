import { combineReducers } from 'redux';
import themeReducer from './theme/themeReducer';
import authReducer from './authentication/authReducer';

export default combineReducers({
    theme: themeReducer,
    authStatus: authReducer
});