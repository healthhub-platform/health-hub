import React, {useEffect, useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import ProfileMain from "./ProfileMain";

import SearchBar from "../../components/SearchBar";
import { getAuth } from "firebase/auth";


// ProfileSearchSection.js


function ProfileSearchSection() {
    const history = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const allProfiles = [
    { id: 1, username: 'user1', fullName: 'John Doe' },
    { id: 2, username: 'user2', fullName: 'Jane Smith' },
    // Add more profile data
  ];

  const handleSearch = (query) => {
    // Implement the search logic here
    const results = allProfiles.filter((profile) =>
      profile.fullName.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="SearchProfile">
        <Routes>
          {/*<Route exact path="/ProfileSearch" render={() => <SearchBar onSearch={handleSearch} />} />*/}
          <Route path="/Profiles/:username" component={ProfileMain} />
        </Routes>
        <SearchBar onSearch={handleSearch} />
      <div className="search-results">
        {searchResults.map((profile) => (
          <div key={profile.id} className="profile">
            <p>
                <Link to={`/Profiles/${profile.username}`}>{profile.fullName}</Link>
            </p>
            
            {/* Add more profile information */}
          </div>
        ))}
      </div>
    
    </div>
  );
}

export default ProfileSearchSection;
