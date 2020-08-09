import React, { Component } from 'react'
import Navbar from './navbar.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './events.css'
import './styles1.css'
import './App.css';

export default class Events extends Component {

  
    render() {
        return (
<>
            <Navbar />
            <div className="row">
        <div className="col_1">
          <div className="row_inside">
            <div className="col_1_inside"></div>
            <figure class="snip1107 blue"><img src="https://mcdn.wallpapersafari.com/medium/38/93/wOfzb7.jpg" alt="TECH PHOTO"/>
  <figcaption>
  <div><span>Register<button
      className="btnN"
      onClick={()=> this.props.history.push("/loginM")}></button></span></div>
    <div>
      <h3>Tech Fest</h3>
    </div><a href="./loginM"></a>
  </figcaption>
</figure></div></div>
<div className="col_2">
<figure class="snip1107 red"><img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="CODING"/>
  <figcaption>
    <div><span>Register<button
      className="btnN"
      onClick={()=> this.props.history.push("/loginM")}></button></span></div>
    <div>
      <h3>Coding</h3>
    </div><a href="./loginM"></a>
  </figcaption>
</figure></div>
<div className="col_3">
<figure class="snip1107 yellow"><img src="https://wallpapercave.com/wp/AwS1j5Q.jpg" alt="Gaming"/>
  <figcaption><div><span>Register<button
      className="btnN"
      onClick={()=> this.props.history.push("/loginM")}></button></span></div>
    <div>
      <h3>Gaming</h3>
    </div><a href="./loginM"></a>
  </figcaption>
</figure></div>
</div>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<div className="cont">
<br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <div className="features-head"><h2>Tech Event</h2></div><br></br>
      <div className="contentE">In the following event, Questions about technology will be asked. <br></br>The competition will have 3 Stages.<br></br>Prizes will be :-
      <ul>
        <li>1st Prize:- Rs 2000 + Certificate of Merit</li>
        <li>2st Prize:- Rs 1000</li>
        <li>3st Prize:- Rs 500</li></ul> </div><br></br><br></br>
        <div className="features-head"><h2>Coding</h2></div><br></br>
      <div className="contentE">In the following event, Questions about coding will be asked in MCQ format.<br></br> Negative marking of 0.5 per question will be implemented <br></br>The competition will have 4 Stages.<br></br>Prizes will be :-
      <ul>
        <li>1st Prize:- Rs 5000 + Certificate of Merit</li>
        <li>2st Prize:- Rs 2500</li>
        <li>3st Prize:- Rs 1000</li></ul> </div><br></br><br></br>
        <div className="features-head"><h2>Gaming</h2></div><br></br>
      <div className="contentE">In the following event,Counter Strike will be the platform of show. <br></br>The competition will have 3 rounds. Person with most kills after 3 rounds will be the winner<br></br>Prizes will be :-
      <ul>
        <li>1st Prize:- Rs 3000 + Medal of Honor</li>
        <li>2st Prize:- Rs 1500</li>
        <li>3st Prize:- Rs 1000</li></ul> </div><br></br><br></br>


</div>

        </>);
}  }
 