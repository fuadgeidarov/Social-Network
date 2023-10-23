import React from 'react';
import {addPostActionCreator} from "../../../Redux/ProfileReducer";
import {updateNewPostTextActionCreator} from "../../../Redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state)=> {
    return {
        postData:state.profilePages.postData,
        newPostText: state.profilePages.newPostText,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: ()=> {
            let action =(addPostActionCreator())
            dispatch(action);
        },
        addPost: (text)=> {
            dispatch (updateNewPostTextActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;

