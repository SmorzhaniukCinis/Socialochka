import React from 'react';
import s from './Posts.module.css'
import MyPost from "./MyPost/MyPost"
import PostForm from "./PostForm/PostForm";
import {useSelector} from "react-redux";
import {getProfile, getUserPosts} from "../../../redux/Selectors/ProfileSelectors";
import {getOwnerId} from "../../../redux/Selectors/AuthSelectors";

export const PostsBlock: React.FC = React.memo(() => {
        const profile = useSelector(getProfile)
        const ownerId = useSelector(getOwnerId)
        const posts = useSelector(getUserPosts)
        return (
            <div className={s.postBlock}>
                {profile.userId === ownerId
                    ? <div>
                        <h5>New post</h5>
                        <PostForm/>
                    </div> : null}

                <div className={s.PostBlock}>
                    {profile.userId === ownerId
                        ? <h5>My posts</h5>
                        : <h5>Posts of {profile.fullName}</h5>}
                    {posts.length
                        ? <MyPost posts={posts} fullName={profile.fullName}/>
                        : <h4 className={s.noPostTitle}>{profile.userId === ownerId
                            ? 'You have no post'
                            : 'This user have no post'}</h4>
                    }

                </div>
            </div>
        )
    }
)
