import ProfileReducer, {addPostActionCreator, deletePost} from "./ProfileReducer";
let state = {
    postData: [{id: 1, message: 'Hi, how are you?', likesCount: 15, name: 'John'},
        {id: 2, message: 'its my first post.', likesCount: 10, name: 'Andrey'},
        {id: 3, message: 'I like this day!', likesCount: 25, name: 'Mariya'},],
}
it('length of posts should be incremented ', ()=>{
    let action = addPostActionCreator('VC - social network')
    let newState = ProfileReducer(state, action)
   expect ( newState.postData.length).toBe(4)
})
it('after deleting length of messages should be decrement ',()=>{
    let action = deletePost(1)
    let newState = ProfileReducer(state, action)
    expect(newState.postData.length).toBe(3)
})
