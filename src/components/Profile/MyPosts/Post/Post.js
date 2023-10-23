import React from 'react';
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <div>
                <h4 className={classes.name}>{props.name}</h4>
            </div>
            <img src={'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'}/>
            {props.message}
           <div>
               <span>Like {props.likesCount}</span>
           </div>

        </div>
    );
};

export default Post;