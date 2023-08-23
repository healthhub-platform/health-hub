import React from 'react';
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar= () => {
    return (
        <div className="navigation">
            <li>
                <NavLink to="/">Homepage</NavLink>
            </li>
            <li>
                <NavLink to="/Profiles">Profiles</NavLink>
            </li>
        </div>
    );
}

export default Navbar;