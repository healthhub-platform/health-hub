import healthHubLogo from './images/healthhublogo.png';
import './App.css';
import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Switch } from "react-router-dom";
import { Nav, Form, FormControl, Button } from "react-bootstrap";
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage/Homepage';
import ProfileMain from './pages/Profile/ProfileMain';
import Pathways from './pages/Pathways/Pathways';
import ProfileSearchSection from './pages/Profile/SearchProfiles';
import LoginForm from './components/LoginForm';
import AcademicCourses from './pages/Profile/AcademicCourses';
import ResearchExperience from './pages/Profile/ResearchExperience';
import ClinicalExperience from './pages/Profile/ClinicalExperience';
import StudentOrganisations from './pages/Profile/StudentOrgs';
import Athletics from './pages/Profile/Athletics';
import SpecialInterest from './pages/Profile/SpecialInterest';
import RegistrationForm from './components/registrationForm';



function App() {
  
  const [isShowLogin, setIsShowLogin] = useState(true);
  const [isShowRegister, setIsShowRegister] = useState(true);

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };
  const handleRegisterClick = () =>{
    setIsShowRegister((isShowRegister)=>!isShowRegister);
  }
  
  return (
    <div className="App">
        
        <div className="navigation-menu"> 
        <Router>
        <Navbar handleLoginClick={handleLoginClick} handleRegisterClick={handleRegisterClick}/>
        
        <Routes>
          <Route path='/' element={<Homepage/>}/> 
          <Route path='/Profiles' element={<ProfileMain/>}>
            <Route path='AcademicCourses' element={<AcademicCourses/>}/>
            <Route path='ResearchExperience' element={<ResearchExperience/>}/>
            <Route path='ClinicalExperience' element={<ClinicalExperience/>}/>
            <Route path='StudentOrganisations' element={<StudentOrganisations/>}/>
            <Route path='Athletics' element={<Athletics/>}/>
            <Route path='SpecialInterest' element={<SpecialInterest/>}/>
          </Route>
          <Route path='/Pathways' element={<Pathways/>}/>
          <Route path='/ProfileSearch' element={<ProfileSearchSection/>}/>
        </Routes>
        </Router>
        <RegistrationForm isShowRegister={isShowRegister}/>
        <LoginForm isShowLogin={isShowLogin} />

      </div>
      </div>
      
  );
}


export default App;
