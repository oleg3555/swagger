import {instance} from "./instance";

export const usersApi = {
    getUsers() {
        return instance.get('users');
    }
}


export const authApi = {
    authMe() {
        return instance.get('auth/me');
    },
    login(email, password) {
        return instance.post('auth/login', {email, password});
    }
}