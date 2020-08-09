import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Register from './register.jsx';
import Login from './login.jsx';
import LoginM from './loginM.jsx';
import Events from './events.js';
import Contact from './contact.js';
const routing = (
  <Router>
    <Switch/>
      <Route exact path="/" component={App} />
      <Route exact path="/Home" component={App} />
      <Route path="/Events" component={Events} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/loginM" component={LoginM} />
      <Route path="/contact" component={Contact} />
      
    <Switch/>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));