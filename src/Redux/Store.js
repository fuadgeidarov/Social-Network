import profileReducer from "./ProfileReducer";
import dialogReducer from "./DialogReducer";
import sidebarReducer from "./SidebarReducer";
import usersReducer from "./usersReducer";


let store = {
    _state: {
        profilePages: {
            postData: [
                {id: 1, message: 'Hi, how are you?', likesCount: 15, name: 'John'},
                {id: 2, message: 'its my first post.', likesCount: 10, name: 'Umar'},
                {id: 3, message: 'I like this day!', likesCount: 25, name: 'Mariya'},],

            newPostText: '',

        },

        dialogsPage: {
            messagesData: [
                {id: 1, message: 'Hi!'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Assalamu Aleykum!'},-
                {id: 4, message: 'Can You help me?!'},
                {id: 5, message: 'What are you do?'},
                {id: 6, message: 'Hello! I m fine!'},
            ],
            newMessageText: '',


            dialogsData: [
                {id: 1, name: 'Dmitriy'},
                {id: 2, name: 'John'},
                {id: 3, name: 'Andrey'},
                {id: 4, name: 'Umar'},
                {id: 5, name: 'Svetlana'},
                {id: 6, name: 'Mariya'}],
        },

        sideBar: {
            friends: [
                {id: 1, name: 'Svetlana'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Mariya'},
                {id: 4, name: 'Dmitriy'},
                {id: 5, name: 'John'}
            ]
        },

    },
    getState() {
        return this._state
    },

    _callSubscriber() {
        console.log('State was changed!');
    },
    subscribe(observer) {
        this._callSubscriber = observer  // patern observer
    },

    dispatch(action) {// объект у которого есть type
        this._state.profilePages =  profileReducer(this._state.profilePages, action)
        this._state.dialogsPage =  dialogReducer(this._state.dialogsPage, action)
        this._state.sideBar=  sidebarReducer(this._state.sideBar, action)
        // this._state.usersPage = usersReducer(this._state.usersPage, action)

        this._callSubscriber(this._state)
    }


}

window.store = store;
export default store;