import s from "./Preloader.module.css";
import preloader from "../../defaultData/Preloadet.gif";
import React from "react";

let Preloader = () => {
    return (
        <div className={s.preloader}><img src={preloader} alt=""/></div>
    )
}
export default Preloader

