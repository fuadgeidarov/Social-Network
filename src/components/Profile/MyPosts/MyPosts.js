import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const MyPosts = (props) => {
    let postsElements = props.postData.map((p) => {
        return (<Post name={p.name} message={p.message} likesCount={p.likesCount}/>)
    })
    const newPostElement = React.createRef()
    const addPost = (values) => {
        props.addPost(values.newPostText)
        }

    return (
        <div className={classes.postsBlock}>
           <div><h3 className={classes.myPosts} >My Posts</h3></div>
          <AddNewPostFormRedux onSubmit={addPost}/>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>



    );
};

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field name={'newPostText'} component={Textarea} placeholder='Write new Post'
                           validate={[required, maxLengthCreator(10)]}/>
                </div>
                <div>
                    <button >Add Post</button>
                    <button>Remove</button>
                </div>
            </div>

        </form>

    )
}

let AddNewPostFormRedux = reduxForm({form:'ProfileAddNewPostForm'}) (AddNewPostForm)
export default MyPosts;