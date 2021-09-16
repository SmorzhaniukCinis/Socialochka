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

    let disabled = s.disabled

    return (
        <div className={s.profileInfo}>
            <span className={s.userNameField}>{props.profile.fullName}</span> <br/>
            <span>{props.status || 'No status'}</span><br/>
            <span>Location: <mark>{props.profile.aboutMe || 'No location'}</mark></span> <br/>
            <span>Looking for a job : <mark
                className={s.lookingForAJobValue}>{props.profile.lookingForAJob ? "yes" : "no"}</mark></span> <br/>
            <span>I want to work as a <span
                className={s.jobDescription}>{props.profile.lookingForAJobDescription || '  -'}</span></span> <br/>
            <div className={s.linkBlock}>
                <a href={props.profile.contacts.youtube || '#'}  className={props.profile.contacts.youtube || disabled }>
                    <img className={s.link} alt={'icon'} src="https://img.icons8.com/metro/30/000000/youtube.png"/>
                </a>
                <a href={props.profile.contacts.github || '#'} className={props.profile.contacts.github || disabled }>
                    <img className={s.link} alt={'icon'} src="https://img.icons8.com/metro/30/000000/github.png"/>
                </a>
                <a href={props.profile.contacts.facebook || '#'} className={props.profile.contacts.facebook || disabled }>
                    <img className={s.link} alt={'icon'} src="https://img.icons8.com/metro/30/000000/facebook-new--v2.png"/>
                </a>
                <a href={props.profile.contacts.instagram || '#'} className={props.profile.contacts.instagram || disabled }>
                    <img className={s.link} alt={'icon'} src="https://img.icons8.com/metro/30/000000/instagram-new.png"/>
                </a>
                <a href={props.profile.contacts.vk || '#'} className={props.profile.contacts.vk || disabled }>
                    <img className={s.link} alt={'icon'} src="https://img.icons8.com/metro/30/000000/vk-com--v1.png"/>
                </a>
                <a href={props.profile.contacts.twitter || '#'} className={props.profile.contacts.twitter || disabled }>
                    <img className={s.link} alt={'icon'} src="https://img.icons8.com/metro/30/000000/twitter.png"/>
                </a>
                <a href={props.profile.contacts.website || ''} className={props.profile.contacts.website || disabled }>
                    <img className={s.link} alt={'icon'} src="https://img.icons8.com/metro/30/000000/google-code.png"/>
                </a>
            </div>
            {!props.owner
                ? <span className={s.profileInfoButton} onClick={props.activateEditMode}>Edit</span>
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
