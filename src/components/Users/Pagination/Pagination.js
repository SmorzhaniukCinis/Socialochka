import s from "../Users.module.css";
import React from "react";


const Pagination = (props) => {

debugger
    let pages = []
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
                <button  onClick={() => {props.setCurrentPortion(props.PortionNumber-1)}}>Prev</button>}
            </div>
            {pages
                .filter(p=> p >= LeftPortionPageNumber && p <= rightPortionNumber)
                .map(p => {
                    return <span onClick={() => {
                        props.onPageChanged(p)
                    }} className={props.currentPage === p && s.selectedPage}>{p}</span>
                })}
            <div className={s.rightButton} >
                {props.portionCount > props.PortionNumber &&
                <button onClick={() => {props.setCurrentPortion(props.PortionNumber+1)}}>Next</button>}
            </div>
        </div>
    )
}

export default Pagination