import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsBlockContainer from "./PostsBlock/PostsBlockContainer";
import profileTheme from "../../defaultData/profileBackgroundTheme.jpg"

type props =  {

}

const Profile: React.FC<props> = (props) => {
    return (
        <div className={s.contentWpapper}>
            <div className={s.themeBlock}>
                <img src={profileTheme} alt=""/>
            </div>

            {/*@ts-ignore*/}
            <ProfileInfo {...props}/>
            {/*@ts-ignore*/}
            <PostsBlockContainer/>
        </div>
    );
}

export default Profile;
