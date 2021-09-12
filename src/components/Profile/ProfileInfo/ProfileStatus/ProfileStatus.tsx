import React, {useEffect, useState} from "react";
import s from "./ProfileStatus.module.css";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";
import {profileType} from "../../../../Type/Types";
import ProfileData from "./ProfleData/ProfileData";

type props = {
    profile: profileType
    owner: boolean
    status: string
    UserId: number
    updateStatus: () => void
    requestProfile: () => void
    subscription: boolean
    followingInProgress: Array<number>
    uploadProfileData: () => void
    followUser: () => void
    unFollowUser: () => void
}

const ProfileStatus: React.FC<props> = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)


    useEffect(
        () => {
            setStatus(props.status)
        },
        [props.status]
    )

    let deactivateEditMode = () => {
        setEditMode(false)
    }
    let activateEditMode = () => {
        setEditMode(true)
    }

    return (
        <div className={s.userInfoBlock}>
            {editMode
                ? <ProfileDataForm uploadProfileData={props.uploadProfileData}
                                   UserId={props.UserId}
                                   profile={props.profile} updateStatus={props.updateStatus} status={status}
                                   deactivateEditMode={deactivateEditMode}/>
                : <ProfileData owner={props.owner}
                               profile={props.profile}
                               subscription={props.subscription}
                               followingInProgress={props.followingInProgress}
                               UserId={props.UserId}
                               unFollowUser={props.unFollowUser}
                               followUser={props.followUser}
                               status={props.status}
                               activateEditMode={activateEditMode}/>}
        </div>
    )
}


export default ProfileStatus