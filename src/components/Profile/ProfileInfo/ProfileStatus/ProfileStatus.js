import React, {useEffect, useState} from "react";
import s from "./ProfileStatus.module.css";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";


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
                ? <ProfileDataForm uploadProfileData={props.uploadProfileData}  owner={props.owner} profile={props.profile} updateStatus={props.updateStatus}                                 status={status}
                                   deactivateEditMode={deactivateEditMode}/>
                : <ProfileData owner={props.owner} profile={props.profile} status={props.status}
                               activateEditMode={activateEditMode}/>}
        </div>
    )
}

const ProfileData = (props) => {
    return (
        <div>
            <span>{props.profile.fullName}</span> <br/>
            <span>{props.profile.AboutMe}</span> <br/>
            <span>{props.status || 'no status'}</span><br/>
            <span>{props.profile.lookingForAJob ? "I'm looking for a job" : "I'm not looking for a job"}</span> <br/>
            <span>{props.profile.lookingForAJobDescription || '---'}</span> <br/>
            {!props.owner ?
                <button className={s.profileInfoButton} onClick={props.activateEditMode}>Edit</button> : null}
        </div>
    )
}


export default ProfileStatus