import React from 'react';
import s from './Posts.module.css'
import MyPost from "./MyPost/MyPost"



let PostsBlock = (props) => {

    let AddPost = () => {
        props.addPost()
    }

    let onPostChange = (e) => {
        let PostText = e.target.value
        props.updatePost(PostText)
    }

    return(
        <div className={s.postBlock}>
            <div>
                <h5>New post</h5>
                <div className={s.newPostBlock}>
                    <div>
                        <textarea name="" cols="30" rows="3" onChange={onPostChange} value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={AddPost}>Send post</button>
                    </div>
                </div>
            </div>
            <div className={s.PostBlock}>
                <h5>My posts</h5>
                <MyPost posts={props.posts}/>
            </div>
        </div>
    )
}

export default PostsBlock;