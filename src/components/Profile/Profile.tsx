import React, {useEffect} from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import PostsBlockContainer from "./PostsBlock/PostsBlockContainer";
import profileTheme from "../../defaultData/profileBackgroundTheme.jpg"
import {useDispatch, useSelector} from "react-redux";
import {getProfile} from "../../redux/Selectors/ProfileSelectors";
import {useHistory} from "react-router-dom";
import {ProfileActions, requestProfile, requestStatus} from "../../redux/Priofile-reducer";
import queryString from "querystring";
import {toNumber} from "lodash";
import {UserActions} from "../../redux/Users-Reducer";
import {getOwnerId} from "../../redux/Selectors/AuthSelectors";


export const Profile = (props: any) => {
    const profile = useSelector(getProfile)
    const ownerId = useSelector(getOwnerId)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(
        () => {
            const urlParams = queryString.parse(history.location.search.substr(1))
            let userId: number | null = toNumber(urlParams.id)

            if (!history.location.search) {
                dispatch(requestProfile(ownerId as number))
                dispatch(requestStatus(ownerId as number))
                history.push({
                    search: 'id='+ownerId
                })
            } else {
                if (!userId) {
                    userId = profile.userId
                }
                if (!userId) {
                    history.push('/login')
                }
                dispatch(requestProfile(userId as number))
                dispatch(requestStatus(userId as number))
            }
            return function cleanup() {
                userId = null
            };
        },[profile.userId, history.location.search])


    //
    //
    return (
        <div className={s.contentWrapper}>
            <div className={s.themeBlock}>
                <img src={profileTheme} alt=""/>
            </div>
            <ProfileInfo/>
            {/*@ts-ignore*/}
            <PostsBlockContainer/>
        </div>
    );
}
