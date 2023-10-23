import React from 'react';

let initialState ={
    friends: [
        {id: 1, name: 'Svetlana'},
        {id: 2, name: 'Ahmad'},
        {id: 3, name: 'Aisha'},
        {id: 4, name: 'Dmitriy'},
        {id: 5, name: 'John'}
    ]
}
const SidebarReducer = (state = initialState, action) => {
    return state
};

export default SidebarReducer;