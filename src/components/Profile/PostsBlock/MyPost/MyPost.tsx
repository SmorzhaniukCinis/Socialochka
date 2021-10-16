import React from 'react';
import s from './MyPost.module.css'
import Post from "./Post/Post";
import {postsType} from "../../../../Type/Types";

type props = {
    posts:Array<postsType>
    fullName: string | undefined

}
let MyPost:React.FC<props> = (props) => {
    let postData = [...props.posts].reverse().map (postItem => <Post fullName={props.fullName} key={postItem.id} likeCount={postItem.likeCount} postText={postItem.postText}/>)

    return (
        <div className={s.PostBlock}>
            {postData}
        </div>
    )
}


export default MyPost


