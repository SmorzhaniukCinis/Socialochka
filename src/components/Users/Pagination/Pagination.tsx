import s from "../Users.module.css";
import React from "react";

type props = {
    totalCount:number
    pageSize:number
    PortionNumber: number
    portionCount: number
    currentPage: number

    setCurrentPortion: (PortionNumber:number) => void
    onPageChanged: (page:number) => void
}

const Pagination: React.FC<props> = (props) => {

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
                <button  onClick={() => {props.setCurrentPortion(props.PortionNumber-1)}}>Prev</button>}
            </div>
            {pages
                .filter(p=> p >= LeftPortionPageNumber && p <= rightPortionNumber)
                .map(p => {
                    return <span
                        // @ts-ignore
                        className={props.currentPage === p && s.selectedPage}
                        onClick={() => {props.onPageChanged(p)}} >{p}</span>
                })}
            <div className={s.rightButton} >
                {props.portionCount > props.PortionNumber &&
                <button onClick={() => {props.setCurrentPortion(props.PortionNumber+1)}}>Next</button>}
            </div>
        </div>
    )
}

export default Pagination