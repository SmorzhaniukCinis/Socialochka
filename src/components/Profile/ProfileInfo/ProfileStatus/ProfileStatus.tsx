import React, {useState} from "react";
import s from "./ProfileStatus.module.css";
import {ProfileDataForm} from "./ProfileDataForm/ProfileDataForm";
import {profileType} from "../../../../Type/Types";
import {ProfileData} from "./ProfleData/ProfileData";

type props = {
    profile: profileType
    owner: boolean
}

const ProfileStatus: React.FC<props> = (props) => {

    const  [editMode, setEditMode] = useState(false)


    return (
        <div className={s.userInfoBlock}>
            {editMode
                ? <ProfileDataForm
                                   profile={props.profile}
                                   deactivateEditMode={setEditMode}/>
                : <ProfileData owner={props.owner}
                               profile={props.profile}
                               activateEditMode={setEditMode}/>}
        </div>
    )
}


export default ProfileStatus