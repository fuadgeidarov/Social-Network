import React from 'react';
import {usersApi} from "../Api/Api";
const addPost = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS ='SET_STATUS'
const DELETE_POST= 'DELETE_POST'

let initialState = {
       postData: [{id: 1, message: 'Hi, how are you?', likesCount: 15, name: 'John'},
                {id: 2, message: 'its my first post.', likesCount: 10, name: 'Andrey'},
                {id: 3, message: 'I like this day!', likesCount: 25, name: 'Mariya'},],

       profile: null,
       status:''
        }

 const ProfileReducer = (state = initialState, action)=> {
     switch (action.type) {
         case addPost: {
             let newPost = {
                 id: 5,
                 message: action.newPostText,
                 likesCount: 100,
                 name: 'frontDev93'
             };
             let stateCopy = {...state}
             stateCopy.postData = [...state.postData]
             stateCopy.postData.push(newPost)
             stateCopy.newPostText = ''
             return stateCopy;
         }
         case SET_USER_PROFILE: {
             return {...state, profile:action.profile}
         }
         default:
             return state;

     }



};

export const addPostActionCreator = (newPostText)=> {

    return {
        type: addPost,
        newPostText
    }
}


export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type:SET_STATUS, status})
export const deletePost = (postId) => ({type:DELETE_POST, postId})
export default ProfileReducer;

