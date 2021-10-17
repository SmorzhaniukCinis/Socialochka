import React, {useEffect} from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import profileTheme from "../../defaultData/profileBackgroundTheme.jpg"
import {useDispatch, useSelector} from "react-redux";
import {getProfile} from "../../redux/Selectors/ProfileSelectors";
import {useHistory} from "react-router-dom";
import {requestProfile, requestStatus} from "../../redux/Priofile-reducer";
import queryString from "querystring";
import {toNumber} from "lodash";
import {getOwnerId} from "../../redux/Selectors/AuthSelectors";
import {PostsBlock} from "./PostsBlock/PostsBlock";
import Preloader from "../Preloader/Preloader";
import {Redirect} from "react-router/ts4.0";


export const Profile = () => {
    const profile = useSelector(getProfile)
    const ownerId = useSelector(getOwnerId)
    const dispatch = useDispatch()
    const history = useHistory()


        const urlParams = queryString.parse(history.location.search.substr(1))
        let userId: number | null = toNumber(urlParams.id)


    useEffect(
        () => {
            if (!history.location.search) {
                if(ownerId){
                    dispatch(requestProfile(ownerId as number))
                    dispatch(requestStatus(ownerId as number))
                    history.push({
                        search: 'id='+ownerId
                    })
                }
                else {
                    history.push({
                        pathname: '/login'
                    })
                }

            } else {
                if (!userId) {
                    userId = profile.userId
                }
                if (userId === null) {
                    history.push({
                        pathname: '/login'
                    })
                }
                dispatch(requestProfile(userId as number))
                dispatch(requestStatus(userId as number))
            }
            return function cleanup() {
                userId = null
            };
        },[profile.userId, history.location.search])




    if (profile.userId !== userId) return <Preloader/>
    return (
        <div className={s.contentWrapper}>
            <div className={s.themeBlock}>
                <img src={profileTheme} alt=""/>
            </div>
            <ProfileInfo/>
            <PostsBlock/>
        </div>
    );
}
