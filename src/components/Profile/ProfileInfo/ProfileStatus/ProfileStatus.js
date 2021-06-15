import React, {useEffect, useState} from "react";
import s from "./ProfileStatus.module.css";



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
        props.updateStatus(status)
    }
    let activateEditMode = () => {
        setEditMode(true)
    }
    let statusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return(
            <div className={s.userName}>
                <span>{props.profile.fullName}</span> <br/>
                <span>{props.profile.lookingForAJobDescription}</span> <br/>
                {editMode
                    ? <input onChange={statusChange} value={status} onBlur={deactivateEditMode} autoFocus={true} />
                     : <span onDoubleClick={activateEditMode} >{props.status || 'no status'}</span>}


            </div>
        )
}


export default ProfileStatus