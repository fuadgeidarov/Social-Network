import React from 'react';
const addMessage = 'ADD-MESSAGE';
const updateNewMessageText = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState ={
    messagesData: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Assalamu Aleykum!'},
        {id: 4, message: 'Can You help me?!'},
        {id: 5, message: 'What are you do?'},
        {id: 6, message: 'Alhamdullilah! I m fine!'},
    ],
    newMessageText: '',
    dialogsData: [
        {id: 1, name: 'Dmitriy'},
        {id: 2, name: 'John'},
        {id: 3, name: 'Ahmad'},
        {id: 4, name: 'Umar'},
        {id: 5, name: 'Svetlana'},
        {id: 6, name: 'Aisha'}],}

const DialogsReducer = (state = initialState, action) => {
     switch (action.type) {
         case addMessage: {
             let newMessage = {
                 id: 7,
                 message: state.newMessageText,
             }
             let stateCopy = {...state}
             stateCopy.messagesData = [...state.messagesData]
             stateCopy.messagesData.push(newMessage)
             stateCopy.newMessageText = ''
             return stateCopy;
         }
         case updateNewMessageText: {
             let stateCopy = {...state}
             stateCopy.newMessageText = action.newMessage;
             return stateCopy;
         }
         default:
             return state;
     }


};
export const addMessageCreator = () => {

    return {
        type: addMessage
    }
}

export const updateNewMessageTextActionCreator = (mes) => {

    return {
        type: updateNewMessageText, newMessage: mes
    }
}
export default DialogsReducer;