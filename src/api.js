import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://crm-management.herokuapp.com/',
});

export const home = {
    getUsers() {
        return instance.get("users");
    }
}

export const auth = {
    loginization(username, password) {
        return instance.post("users/login", { username, password });
    },
    registration(payload) {
        return instance.post("users", payload);
    }
}