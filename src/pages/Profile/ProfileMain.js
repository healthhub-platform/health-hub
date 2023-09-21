import React from 'react';
import './ProfileMain.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import ProfileNavbar from './ProfileNavBar';
import AcademicCourses from './AcademicCourses';
import ResearchExperience from './ResearchExperience';
import ClinicalExperience from './ClinicalExperience';
import StudentOrganisations from './StudentOrgs';
import Athletics from './Athletics';
import SpecialInterest from './SpecialInterest';
import Data from '../../mock-data.json';
const ProfileMain = ({ match }) => {
    /*const { username } = match.params;*/
    return (
        <div className='container'>
            <h3>Profile Section</h3>
            <h4>
                Bio
            </h4>
            <p>
                This is a bio about the user
            </p>

            <ul className = "sidebar">
                <li> <span> Jane Doe </span></li>
                <li><span><i className="fa fa-title"></i> </span><span>Title</span> </li>
                <li><span><i className="fa fa-school"></i> </span><span>Education: <br /> High School <br /> College <br /> Certification Programs </span> </li>
                <li><span><i className="fa fa-qualifications"></i> </span><span>Qualifications: <br /> Certificate 1 <br /> Certificate 2 <br /> Certificate 3 </span> </li>
                <li><span><i className="fa fa-SeekingPositions"></i> </span><span>Seeking Opportunities In: <br/> list fields </span> </li>
                <li><span><i className="fa fa-interests"></i> </span><span>Interests: </span> </li>
                <li><span><i className="fa fa-location"></i> </span><span>Willing to Relocate: Y/N </span> </li>
            </ul>

            <div className="content"> 

                
                <ProfileNavbar/>
                 <Routes>
                <Route path='/Profiles' element={<ProfileMain/>}/>
                <Route path='/AcademicCourses' element={<AcademicCourses/>}/>
                <Route path='/ResearchExperience' element={<ResearchExperience/>}/>
                <Route path='/ClinicalExperience' element={<ClinicalExperience/>}/>
                <Route path='/StudentOrganisations' element={<StudentOrganisations/>}/>
                <Route path='/Athletics' element={<Athletics/>}/>
                <Route path='/SpecialInterest' element={<SpecialInterest/>}/>

                
                </Routes> 


            
            </div>
        </div>
    );
}
export default ProfileMain;

//ProfileMain.js 