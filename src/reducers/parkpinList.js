import {
    SET_PAGE,
    HOME_PAGE_LOADED,
    HOME_PAGE_UNLOADED,
    CHANGE_TAB
} from '../constants/actionTypes';

export default (state = {}, action) => {
    switch (action.type) {

        case SET_PAGE:
            return {
                ...state,
                parkpins: action.payload.parkpins,
                parkpinsCount: action.payload.parkpinsCount,
                currentPage: action.page
            };

        case HOME_PAGE_LOADED:
            return {
                ...state,
                pager: action.pager,
                parkpins: action.payload[1].parkpins,
                parkpinsCount: action.payload[1].parkpinsCount,
                currentPage: 0,
                tab: action.tab
            };
        case HOME_PAGE_UNLOADED:
            return {};
        case CHANGE_TAB:
            return {
                ...state,
                pager: action.pager,
                parkpins: action.payload.parkpins,
                parkpinsCount: action.payload.parkpinsCount,
                tab: action.tab,
                currentPage: 0,
                tag: null
            };
        default:
            return state;
    }
};