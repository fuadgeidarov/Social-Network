import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const Dialogs = (props) => {
   let state = props.dialogsPage

    const dialogsElements = state.dialogsData.map((dialog) => {
        return (<DialogItem name={dialog.name} id={dialog.id}/>)
    })

   const messagesElements = state.messagesData.map((mes) => {
        return (<Message message={mes.message}/>)
    })

     let addNewMessage = (values) => {
       props.updateNewMessageText(values.newMessage)
     }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>


    );
};
const maxLength50 = maxLengthCreator(50)
const AddMessageForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name={'newMessage'} placeholder={'Enter your message'}
            validate={[required, maxLength50]}/>
           </div>
        <div><button>Send Message</button>

            <button>Delete</button></div>
    </form>)
}

const AddMessageFormRedux = reduxForm({form:'dialogAddMessageForm'})(AddMessageForm)
export default Dialogs;