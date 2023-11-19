import React from 'react';
import {usersApi} from "../Api/Api";

const follow ='FOLLOW';
const unfollow = 'UNFOLLOW';
const setUsers= 'SET_USERS'
const setCurrentPage = 'SET_CURRENT_PAGE'
const setTotalUsersCount ='SET_TOTAL_USERS_COUNT'
const toggleIsFetching ='TOGGLE_IS_FETCHING'
const toggleIsFollowing = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}
export const followAc = (userId)=> ({type: follow, userId})
export const unfollowAc = (userId)=>({type: unfollow, userId})
export const setUserAc = (users) =>({type: setUsers, users})
export const setCurrentPagePageAC= (currentPage) =>({type: setCurrentPage, currentPage:currentPage})
export const setTotalUsersCountAC = (totalUsersCount) => ({type:setTotalUsersCount , count: totalUsersCount})
export const toggleIsFetchingAC = (isFetching)=> ({type: toggleIsFetching, isFetching})
export  const toggleIsFollowingAC = (isFetching, userId) => ({type: toggleIsFollowing, isFetching, userId})

 export const getUsersThunkCreator =(page,pageSize,)=> {
     return (dispatch) => {
         dispatch(toggleIsFetchingAC(true))
         dispatch(setCurrentPagePageAC(page))
         usersApi.getUsers(page, pageSize).then(data => {
             dispatch(toggleIsFetchingAC(false))
             dispatch(setUserAc(data.items))
             dispatch(setTotalUsersCountAC(data.totalCount))
         })
     }
 }

const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        case follow:
            return {
                ...state,
                 users: state.users.map(u => {
                if (u.id ===action.userId) {
                    return {...u, followed: true}
                }
                return u;
                })
            }
        case unfollow:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case setUsers: {
            return {...state, users: action.users}
        }
        case setCurrentPage: {
            return {...state, currentPage: action.currentPage}
        }
        case setTotalUsersCount: {
            return {...state, totalUsersCount: action.count}
        }
        case toggleIsFetching: {
            return {...state, isFetching: action.isFetching}
        }
        case toggleIsFollowing: {
            return {...state,
                followingInProgress:action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)}
        }
        default:
            return state
    }


};


export default usersReducer;