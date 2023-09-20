import React from 'react';
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
    const[query, setQuery]=useState("")
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
                    <NavLink to="/Profiles"><div className='searchbar'>
                    <input placeholder="Search for Profiles" onChange={event => setQuery(event.target.value)}/>
                </div></NavLink>
                </li>
                
               
            </ul>
        </div>
    );
}

export default Navbar;
