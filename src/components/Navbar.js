import React from 'react';
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import { useAuthState} from "react-firebase-hooks/auth";
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';

const Navbar=({ handleLoginClick, handleRegisterClick }) =>{
    
    const [user, loading, error] = useAuthState(auth);
    const signUserOut = async()=>{
        await signOut(auth);
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
                
                { !user ? <li>
                    <div className="loginicon"> 
                    <NavLink to="/Login">Login</NavLink>
                    </div>
                </li> : <NavLink to="/EditProfile">Edit Profile</NavLink>}
                <li>
                    <div className = "userName"> 
                    { user && (
                    <> 
                     {user?.displayName} 
                     <img src={user?.photoURL || ""} width="50" height="50"/>
                     <button onClick={signUserOut}> Log Out </button>
                     </>
                    )
                    }
                     </div>
                </li>
               
            </ul>

            
            
        </div>
    );
}

export default Navbar;
