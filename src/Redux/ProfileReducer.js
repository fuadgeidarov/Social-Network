import React from 'react';
const addPost = 'ADD-POST';
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
       postData: [{id: 1, message: 'Hi, how are you?', likesCount: 15, name: 'John'},
                {id: 2, message: 'its my first post.', likesCount: 10, name: 'Umar'},
                {id: 3, message: 'MashsAllah!I like this day!', likesCount: 25, name: 'Aisha'},],

       newPostText: '',
       profile: null
        }

 const ProfileReducer = (state = initialState, action)=> {
     switch (action.type) {
         case addPost: {
             let newPost = {
                 id: 5,
                 message: state.newPostText,
                 likesCount: 0,
                 name: 'Mahmud'
             };
             let stateCopy = {...state}
             stateCopy.postData = [...state.postData]
             stateCopy.postData.push(newPost)
             stateCopy.newPostText = ''
             return stateCopy;
         }
         case updateNewPostText: {
             let stateCopy = {...state}
             stateCopy.newPostText = action.newText;
             return stateCopy;
         }
         case SET_USER_PROFILE: {
             return {...state, profile:action.profile}
         }
         default:
             return state;

     }



};

export const addPostActionCreator = ()=> {

    return {
        type: addPost
    }
}

export const updateNewPostTextActionCreator = (text)=> {

    return {
        type: updateNewPostText,newText: text
    }
}
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export default ProfileReducer;