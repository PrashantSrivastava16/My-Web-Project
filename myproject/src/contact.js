import React, { Component } from 'react';
import Navbar from './navbar.js';
import './App.css';
import './contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Insta from './insta.jpg';
import Git from './github.png';
import Linked from './linkedin.png';
import Facebook from './facebook.png';
export default class Contact extends Component {

  
    render() {
        return (
<>
            <Navbar/>
            <div className="cont">
            <br></br><br></br><br></br><br></br><div className="feature-head">Contact Me On Following Social Media Platforms</div><br></br><br></br><br></br>
            <div className="row">
            
        <div className="col_1">
          <div className="row_inside">
            <div className="col_1_inside">
                <a href="https://github.com/PrashantSrivastava16" target="_blank"><img src={Git} alt="GitHub"/></a>
                <br></br><div classname="names"><b><i>Github</i></b></div> 
            </div></div></div>
            <div className="col_1">
            <a href="www.linkedin.com/in/prashant-srivastava-67217a83"target="_blank"><img src={Linked} alt="LinkedIn" width="500px" height="50"/></a>
            <br></br><div classname="names"><b><i>LinkedIn</i></b></div></div>
            <div className="col_1">
            <a href="https://www.instagram.com/baba_yaga__23/"target="_blank"><img src={Insta} alt="Instagram"/></a>
            <br></br><div classname="names"><b><i>Instagram</i></b></div></div>
            <div className="col_1">
            <a href="https://m.facebook.com/NiKlaus.Mikaelson23"target="_blank"><img src={Facebook} alt="Facebook"/></a>
            <br></br><div classname="names"><b><i>Facebook</i></b></div></div></div></div>
        </>);}}