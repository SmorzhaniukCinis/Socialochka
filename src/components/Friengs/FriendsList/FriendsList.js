import React from 'react'
import style from './FriendsList.module.css'
import {NavLink} from "react-router-dom";

const FriendsList = (props) => {
    return (
        <NavLink className={style.container} to={"/friends/" + props.id}>
            <div className={style.item}>
                <img src={props.photo} alt=""/>
                <p>{props.users}</p>
            </div>
        </NavLink>
    )
}
export default FriendsList