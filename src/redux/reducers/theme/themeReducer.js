import { THEME_ACTIONS } from '../../actions/types';
import { initialState } from './themeDefaultState';


export default (state = initialState, action) => {
    switch (action.type) {
        case (THEME_ACTIONS.SET_MODE): {
            return {
                ...state,
                theme: {
                    ...state.theme,
                    type: action.payload
                }
            }
        }
        default: return state;
    }
}