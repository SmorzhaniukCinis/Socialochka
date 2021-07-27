import React from 'react';
import s from './Posts.module.css'
import MyPost from "./MyPost/MyPost"
import PostForm from "./PostForm/PostForm";


let PostsBlock = React.memo(
    (props) => {
        debugger
        return (
            <div className={s.postBlock}>
                {!props.match.params.userId
                    ? <div>
                    <h5>New post</h5>
                    <PostForm addPost={props.addPost}/>
                </div> : null}

                <div className={s.PostBlock}>
                    {!props.match.params.userId
                        ? <h5>My posts</h5>
                        : <h5>Posts of {props.fullName}</h5>}

                    <MyPost posts={props.posts} fullName={props.fullName}/>
                </div>
            </div>
        )
    }
)


export default PostsBlock;