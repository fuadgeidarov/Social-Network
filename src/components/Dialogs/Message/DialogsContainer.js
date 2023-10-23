import React from 'react';
import Dialogs from "../Dialogs";
import {addMessageCreator} from "../../../Redux/DialogReducer";
import {updateNewMessageTextActionCreator} from "../../../Redux/DialogReducer";

import {connect} from "react-redux";

let mapStateToProps = (state)=> {
    return{
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch)=> {
    return{
        updateNewMessageText: ()=> {
             dispatch(addMessageCreator())
        },
        addMessage:(mes) => {
            dispatch(updateNewMessageTextActionCreator(mes))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;