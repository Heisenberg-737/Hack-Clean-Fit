import React, {useContext} from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import MainPage from './Pages/Main/';
import MapPage from './Pages/Map/';
import LandingPage from './Pages/LandingPage/LandingPage';
import RouteVerification from './Components/RouteVerification';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoImage from './Pages/images/Clean-Fit.png';
import HistoryPage from './Pages/History/index'
import SignIn from './Pages/Login/SignIn';
import Button from "@material-ui/core/Button";
import HeaderPage from './Components/Header/index'
import About from './Pages/About/index'

import {UserProvider} from './AuthContext';
import { UserContext } from './AuthContext';
import { Link } from 'react-router-dom';
// import SignUp from "./Pages/Login/SignUp";
// import PasswordReset from "./Pages/Login/PasswordReset";



function App(props) {

  return (
    <UserProvider>
    <Router>
      <div className="App">
        <HeaderPage />
        <main className="main-container">  
          <Switch>
            <Route path="/go">
              <MapPage />
            </Route>
            <Route path="/dashboard">
              {/* <FirstTimeExplanation /> */}
              <MainPage /> 
            </Route>
            <Route path="/history">
              <HistoryPage />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/" >
              <LandingPage />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
    </UserProvider>
  );
}

export default App;
