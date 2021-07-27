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
        <div className={s.userInfoBlock}>
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
            <span className={s.userNameField}>{props.profile.fullName}</span> <br/>
            <span>{props.status || 'No status'}</span><br/>
            <span>Location: <mark>{props.profile.aboutMe  || 'No location'}</mark></span> <br/>
            <span>Looking for a job : <mark className={s.lookingForAJobValue}>{props.profile.lookingForAJob ? "yes" : "no"}</mark></span> <br/>
            <span>I want to work as a <span className={s.jobDescription}>{props.profile.lookingForAJobDescription || '  -'}</span></span> <br/>
            {!props.owner ?
                <button className={s.profileInfoButton} onClick={props.activateEditMode}>Edit</button> : null}
        </div>
    )
}


export default ProfileStatus