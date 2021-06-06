import React from 'react';
import s from './Posts.module.css'
import MyPost from "./MyPost/MyPost"
import ReduxPostForm from "./newPostForm/newPostForm";


let PostsBlock = (props) => {

    let onSubmit = (formData) => {
        props.addPost(formData.newPostField)
    }

    return (
        <div className={s.postBlock}>
            <div>
                <h5>New post</h5>
                <ReduxPostForm onSubmit={onSubmit}/>
            </div>
            <div className={s.PostBlock}>
                <h5>My posts</h5>
                <MyPost posts={props.posts}/>
            </div>
        </div>
    )
}


export default PostsBlock;