import s from "./ProfileInfo.module.css";
import React from "react";
import avatar from '../../../defaultData/avatarDefoult.png'
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import Preloader from "../../Preloader/Preloader";
import {requestProfile} from "../../../redux/Priofile-reducer";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    let onPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.setNewAvatarImg(e.target.files[0])
        }
    }

    return (
        <div className={s.nameBlock}>
            <div className={s.avaBlock}>
                <img src={(props.profile.photos && props.profile.photos.small) || avatar} alt="avatarPhoto"/>
                {!props.owner
                    ? <div className={s.selectPhotoWrapper}>
                        <input className={s.selectAvaFile} id='selectAvaFile' onChange={onPhotoSelected} type="file"/>
                        <label className={s.sendPhotoButton} htmlFor='selectAvaFile'>change avatar</label>
                    </div>
                    : null}
            </div>
            <ProfileStatus status={props.status}
                           UserId={props.UserId}
                           owner={props.owner}
                           updateStatus={props.updateStatus}
                           requestProfile={props.requestProfile}
                           subscription={props.subscription}
                           followingInProgress={props.followingInProgress}
                           uploadProfileData={props.uploadProfileData}
                           followUser={props.followUser}
                           unFollowUser={props.unFollowUser}
                           profile={props.profile}/>
        </div>
    )
}

export default ProfileInfo