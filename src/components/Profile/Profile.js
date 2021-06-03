import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsBlockContainer from "./PostsBlock/PostsBlockContainer";
import ProfileStatus from "./ProfileInfo/ProfileStatus/ProfileStatus";

const Profile = (props) => {


    return (
        <div className={s.contentWpapper}>
            <div className={s.themeBlock}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGxcsnxGoyxENBc9YhUjmsJ3JgrgW7AO6i-w&usqp=CAU"
                    alt=""/>
            </div>

            <ProfileInfo status={props.status}
                         updateStatus={props.updateStatus}
                         profile={props.profile}/>
            <PostsBlockContainer/>
        </div>
    );
}

export default Profile;
