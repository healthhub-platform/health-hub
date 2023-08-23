import React from 'react';
const ProfileNavbar= () => {
    return (
        <div className="navigation">
            <li>
                <NavLink to="/academic-courses">Academic Courses</NavLink>
            </li>
            <li>
                <NavLink to="/Profiles/research">Research Experience</NavLink>
            </li>
            <li>
                <NavLink to="/Profiles/clinical-experience">Clinical Experience</NavLink>
            </li>
            <li>
                <NavLink to="/Profiles/student-orgs">Student Organizations</NavLink>
            </li>
            <li>
                <NavLink to="/Profiles/athletics">Athletics</NavLink>
            </li>
            <li>
                <NavLink to="/Profiles/interests">Special Interests</NavLink>
            </li>
        </div>
    );
}