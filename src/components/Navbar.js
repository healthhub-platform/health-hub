import React from 'react';
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

const Navbar=({ handleLoginClick, handleRegisterClick }) =>{
    
    
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
                    <div className="loginicon"> 
                    <NavLink to="/Login">Login</NavLink>
                    </div>
                </li>
               
            </ul>
            
        </div>
    );
}

export default Navbar;
