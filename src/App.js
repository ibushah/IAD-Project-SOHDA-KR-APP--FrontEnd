import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home/Main'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login/Login'
import Navbar from './Navbar/Main'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
       <Navbar />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
  </Switch>
  </Router>
  );
}

export default App;
