import React from 'react';
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar=() =>{
    
    return (
        <div className="navigation">
            <ul>
                <li>
                    <NavLink to="/">Homepage</NavLink>
                </li>
                <li>
                    <NavLink to="/Pathways">Pathways</NavLink>
                </li>
               
                <li>
                    <NavLink to="/Profiles">Profiles</NavLink>
                </li>
                <li>
                    <NavLink to="/ProfileSearch"> Profile Search</NavLink>
                </li>
                
               
            </ul>
        </div>
    );
}

export default Navbar;
