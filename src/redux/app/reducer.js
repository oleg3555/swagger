import {
    DISABLE_ERROR,
    DISABLE_LOADER,
    ENABLE_LOADER,
    FINISH_INITIALIZE, LOG_IN, LOG_OUT,
    SET_ERROR,
} from "./type-constants";


const initialState = {
    isInitialized: false,
    isFetching: false,
    error: '',
    userId: '',
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ENABLE_LOADER: {
            return {...state, isFetching: true};
        }
        case DISABLE_LOADER: {
            return {...state, isFetching: false};
        }
        case SET_ERROR: {
            return {...state, error: action.payload.message};
        }
        case DISABLE_ERROR: {
            return {...state, error: ''};
        }
        case FINISH_INITIALIZE: {
            return {...state, isInitialized: true};
        }
        case LOG_IN: {
            return {...state, userId: action.payload.userId};
        }
        case LOG_OUT: {
            return {...state, userId: ''};
        }
        default: {
            return state;
        }
    }
}