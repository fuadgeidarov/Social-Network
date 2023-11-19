import React from "react";
import {create} from "axios";
import {createSelector} from "reselect";
export const getUsers = (state) => {
    return state.usersPage.users
}

export  const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export  const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export  const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export  const getIsFetching = (state) => {
    return state.usersPage.isFetching
}
export  const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}
export  const getIsAuth = (state) => {
    return state.auth.isAuth
}

export const getUsersSuper = createSelector(getUsers,(users)=> {
    return users.filter(u => true)
})

// export const getUsersSelector = (state) => {
//     return getUsers(state).filter(u=>true)
// }