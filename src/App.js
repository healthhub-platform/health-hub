import healthHubLogo from './images/healthhublogo.png';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage/Homepage';
import ProfileMain from './pages/Profile/ProfileMain';
import AcademicCourses from './pages/Profile/AcademicCourses';
import ResearchExperience from './pages/Profile/ResearchExperience';
import ClinicalExperience from './pages/Profile/ClinicalExperience';
import StudentOrganisations from './pages/Profile/StudentOrgs';
import Athletics from './pages/Profile/Athletics';
import SpecialInterest from './pages/Profile/SpecialInterest';
import StudentOrganisations from './pages/Profile/StudentOrgs';

function App() {
  return (
    <div className="App">
      <div className="navigation-menu"> 
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/> 
          <Route path='/Profiles' element={<ProfileMain/>}/>
          <Route path='/AcademicCourses' element={<AcademicCourses/>}/>
          <Route path='/ResearchExperience' element={<ResearchExperience/>}/>
          <Route path='/ClinicalExperience' element={<ClinicalExperience/>}/>
          <Route path='/StudentOrganisations' element={<StudentOrganisations/>}/>
          <Route path='/Athletics' element={<Athletics/>}/>
          <Route path='/SpecialInterest' element={<SpecialInterest/>}/>
          <Route path='/StudentOrgs' element={<StudentOrganisations/>}/>

          
        </Routes>
      </Router>
      </div>
      
    </div>
  );
}

export default App;
