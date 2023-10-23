import {combineReducers, legacy_createStore} from "@reduxjs/toolkit";
import profileReducer from "./ProfileReducer";
import dialogReducer from "./DialogReducer";
import sidebarReducer from "./SidebarReducer";
import usersReducer from "./usersReducer";


let reducers = combineReducers({
    profilePages:profileReducer,
    dialogsPage: dialogReducer,
    sideBar:sidebarReducer,
    usersPage: usersReducer,

})

let store = legacy_createStore(reducers)

window.store = store

export default store


