import s from "../Profile.module.css";
import React from "react";
import avatar from '../../../defaultData/avatarDefoult.png'
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props=null) => {
    return (
        <div className={s.nameBlock}>
            <div className={s.avaBlock}>
                <img
                    src={(props.profile.photos === undefined)? avatar : props.profile.photos.small}
                    alt=""/>
            </div>

            <ProfileStatus status={props.status}
                           updateStatus={props.updateStatus}
                           profile={props.profile} />
        </div>
    )
}

export default ProfileInfo