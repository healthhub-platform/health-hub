import healthHubLogo from './images/healthhublogo.png';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Nav, Form, FormControl, Button } from "react-bootstrap";
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage/Homepage';
import ProfileMain from './pages/Profile/ProfileMain';
import Pathways from './pages/Pathways/Pathways';
import ProfileSearchSection from './pages/Profile/SearchProfiles';

function App() {
  

  
  return (
    <div className="App">
          
        <div className="navigation-menu"> 
        <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/> 
          <Route path='/Profiles' element={<ProfileMain/>}/>
          <Route path='/Pathways' element={<Pathways/>}/>
          <Route path='/ProfileSearch' element={<ProfileSearchSection/>}/>
          


        </Routes>
        </Router>
      </div>
      </div>
      
  );
}


export default App;
