import s from "./ProfileInfo.module.css";
import React from "react";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import Preloader from "../../Preloader/Preloader";
import {SimpleModal} from "./Modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {getProfile} from "../../../redux/Selectors/ProfileSelectors";
import {setNewAvatarImg} from "../../../redux/Priofile-reducer";
import {getIsAuth} from "../../../redux/Selectors/AuthSelectors";


export const ProfileInfo: React.FC = () => {

    const profile = useSelector(getProfile)
    const owner = useSelector(getIsAuth)
    const dispatch = useDispatch()



    if (!profile) {return <Preloader/>}
    const onPhotoSelected = (e: { target: { files: string | any[]; }; }) => {
        if (e.target.files.length) {dispatch(setNewAvatarImg(e.target.files[0]))}
    }
    return (
        <div className={s.nameBlock}>
            <div className={s.avaBlock}>

                <SimpleModal profile={profile} />
                {!owner
                    ? <div className={s.selectPhotoWrapper}>
                        <input className={s.selectAvaFile} id='selectAvaFile' onChange={()=>onPhotoSelected} type="file"/>
                        <label className={s.sendPhotoButton} htmlFor='selectAvaFile'>change avatar</label>
                    </div>
                    : null}
            </div>
            <ProfileStatus owner={owner} profile={profile}/>
        </div>
    )
}

