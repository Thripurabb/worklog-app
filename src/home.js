import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Navbar from './navbar.js';

class Home extends React.Component
{
    render()
    {
        return(
        <div>    
            <Navbar />
            <div class="container-fluid" id="card-container">
            <div class="card-columns">
                <Link to="/workloglist" id="cardlinks"><Cards uname="El"/></Link>
                <Link to="/workloglist" id="cardlinks"><Cards uname="ABC"/></Link>
                <Link to="/workloglist" id="cardlinks"><Cards uname="Himawari"/></Link>
                <Link to="/workloglist" id="cardlinks"><Cards uname="Jane"/></Link>
                <Link to="/workloglist" id="cardlinks"><Cards uname="Thri"/></Link>
            </div>
            </div>
            
        </div>
        );
    }
    
}
class Cards extends React.Component
{
    render()
    {
        return(
                <div class="card">
                <   img src="https://img.icons8.com/cotton/2x/person-male.png" 
                     class="card-img-top" />
                    <div class="card-body" style={{textAlign : "center"}}>
                        <h5 class="card-title" >{this.props.uname} </h5>
                        <div class="card-text">
                            <div>Programmer Analyst Trainee</div>
                        </div>
                    </div>
                </div>
        );
    }
}
export default Home;