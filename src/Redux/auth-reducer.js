import React from 'react';
import {authApi} from "../Api/Api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false

}

const AuthReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
             
            }
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email,login, isAuth ) => ({type:SET_USER_DATA, payload:{userId, email, login, isAuth}})
export const getAuthUsersData = ()=>async(dispatch)=> {
  let response = await authApi.me()
            if (response.data.resultCode===0) {
                let {id,login, email} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }

}

export const login = (email, password, rememberMe) => async(dispatch) => {
         let response = await authApi.Login(email, password, rememberMe)
              if (response.data.resultCode ===0) {
                  dispatch(getAuthUsersData())
              } else {let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some Error!'
                  dispatch(stopSubmit('Login', {_error: message}))}
}

export const logout = () => async (dispatch) => {
    let response = await authApi.logout()
            if (response.data.resultCode ===0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
}
export default AuthReducer;