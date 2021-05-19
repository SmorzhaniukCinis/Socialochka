import React from "react";
import s from "./Users.module.css";
import avatarPhoto from "../../defaultData/avatarDefoult.png";
import {NavLink} from "react-router-dom";
import axios from "axios";


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
                        ? <button className={s.followButton} onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '8744d81b-6b25-423d-8558-71644b170fd6'
                                    }
                                })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unFollowUser(u.id)
                                    }
                                })

                        }}>Unfollow</button>
                        : <button className={s.followButton} onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                {},{
                                withCredentials: true,
                                headers: {
                                        'API-KEY': '8744d81b-6b25-423d-8558-71644b170fd6'
                                    }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.followUser(u.id)
                                    }
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