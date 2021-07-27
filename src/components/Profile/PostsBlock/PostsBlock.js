import React from 'react';
import s from './Posts.module.css'
import MyPost from "./MyPost/MyPost"
import PostForm from "./PostForm/PostForm";


let PostsBlock = React.memo(
    (props) => {

        let onSubmit = (formData) => {
            props.addPost(formData.newPostField)
        }

        return (
            <div className={s.postBlock}>
                <div>
                    <h5>New post</h5>
                    <PostForm addPost={props.addPost}/>
                </div>
                <div className={s.PostBlock}>
                    <h5>My posts</h5>
                    <MyPost posts={props.posts}/>
                </div>
            </div>
        )
    }
)


export default PostsBlock;