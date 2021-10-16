import React from 'react';
import s from './Post.module.css'
import { AiOutlineHeart } from "react-icons/ai";

type props = {
    fullName: string | undefined
    postText: string
    likeCount: number
}

let Post: React.FC<props> = (props) => {
    return (
        <div className={s.Item}>
            <div>
                <img className={s.userPhoto}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_D9epGme0WV_2RUmuGoLe5SlEGwnE8VvbQ&usqp=CAU"
                    alt="UserAvatar"/>
            </div>

            <div className={s.contentWrapper}>
                <div>
                    <span className={s.name}>{props.fullName}</span>
                </div>
                <div className={s.postTextWrapper}>
                    <p className={s.postText}>
                        {props.postText}
                    </p>
                </div>
                <div className={s.Likes}>
                    <button className={s.LikeButton}><AiOutlineHeart/></button>
                    <span>{props.likeCount}</span>
                </div>
            </div>
        </div>
    )
}

export default Post