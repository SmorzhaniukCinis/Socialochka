import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import s from './SearchField.module.css'
import closeIcon from '../../../defaultData/Icon/multiply.png'
import {useDispatch} from "react-redux";
import {getUsers, searchUsers, UserActions} from "../../../redux/Users-Reducer";
import {FriendsActions, getFriends, searchFiends} from "../../../redux/Friends-reducer";


type props = {
    searchingUserName: string
}


const SearchField: FC<props> = (props) => {

    const dispatch = useDispatch()
    const getUsersWrap = (currentPage: number, pageSize: number) => {
        dispatch(getUsers(currentPage, pageSize))
    }
    const setSearchingUserName = (userName: string) => {
        dispatch(UserActions.setSearchingUserName(userName))
    }
    const changePage = (page: number) => {
        dispatch(UserActions.changePage(page))
    }

    //-----------------------------------------------------------------------------------------------

    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data: { search: string }) => {
        dispatch(searchUsers(data.search, 1));
        dispatch(searchFiends(data.search))
    }

    const clearSearchName = () => {
        setSearchingUserName('')
        dispatch(FriendsActions.setSearchingFriendName(''))
        dispatch(getFriends())
        getUsersWrap(1, 5)
        changePage(1)
    }

    return (
        <div>
            <div>
                {props.searchingUserName
                    ? <div className={s.searchResult}>
                        <span className={s.searchResult__text}>{props.searchingUserName}</span>
                        <span onClick={clearSearchName}><img className={s.closeIcon} src={closeIcon}
                                                             alt="close"/></span>
                    </div>
                    : null}

            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder={!errors.search ? 'Find user by name' : 'Field is required'}
                       className={s.searchField} {...register("search", {minLength: 1, required: true})} />
                <input type={'submit'} value={'Search'} className={s.searchSubmit}/>
            </form>
        </div>
    );
};


export default SearchField