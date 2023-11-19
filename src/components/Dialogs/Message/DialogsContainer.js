import React from 'react';
import Dialogs from "../Dialogs";
import {addMessageCreator} from "../../../Redux/DialogReducer";
import {updateNewMessageTextActionCreator} from "../../../Redux/DialogReducer";
import {connect} from "react-redux";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import {compose} from "@reduxjs/toolkit";


let mapStateToProps = (state)=> {
    return{
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch)=> {
    return{
        updateNewMessageText: (newMessageText)=> {
             dispatch(addMessageCreator(newMessageText))
        },

    }
}


// let AuthRedirectComponent = withAuthRedirect(Dialogs)
//
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);