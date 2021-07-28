import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsBlockContainer from "./PostsBlock/PostsBlockContainer";
import profileTheme from "../../defaultData/profileBackgroundTheme.jpg"
const Profile = (props) => {

    return (
        <div className={s.contentWpapper}>
            <div className={s.themeBlock}>
                <img src={profileTheme} alt=""/>
            </div>


            <ProfileInfo status={props.status}
                         UserId={props.UserId}
                         updateStatus={props.updateStatus}
                         setNewAvatarImg={props.setNewAvatarImg}
                         owner={props.owner}
                         uploadProfileData={props.uploadProfileData}
                         requestProfile={props.requestProfile}
                         followUser={props.followUser}
                         unFollowUser={props.unFollowUser}
                         subscription={props.subscription}
                         followingInProgress={props.followingInProgress}
                         profile={props.profile}/>
            <PostsBlockContainer/>
        </div>
    );
}

export default Profile;
