import s from "../Users.module.css";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPortionCount, getPortionNumber} from "../../../redux/Selectors/UsersSelector";
import {getUsers, searchUsers, UserActions} from "../../../redux/Users-Reducer";

type props = {
    totalCount:number
    searchingUserName:string
    pageSize: number
    currentPage: number
}

const Pagination: React.FC<props> = ({totalCount,searchingUserName,pageSize ,currentPage}) => {

    const dispatch = useDispatch()
    const PortionNumber =  useSelector(getPortionNumber)
    const portionCount =  useSelector(getPortionCount)


    const onPageChanged = (page: number, searchingUserName:string) => {
        dispatch(UserActions.changePage(page))
        searchingUserName
            ? dispatch(searchUsers(searchingUserName, page))
            :dispatch(getUsers(page, pageSize))
    }

    let pages: Array<number> = []
    let TotalPortionCount = Math.ceil(totalCount / pageSize)
    for (let i = 1; i <=TotalPortionCount; i++) {
        pages.push(i)
    }
    let LeftPortionPageNumber = (PortionNumber - 1) * portionCount + 1
    let rightPortionNumber = PortionNumber * portionCount
    return(
        <div className={s.pagination}>
            <div className={s.leftButton}>
                {PortionNumber > 1 &&
                <span  onClick={() => {dispatch(UserActions.setCurrentPortion(PortionNumber-1))}}>Prev</span>}
            </div>
            {pages
                .filter(p=> p >= LeftPortionPageNumber && p <= rightPortionNumber)
                .map(p => {
                    return <span
                        // @ts-ignore
                        className={currentPage === p && s.selectedPage}
                        onClick={() => {onPageChanged(p, searchingUserName)}} >{p}</span>
                })}
            <div className={s.rightButton} >
                {portionCount > PortionNumber &&
                <span  onClick={() => {dispatch(UserActions.setCurrentPortion(PortionNumber+1))}}>Next</span>}
            </div>
        </div>
    )
}

export default Pagination