import React, {useEffect, useState} from "react";
import s from "./ProfileStatus.module.css";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";
import {requestProfile} from "../../../../redux/Priofile-reducer";


const ProfileStatus = (props) => {
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
        <div className={s.userName}>
            {editMode
                ? <ProfileDataForm requestProfile={props.requestProfile} uploadProfileData={props.uploadProfileData}
                                   UserId={props.UserId}
                                   owner={props.owner} profile={props.profile} updateStatus={props.updateStatus}                                 status={status}
                                   deactivateEditMode={deactivateEditMode}/>
                : <ProfileData owner={props.owner} profile={props.profile} status={props.status}
                               activateEditMode={activateEditMode}/>}
        </div>
    )
}

const ProfileData = (props) => {
    return (
        <div className={s.profileInfo}>
            <span>{props.profile.fullName}</span> <br/>
            <span>{props.profile.aboutMe || '---'}</span> <br/>
            <span>{props.status || 'no status'}</span><br/>
            <span>Looking for a job : <mark className={s.lookingForAJobValue}>{props.profile.lookingForAJob ? "yes" : "no"}</mark></span> <br/>
            <span>{props.profile.lookingForAJobDescription || '---'}</span> <br/>
            {!props.owner ?
                <button className={s.profileInfoButton} onClick={props.activateEditMode}>Edit</button> : null}
        </div>
    )
}


export default ProfileStatus