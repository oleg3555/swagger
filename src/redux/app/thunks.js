import {disableLoaderAction, enableLoaderAction, finishInitializeAction, logInAction, setErrorAction} from "./actions";
import {authApi} from "../../api/api";
import {getAuthorization, setToken} from "../../api/instance";

export const loginThunk = (email, password) => async (dispatch) => {
    dispatch(enableLoaderAction());
    try {
        const res = await authApi.login(email, password);
        const {token} = res.data;
        if (token) {
            setToken(token);
            const user = await authApi.authMe();
            dispatch(logInAction(user.data.userId));
        } else {
            dispatch(setErrorAction('Something went wrong, try again later'));
        }
    } catch (error) {
        console.error(error);
        dispatch(setErrorAction('Email or password is incorrect'));
    }
    dispatch(disableLoaderAction());
}

export const initializeAppThunk = () => async (dispatch) => {
    dispatch(enableLoaderAction());
    const auth = getAuthorization();
    if (auth) {
        try {
            const user = await authApi.authMe();
            dispatch(logInAction(user.data.userId));
        } catch (error) {
            dispatch(setErrorAction(error.message));
        }
    }
    dispatch(disableLoaderAction());
    dispatch(finishInitializeAction());
}