import React from 'react';
import './ProfileMain.css';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import ProfileNavbar from './ProfileNavBar';
import AcademicCourses from './AcademicCourses';
import ResearchExperience from './ResearchExperience';
import ClinicalExperience from './ClinicalExperience';
import StudentOrganisations from './StudentOrgs';
import Athletics from './Athletics';
import SpecialInterest from './SpecialInterest';
import Data from '../../mock-data.json';
import ProfileSidebar from '../../components/ProfileSidebar';
const ProfileMain = ({ match }) => {
    /*const { username } = match.params;*/
    return (
        
        <div className='container'>
            <ProfileNavbar/>
            <div className='rowC'>
            <ProfileSidebar/>
           
            
            <h3>Profile Section</h3>
            

            
            
            <div className="content"> 
            <h4>
                Bio
            </h4>
            <p>
                This is a bio about the user
            </p>

                
                
               
                </div>
                </div>
            <Outlet/>
        </div>
    );
}
export default ProfileMain;

//ProfileMain.js 