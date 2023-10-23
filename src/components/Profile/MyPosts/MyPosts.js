import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postsElements = props.postData.map((p) => {
        return (<Post name={p.name} message={p.message} likesCount={p.likesCount}/>)
    })

    const newPostElement = React.createRef()
    const addPost = () => {
        props.updateNewPostText()
        // props.dispatch(addPostActionCreator());
        }

    let onPostChange = ()=>{
        let text = newPostElement.current.value;
        // props.dispatch(updateNewPostTextActionCreator(text));
        props.addPost(text)
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}
                    placeholder='Write new Post'/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}

            </div>
        </div>

    );
};

export default MyPosts;