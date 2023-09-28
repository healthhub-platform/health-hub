import React from 'react';
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

const Navbar=({ handleLoginClick, handleRegisterClick }) =>{
    const handleClick = () => {
        handleLoginClick();
      };
    const handleClick2 =()=>{
        handleRegisterClick();
    }
    
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
                <li>
                    <span onClick={handleClick2} className="registericon">
                        Register
                    </span>
                </li>
               
            </ul>
            
        </div>
    );
}

export default Navbar;
