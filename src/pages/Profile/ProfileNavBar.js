import React from 'react';
import "./ProfileNavBar.css";
import { NavLink } from "react-router-dom";
const ProfileNavbar= () => {
    return (
        <div className="navigation">
            <ul>
                {/*<li>
                    <NavLink to="/ProfileMain">Bio</NavLink>
    </li>*/}
                <li>
                    <NavLink to="/AcademicCourses">Academic Courses</NavLink>
                </li>
                <li>
                    <NavLink to="/ResearchExperience">Research Experience</NavLink>
                </li>
                <li>
                    <NavLink to="/ClinicalExperience">Clinical Experience</NavLink>
                </li>
                <li>
                    <NavLink to="/StudentOrganisations">Student Organisations</NavLink>
                </li>
                <li>
                    <NavLink to="/Athletics">Athletics</NavLink>
                </li>
                <li>
                    <NavLink to="/SpecialInterest">Special Interest</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default ProfileNavbar;