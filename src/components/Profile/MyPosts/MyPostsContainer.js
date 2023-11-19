import React from 'react';

import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPostActionCreator} from "../../../Redux/ProfileReducer";


const mapStateToProps = (state)=> {
    return {
        postData:state.profilePages.postData,
        newPostText: state.profilePages.newPostText,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText)=> {
            dispatch (addPostActionCreator(newPostText))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;

