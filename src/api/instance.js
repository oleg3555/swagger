import axios from "axios";

export const getAuthorization = () => {
    const token = localStorage.getItem('token');
    return token ? `Bearer ${token}` : '';
}
export const setToken = (token) => {
    localStorage.setItem('token', token)
}

export const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        accept: 'application/json',
        Authorization: getAuthorization(),
    }
})

instance.interceptors.request.use(async (req) => {
    if (!req.headers.Authorization) {
        const auth = getAuthorization();
        req.headers.Authorization = auth;
        axios.defaults.headers.Authorization = auth;
    }

    return req;
})