import React from 'react';
import './App.css';
import './styles1.css';
import Navbar from './navbar.js'; 
import profileH from './profileH.jpg';
import eventh from './eventH.jpg';
import userh from './userH.jpg';
function App() {
  return (
   
    <div className="cont">
         <Navbar/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <center><div className="strongz"><h1>Welcome To Events Manager</h1></div></center>
      <br></br>
      <br></br>
      <div className="marquee"><p>All-In-One Event Management</p></div>
      <div className="container">
     <div className="features-head">
       <h3><center>Features of the Website</center></h3></div> </div>    
       <div className="row">
        <div className="col_1">
          <div className="row_inside">
            <div className="col_1_inside">
            <center><img src={profileH} alt="IMAGE"/></center><br></br>
            
            <p><div className="features">Profile Management<br></br>
            <div className="color">
             There will be seperate forms Login for Admin and Registration members. Admins can trace other performance of the members and also the statistics of how many people have registered in which event.
             </div>
             </div></p>
            </div>
            
            </div>
        </div>
        <div className="col_1">
        <center><img src={eventh} alt="IMAGE"/></center><br></br>
          <p><div className="features">Event Information<br></br>
          <div className="color">
            Events have seperate profile and stats of their activities will be recorded and can be acceced by the admin</div></div></p>
        </div>
        
        <div className="col_1">
          <center><img src={userh} alt="IMAGE"/></center><br></br>
          <p><div className="features">Friendly Interface<br></br><div className="color"> The website is user friendly, i.e, overall usage of site, from registration to login, everything is quite simple to use.</div> </div></p>
        </div>
      </div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <div className="features-head"><h3><center>About Us</center></h3></div><br></br><br></br>
      <div className="content">On this Website, various events,for the CSE students as well as any other person who is intrested in computer related stuff are provided.</div> <br></br>
      <div className="features-head"><h3><center>Current Events</center></h3></div><br></br>
      <div className="content">Currently events which are going on are:- 
      <ul>
        <li>Tech event</li>
        <li>Coding event</li>
        <li>Gaming Event</li>
        </ul><br></br>
        Further Details provided on "Events" tab</div><br></br><br></br>
        <div className="features-head"><h3><center>Ping Us</center></h3></div><br></br>
        <div className="content">For Queries,details or any other doubts, feel free to reach us through your social media platform<br></br>Click on "Contact Us" tab for more info </div>
    </div>
    );
}
export default App;