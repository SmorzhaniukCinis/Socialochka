import React, {useState} from "react";
import s from "./Users.module.css";
import avatarPhoto from "../../defaultData/avatarDefoult.png";
import {NavLink} from "react-router-dom";
import Pagination from "./Pagination/Pagination";


let Users = (props) => {
    return (
        <div className={s.main}>
            {props.users.map(u => <div key={u.id} className={s.container}>

                <div className={s.leftBlock}>
                    <NavLink className={s.nawLink} to={'/profile/' + u.id}>
                        <img src={(u.photos.small === null)
                            ? avatarPhoto : u.photos.small} alt="ava"/>
                        <span className={s.userName}>{u.name}</span>
                    </NavLink>

                    {u.followed
                        ?
                        <button disabled={props.followingInProgress.some(id => id === u.id)} className={s.followButton}
                                onClick={() => {
                                    props.unFollowUser(u.id)
                                }}>Unfollow</button>
                        :
                        <button disabled={props.followingInProgress.some(id => id === u.id)} className={s.followButton}
                                onClick={() => {
                                    props.followUser(u.id)
                                }}>Follow</button>}
                </div>

                <div className={s.rightBlock}>
                    <span>{'u.country'}</span>
                    <span>{'u.city'}</span>
                    <span>{'u.status'}</span>
                </div>
            </div>)}
            <Pagination portionCount={props.portionCount} totalCount={props.totalCount}
                        onPageChanged={props.onPageChanged} currentPage={props.currentPage}
                        pageSize={props.pageSize} setCurrentPortion={props.setCurrentPortion}
                        PortionNumber={props.PortionNumber}/>
        </div>
    )
}

export default Users