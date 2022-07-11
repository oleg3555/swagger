import {
    DISABLE_ERROR,
    DISABLE_LOADER,
    ENABLE_LOADER,
    FINISH_INITIALIZE,
    LOG_IN,
    LOG_OUT,
    SET_ERROR
} from "./type-constants";

export const enableLoaderAction = () => {
    return {type: ENABLE_LOADER};
}


export const disableLoaderAction = () => {
    return {type: DISABLE_LOADER};
}

export const logInAction = (userId) => {
    return {type: LOG_IN, payload: {userId}};
}

export const logOutAction = () => {
    return {type: LOG_OUT};
}

export const setErrorAction = (message) => {
    return {type: SET_ERROR, payload: {message}};
}

export const disableErrorAction = () => {
    return {type: DISABLE_ERROR};
}

export const finishInitializeAction = () => {
    return {type: FINISH_INITIALIZE};
}