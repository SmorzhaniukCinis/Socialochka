import React from "react";
import s from "../ProfileStatus.module.css";
import {profileType} from "../../../../../Type/Types";


type props = {
    profile:profileType
    owner:boolean
    status:string
    UserId:number
    subscription:boolean
    followingInProgress: Array<number>
    followUser: (userId:number | null) => void
    unFollowUser: (userId:number | null) => void
    activateEditMode: () => void
}

const ProfileData:React.FC<props> = (props) => {
    return (
        <div className={s.profileInfo}>
            <span className={s.userNameField}>{props.profile.fullName}</span> <br/>
            <span>{props.status || 'No status'}</span><br/>
            <span>Location: <mark>{props.profile.aboutMe || 'No location'}</mark></span> <br/>
            <span>Looking for a job : <mark
                className={s.lookingForAJobValue}>{props.profile.lookingForAJob ? "yes" : "no"}</mark></span> <br/>
            <span>I want to work as a <span
                className={s.jobDescription}>{props.profile.lookingForAJobDescription || '  -'}</span></span> <br/>
            {!props.owner
                ? <button className={s.profileInfoButton} onClick={props.activateEditMode}>Edit</button>
                : props.subscription
                    ? <div>
                        <button disabled={props.followingInProgress.some((id: number) => id === props.UserId)}
                                className={s.followButton}
                                onClick={() => {
                                    props.unFollowUser(props.profile.userId)
                                }}>Unfollow
                        </button>

                    </div>
                    : <div>
                        <button disabled={props.followingInProgress.some(id => id === props.UserId)}
                                className={s.followButton}
                                onClick={() => {
                                    props.followUser(props.profile.userId)
                                }}>Follow
                        </button>
                    </div>}
        </div>
    )
}

export default ProfileData
