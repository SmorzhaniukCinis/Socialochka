import React from "react";
import s from "./Users.module.css";
import avatarPhoto from "../../defaultData/avatarDefoult.png";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";
import {onFollowingProgress} from "../../redux/Users-Reducer";


let Users = (props) => {
    let pages = []
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    if (pagesCount >= 20) pagesCount = 20
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={s.main}>
            {props.users.map(u => <div key={u.id} className={s.container}>

                <div className={s.leftBlock}>
                    <NavLink className={s.nawLink} to={'/profile/'+ u.id}>
                        <img src={(u.photos.small === null)
                            ? avatarPhoto : u.photos.small} alt="ava"/>
                        <span className={s.userName}>{u.name}</span>
                    </NavLink>

                    {u.followed
                        ? <button disabled={props.followingInProgress.some(id=>id===u.id)} className={s.followButton} onClick={() => {
                            props.onFollowingProgress(u.id, true)
                            usersAPI.unFollowUser(u.id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        props.unFollowUser(u.id)
                                    }
                                    props.onFollowingProgress(u.id, false)
                                })

                        }}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id=>id===u.id)} className={s.followButton} onClick={() => {
                                props.onFollowingProgress(u.id, true)
                                usersAPI.FollowUser(u.id)
                                .then(data => {
                                    if (data.resultCode === 0) {
                                        props.followUser(u.id)
                                    }
                                    props.onFollowingProgress(u.id, false)
                                })


                        }}>Follow</button>}
                </div>

                <div className={s.rightBlock}>
                    <span>{'u.country'}</span>
                    <span>{'u.city'}</span>
                    <span>{'u.status'}</span>
                </div>
            </div>)}
            <div className={s.pagination}>
                {pages.map(p => {
                    return <span onClick={() => {
                        props.onPageChanged(p)
                    }} className={props.currentPage === p && s.selectedPage}>{p}</span>
                })}
            </div>
        </div>
    )
}

export default Users