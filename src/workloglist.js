import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Navbar from './navbar.js';

class List extends React.Component
{
    render()
    {
        return(
            <div>    
                <Navbar /><br/>
                <div class="container table-responsive">
                    <table class="table table-striped table-hover">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Project Name</th>
                                <th scope="col">Task Info</th>
                                <th scope="col">Time Taken</th>
                                <th scope="col">Project Name</th>
                                <th scope="col">Task Info</th>
                                <th scope="col">Time Taken</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">01/28/2021</th>
                                <td>MFRP</td>
                                <td>Spring boot learning</td>
                                <td>5</td>
                                <td>MetLife</td>
                                <td>React Js Learning</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <th scope="row">01/29/2021</th>
                                <td>MFRP</td>
                                <td>Did login form,home page</td>
                                <td>4</td>
                                <td>MetLife</td>
                                <td>React Js Learning</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <th scope="row">02/01/2021</th>
                                <td>MFRP</td>
                                <td>Did UI for login,home pages</td>
                                <td>4</td>
                                <td>MetLife</td>
                                <td>React Js Learning</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <th scope="row">02/02/2021</th>
                                <td>MFRP</td>
                                <td>Did front end part</td>
                                <td>9</td>
                                <td>MetLife</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <th scope="row">02/03/2021</th>
                                <td>MFRP</td>
                                <td>Started back end part</td>
                                <td>6</td>
                                <td>MetLife</td>
                                <td>Did login page</td>
                                <td>3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default List;