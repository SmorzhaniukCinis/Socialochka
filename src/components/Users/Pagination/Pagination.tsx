import s from "../Users.module.css";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentPage, getPageSize} from "../../../redux/Selectors/UsersSelector";
import {getUsers, searchUsers, UserActions} from "../../../redux/Users-Reducer";

type props = {
    totalCount:number
    pageSize:number
    PortionNumber: number
    portionCount: number
    currentPage: number
    searchingUserName:string

    setCurrentPortion: (PortionNumber:number) => void
    onPageChanged: (page:number, searchingUserName:string) => void
}

const Pagination: React.FC<props> = (props) => {

    const dispatch = useDispatch()
    const currentPage =  useSelector(getCurrentPage)
    const pageSize =  useSelector(getPageSize)

    const onPageChanged = (page: number, searchingUserName:string) => {
        dispatch(UserActions.changePage(page))
        searchingUserName
            ? dispatch(searchUsers(searchingUserName, page))
            :dispatch(getUsers(page, pageSize))
    }

    let pages: Array<number> = []
    let TotalPortionCount = Math.ceil(props.totalCount / props.pageSize)
    for (let i = 1; i <=TotalPortionCount; i++) {
        pages.push(i)
    }
    let LeftPortionPageNumber = (props.PortionNumber - 1) * props.portionCount + 1
    let rightPortionNumber = props.PortionNumber * props.portionCount
    return(
        <div className={s.pagination}>
            <div className={s.leftButton}>
                {props.PortionNumber > 1 &&
                <span  onClick={() => {props.setCurrentPortion(props.PortionNumber-1)}}>Prev</span>}
            </div>
            {pages
                .filter(p=> p >= LeftPortionPageNumber && p <= rightPortionNumber)
                .map(p => {
                    return <span
                        // @ts-ignore
                        className={props.currentPage === p && s.selectedPage}
                        onClick={() => {onPageChanged(p, props.searchingUserName)}} >{p}</span>
                })}
            <div className={s.rightButton} >
                {props.portionCount > props.PortionNumber &&
                <span  onClick={() => {props.setCurrentPortion(props.PortionNumber+1)}}>Next</span>}
            </div>
        </div>
    )
}

export default Pagination