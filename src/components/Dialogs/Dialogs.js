import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
   let state = props.dialogsPage

    const dialogsElements = state.dialogsData.map((dialog) => {
        return (<DialogItem name={dialog.name} id={dialog.id}/>)
    })

   const messagesElements = state.messagesData.map((mes) => {
        return (<Message message={mes.message}/>)
    })


    let newMessage = React.createRef()
     let onAddMessage = ()=> {
         props.updateNewMessageText()
     }
     let onMessageChange = (e)=>{
        let mes = e.target.value;
        props.addMessage(mes)

     }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div><textarea onChange={onMessageChange} ref={newMessage} value={props.newMessageText}
                           placeholder='Enter your message'></textarea></div>
            <div><button onClick={onAddMessage}>Send Message</button>

                <button>Delete</button></div>

        </div>


    );
};

export default Dialogs;