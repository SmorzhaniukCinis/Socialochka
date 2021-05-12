import React from 'react';
import s from './Post.module.css'

let Post = (props) => {
    return (
        <div className={s.Item}>
            <div className={s.ItemMessage}>
                <p><img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR_D9epGme0WV_2RUmuGoLe5SlEGwnE8VvbQ&usqp=CAU"
                    alt="UserAvatar"/>
                    <p className={s.name}>name</p>
                </p>
                <p>
                    {props.postText}
                </p>
            </div>
            <div className={s.Likes}>
                <div className={s.LikeButton}>Like</div>
                <p>{props.likeCount}</p>
            </div>
        </div>
    )
}

export default Post