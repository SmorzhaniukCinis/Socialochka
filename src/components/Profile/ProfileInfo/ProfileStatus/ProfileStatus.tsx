import React, {useEffect, useState} from "react";
import s from "./ProfileStatus.module.css";
import {ProfileDataForm} from "./ProfileDataForm/ProfileDataForm";
import {profileType} from "../../../../Type/Types";
import {ProfileData} from "./ProfleData/ProfileData";
import {useSelector} from "react-redux";
import {getStatus} from "../../../../redux/Selectors/ProfileSelectors";

type props = {
    profile: profileType
    owner: boolean
}

const ProfileStatus: React.FC<props> = (props) => {

    const statusProp = useSelector(getStatus)
    const  [editMode, setEditMode] = useState(false)
    const  [status, setStatus] = useState(statusProp)

    useEffect(
        () => {
            setStatus(status)
        },
        [status]
    )

    return (
        <div className={s.userInfoBlock}>
            {editMode
                ? <ProfileDataForm
                                   profile={props.profile} status={status}
                                   deactivateEditMode={setEditMode}/>
                : <ProfileData owner={props.owner}
                               profile={props.profile}
                               status={status}
                               activateEditMode={setEditMode}/>}
        </div>
    )
}


export default ProfileStatus