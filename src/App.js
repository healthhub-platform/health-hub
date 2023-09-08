import healthHubLogo from './images/healthhublogo.png';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

import Homepage from './pages/Homepage/Homepage';
import ProfileMain from './pages/Profile/ProfileMain';
import ProfileSearchResults from './pages/Profile/ProfileSearchResults';
import RouteNotFound from './pages/RouteNotFound';

class App extends React.Component {
  state = {
    searchText: ""
  };

  handleRoute = route => () => {
    this.props.history.push({ pathname: route });
  };

  handleSearchInput = event => {
    this.setState({
      searchText: event.target.value
    });
  };

  handleSearchSubmit = () => {
    if (this.state.searchText) {
      this.props.history.push({
        pathname: "/results",
        state: {
          searchText: this.state.searchText
        }
      });
    } else {
      alert("Please enter some search text!");
    }
  };

  render(){
  return (
    <div className="App">
      <Navbar>
          <Nav className="mr-auto">
            <Nav.Link onClick={this.handleRoute("/")}>Home</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              onChange={this.handleSearchInput}
              value={this.state.searchText}
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            <Button onClick={this.handleSearchSubmit} variant="outline-info">
              Search
            </Button>
          </Form>
        </Navbar>
        <Routes>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/results" component={ProfileSearchResults} />
          <Route component={RouteNotFound} />
        </Routes><Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link onClick={this.handleRoute("/")}>Home</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              onChange={this.handleSearchInput}
              value={this.state.searchText}
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            <Button onClick={this.handleSearchSubmit} variant="outline-info">
              Search
            </Button>
          </Form>
        </Navbar>
        <Routes>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/results" component={ProfileSearchResults} />
          <Route component={RouteNotFound} />
        </Routes>
      </div>
      
  );
}
}

export default useNavigate(App);
