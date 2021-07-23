import s from "../Profile.module.css";
import React from "react";
import avatar from '../../../defaultData/avatarDefoult.png'
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import Preloader from "../../Preloader/Preloader";
import {uploadProfileData} from "../../../redux/Priofile-reducer";

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }
    let onPhotoSelected = (e) =>{
        if(e.target.files.length){
            props.setNewAvatarImg(e.target.files[0])
        }
    }


    return (
        <div className={s.nameBlock}>
            <div className={s.avaBlock}>
                <img src={(props.profile.photos && props.profile.photos.small) || avatar} alt="avatarPhoto"/>
                {!props.owner
                    ? <input className={s.selectAvaFile} onChange={onPhotoSelected} type="file"/>
                    : null}
            </div>
            <ProfileStatus status={props.status}
                           owner={props.owner}
                           updateStatus={props.updateStatus}
                           uploadProfileData={props.uploadProfileData}
                           profile={props.profile} />
        </div>
    )
}

export default ProfileInfo
