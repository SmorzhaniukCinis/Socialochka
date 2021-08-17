import React from 'react';
import FullNavbar from "./FullNavbar";
import HiddenNavbar from "./HiddenNavbar";

type props = {
    setPopupMenu: (isPopup:boolean) => void
    isPopup: boolean
}
const Navbar:React.FC<props> = (props) => {


    return (
        <div>
            {props.isPopup
                ? <FullNavbar setPopupMenu={props.setPopupMenu}/>
                : <HiddenNavbar setPopupMenu={props.setPopupMenu}/>}
        </div>
    );
}

export default Navbar;

