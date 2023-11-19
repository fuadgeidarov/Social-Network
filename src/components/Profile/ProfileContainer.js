import React, {useEffect} from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/ProfileReducer";
import {Navigate, useParams} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "@reduxjs/toolkit";
import {updateStatus} from "../../Api/Api";


const ProfileContainer = (props)=> {
let {userId} = useParams()
    if(!userId) {
        userId = props.authorizedUserId
    }
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                props.setUserProfile(response.data)

            })
    }, [userId])

        return (
            <div>
                <Profile profile={props.profile}  />
            </div>
       )


}


let mapStateToProps = (state) => ({
    profile: state.profilePages.profile,
    status: state.profilePages.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(connect (mapStateToProps, {setUserProfile}),
    withAuthRedirect
)(ProfileContainer)