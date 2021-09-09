import React, {FC} from 'react';
import { useForm } from "react-hook-form";
import s from './SearchField.module.css'

type props = {
    searchUsers: (userName:string) => void
}

const SearchField: FC<props> = (props) => {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data:{search:string}) => {
        props.searchUsers(data.search);

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder={'Find user by name'} className={s.searchField} {...register("search", {minLength: 1})} />
            <input type={'submit'} value={'Search'}  className={s.searchSubmit}/>
        </form>
    );
};

export default SearchField;