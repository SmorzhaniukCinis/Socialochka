import React from 'react';
import s from './MyPost.module.css'
import Post from "./Post/Post";
import {postsType} from "../../../../Type/Types";

type props = {
    posts:Array<postsType>
    fullName: string
}

let MyPost:React.FC<props> = (props) => {
    let postData = [...props.posts].reverse().map (text => <Post {...props} likeCount={text.likeCount} key={text.id} postText={text.postText}/>)

    return (
        <div className={s.PostBlock}>
            {postData}
        </div>
    )
}


export default MyPost


