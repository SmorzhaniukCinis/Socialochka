import React, {useEffect} from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import PostsBlockContainer from "./PostsBlock/PostsBlockContainer";
import profileTheme from "../../defaultData/profileBackgroundTheme.jpg"
import {useDispatch, useSelector} from "react-redux";
import {getProfile} from "../../redux/Selectors/ProfileSelectors";
import {useHistory} from "react-router-dom";
import {withRouter} from "react-router";
import {requestProfile, requestStatus} from "../../redux/Priofile-reducer";



 const Profile1 = (props:any) => {
    const profile = useSelector(getProfile)
     const dispatch = useDispatch()
    const history = useHistory()

     const requestProfile = () => {
         let url = history.location.pathname.split('/')
         if (url.length===3){
              let subUrl = Number(url[2])
         }
         let userId = subUrl


             if (!userId) {
                 userId = profile.userId as number
                 if (!userId) {
                     props.history.push('/login')
                 }
             }

         if (userId) {}
         this.props.requestProfile(userId)
         this.props.requestStatus(userId)
     }


    useEffect(() => {
        requestProfile()
        dispatch(requestProfile(userId))
        dispatch(requestStatus(userId))
    }, )

    //
    //
     return (
        <div className={s.contentWrapper}>
            <div className={s.themeBlock}>
                <img src={profileTheme} alt=""/>
            </div>
            <ProfileInfo />
            {/*@ts-ignore*/}
            <PostsBlockContainer/>
        </div>
    );
}
export const Profile =  withRouter(Profile1)
