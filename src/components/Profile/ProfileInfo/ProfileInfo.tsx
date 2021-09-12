import s from "./ProfileInfo.module.css";
import React from "react";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import Preloader from "../../Preloader/Preloader";
import {profileType} from "../../../Type/Types";
import SimpleModal from "./Modal/Modal";

type props = {
    profile:profileType
    setNewAvatarImg:any
    owner:boolean
    status:string
    UserId:number
    updateStatus: () => void
    requestProfile: () => void
    subscription:boolean
    followingInProgress: Array<number>
    uploadProfileData: () => void
    followUser: () => void
    unFollowUser: () => void
}

const ProfileInfo: React.FC<props> = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    let onPhotoSelected = (e: { target: { files: string | any[]; }; }) => {
        if (e.target.files.length) {
            props.setNewAvatarImg(e.target.files[0])
        }
    }
    return (
        <div className={s.nameBlock}>
            <div className={s.avaBlock}>

                <SimpleModal profile={props.profile} />
                {!props.owner
                    ? <div className={s.selectPhotoWrapper}>
                        {/*@ts-ignore*/}
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
