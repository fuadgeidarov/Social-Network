import React from 'react';
import axios from "axios";
import profile from "../components/Profile/Profile";



const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'b6df44a0-f4a8-42a5-8fd2-cd2b237d3e4b'}
})
export const usersApi = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&connect=${pageSize}`)
            .then(response => {
                return response.data
            })
    }
}

export const authApi = {
    me() {
        return instance.get(`auth/me`)
    },
    Login(email, password, rememberMe=false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout () {
        return instance.delete(`auth/login`)
    }
}






