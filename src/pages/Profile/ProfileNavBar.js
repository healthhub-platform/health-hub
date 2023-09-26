import React, {useState} from 'react';
import "./ProfileNavBar.css";
import { NavLink, Outlet } from "react-router-dom";
import { useHistory } from 'react-router-dom';
const ProfileNavbar= () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
      };
    return (
        <div className="navigation">
            <ul>
                {/*<li>
                    <NavLink to="/ProfileMain">Bio</NavLink>
    </li>*/}
                <li>
                    <NavLink to="/Profiles">Profile Bio</NavLink>
                </li>
                <li>
                    <div className="dropdown">
                        <button onClick={toggleDropdown}>Academic Courses</button>
                        {isDropdownOpen && (
                        <div className="dropdown-content">
                            <NavLink to="/Profiles/AcademicCourses">Academic Institute 1</NavLink>
                            <NavLink to="/Profiles/AcademicCourses">Academic Institute 2</NavLink>
                            <NavLink to="/Profiles/AcademicCourses">Academic Institute 3</NavLink>
                        </div>
                        )}
                    </div>
                </li>
                <li>
                    <NavLink to="/Profiles/ResearchExperience">Research Experience</NavLink>
                </li>
                <li>
                    <NavLink to="/Profiles/ClinicalExperience">Clinical Experience</NavLink>
                </li>
                <li>
                    <NavLink to="/Profiles/StudentOrganisations">Student Organisations</NavLink>
                </li>
                <li>
                    <NavLink to="/Profiles/Athletics">Athletics</NavLink>
                </li>
                <li>
                    <NavLink to="/Profiles/SpecialInterest">Special Interest</NavLink>
                </li>
                
            </ul>
            <Outlet/>
        </div>
    );
}

export default ProfileNavbar;