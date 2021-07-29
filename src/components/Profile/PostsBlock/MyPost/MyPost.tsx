import React from 'react';
import s from './MyPost.module.css'
import Post from "./Post/Post";




let MyPost = (props) => {
    let postData = [...props.posts].reverse().map (text => <Post {...props} likeCount={text.likeCount} key={text.id} postText={text.postText}/>)

    return (
        <div className={s.PostBlock}>
            {postData}
        </div>
    )
}


export default MyPost


