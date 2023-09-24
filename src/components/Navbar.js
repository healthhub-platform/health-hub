import React from 'react';
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar=({ handleLoginClick }) =>{
    const handleClick = () => {
        handleLoginClick();
      };
    
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
                <li>
                    <span onClick={handleClick} className="loginicon">
                        Sign In
                    </span>
                </li>
               
            </ul>
            
        </div>
    );
}

export default Navbar;
