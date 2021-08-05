import React from 'react';
import s from './Posts.module.css'
import MyPost from "./MyPost/MyPost"
import PostForm from "./PostForm/PostForm";
import {postsType, profileType} from "../../../Type/Types";

type props = {
    match:any
    addPost: (post:string) => void
    profile:profileType
    posts: Array<postsType>
}

let PostsBlock:React.FC<props> = React.memo(
    (props) => {
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
                        : <h5>Posts of {props.profile.fullName}</h5>}
                    {props.posts.length
                        // @ts-ignore
                        ?<MyPost posts={props.posts} fullName={props.profile.fullName}/>
                        : <h4 className={s.noPostTitle}>{!props.match.params.userId
                            ?'You have no post'
                            :'This user have no post'}</h4>
                    }

                </div>
            </div>
        )
    }
)


export default PostsBlock;