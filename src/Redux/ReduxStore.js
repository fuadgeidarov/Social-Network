import {applyMiddleware, combineReducers, legacy_createStore} from "@reduxjs/toolkit";
import profileReducer from "./ProfileReducer";
import dialogReducer from "./DialogReducer";
import sidebarReducer from "./SidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'


let reducers = combineReducers({
    profilePages:profileReducer,
    dialogsPage: dialogReducer,
    sideBar:sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer

})

let store = legacy_createStore(reducers,applyMiddleware(thunkMiddleware))

window.store = store

export default store


