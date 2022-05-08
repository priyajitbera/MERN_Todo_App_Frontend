import React, { useContext } from "react";

import './Navbar.css';
import { BiExit } from 'react-icons/bi';
import { UserContext } from "../../App";

const Navbar = () => {
    const { user, setUserContext } = useContext(UserContext);
    const logOut = () => {setUserContext({id:"", name:"", email:""});};
    return (
        <div className="navbar">
            <div className="navbar-profile">
                <div>{user.name}</div>
                <button className="navbar-profile-logoutbtn" onClick={logOut}><BiExit size={"20px"} /></button>
            </div>
            <div className="navbar-heading">MERN Todo Application</div>
        </div>
    );
}

export default Navbar;