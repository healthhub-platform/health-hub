import logo from './logo.svg';
import healthHubLogo from './images/healthhublogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={healthHubLogo} className="App-logo" alt="logo" />
        
        <h1><span className='font-link'> Health Hub</span></h1>
        <p>
          <span className = "font-link">
          
        HealthHub is an all women student-led initiative aiming to establish a novel online platform that serves the pre-health community. Through this platform, students and professionals can seek and post about professional development opportunities. <br/>
        The main objectives of this initiative are: <br/>
        Bridge the gap between students and professionals <br/>
        Promote enriching opportunities for post-graduate studies to students <br/>
        Create easier access to research and clinical opportunities. <br/>
        </span>
        </p>
        
      </header>
      
    </div>
  );
}

export default App;
