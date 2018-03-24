import {
    PARKPINS_PAGE_LOADED,
    PARKPINS_PAGE_UNLOADED
} from '../constants/actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case PARKPINS_PAGE_LOADED:
            return {
                ...state,
                parkpins: action.payload[0].parkpins
            };
        case PARKPINS_PAGE_UNLOADED:
            return {};
        default:
            return state;
    }
};