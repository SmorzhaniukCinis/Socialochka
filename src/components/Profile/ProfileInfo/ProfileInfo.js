import s from "../Profile.module.css";
import React from "react";
import avatar from '../../../defaultData/avatarDefoult.png'

const ProfileInfo = (props=null) => {
    return (
        <div className={s.nameBlock}>
            <div className={s.avaBlock}>
                <img
                    src={(props.profile.photos === undefined)? avatar : props.profile.photos.small}
                    alt=""/>
            </div>
            <div className={s.userName} >
                <span>{props.profile.fullName}</span> <br/>
                <span>{props.profile.lookingForAJobDescription}</span> <br/>
                <span>{props.profile.aboutMe}</span> <br/>
            </div>
        </div>
    )
}

export default ProfileInfo