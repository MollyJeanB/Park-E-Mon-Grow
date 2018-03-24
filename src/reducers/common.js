import {
    APP_LOAD,
    REDIRECT,
    HOME_PAGE_UNLOADED
} from '../constants/actionTypes';

const defaultState = {
    appName: 'Conduit',
    token: null,
    viewChangeCounter: 0
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case APP_LOAD:
            return {
                ...state,
                token: action.token || null,
                appLoaded: true
            };
        case REDIRECT:
            return { ...state, redirectTo: null };
        //case ARTICLE_PAGE_UNLOADED:
        case HOME_PAGE_UNLOADED:
            return { ...state, viewChangeCounter: state.viewChangeCounter + 1 };
        default:
            return state;
    }
};