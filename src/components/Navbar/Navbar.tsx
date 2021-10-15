import React from 'react';
import FullNavbar from "./FullNavbar";
import HiddenNavbar from "./HiddenNavbar";
import {useSelector} from "react-redux";
import {getIsPopup} from "../../redux/Selectors/AppSelectors";


const Navbar:React.FC = () => {

    const isPopup = useSelector(getIsPopup)

    return (
        <div>
            {isPopup
                ? <FullNavbar />
                : <HiddenNavbar/>}
        </div>
    );
}

export default Navbar;

