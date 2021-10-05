import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import s from './SearchField.module.css'
import closeIcon from '../../../defaultData/Icon/multiply.png'


type props = {
    searchUsers: (userName: string) => void
    searchingUserName: string
    setSearchingUserName: (userName: string) => void
    getUsers: (currentPage: number, pageSize: number) => void
}


const SearchField: FC<props> = (props) => {


    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data: { search: string }) => {
        props.searchUsers(data.search);
    }

    const clearSearchName = () => {
        props.setSearchingUserName('')
        props.getUsers(1, 5)
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