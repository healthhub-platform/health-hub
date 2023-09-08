import React from 'react';
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar= () => {
    return (
        <div className="navigation">
            <ul>
                <li>
                    <NavLink to="/">Homepage</NavLink>
                </li>
                <li>
                    <NavLink to="/Profiles"><div className='searchbar'>
                    <input placeholder="Search for Profiles"/>
                </div></NavLink>
                </li>
               
            </ul>
        </div>
    );
}

export default Navbar;
