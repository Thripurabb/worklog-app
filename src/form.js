import React from 'react';
import ReactDOM from 'react-dom';
import './navbar.js';
import Navbar from './navbar.js';

class LogForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            uname : 'El',
            project : 'PFML',
            task : '',
            timetaken : ''
        }
    }
    changeHandler = (event) =>
    {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
        
    }
    submitFormHandler = (event) =>
    {
        event.preventDefault();
        /*let m = this.state.uname;
        let n = this.state.project;
        let o = this.state.task;
        let p = this.state.timetaken;
        this.setState({msg : m+" "+n+" "+o+" "+p});*/
        console.log(this.state);
    }
    

    render()
    {
        return(
            <div>
                <Navbar />
            <div className="container" id="form-container">
                <form onSubmit={this.submitFormHandler}>
                    <div className="form-group">
                        <label>Name</label>
                        <select class="form-control" name="uname" onChange={this.changeHandler} required>
                            <option>El</option>
                            <option>ABC</option>
                            <option>XYZ</option>
                            <option>Jane</option>
                            <option>Tri</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Project</label>
                        <select class="form-control" name="project"onChange={this.changeHandler} required>
                            <option>PFML</option>
                            <option>MetLife</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Tasks</label>
                        <textarea class="form-control" name="task"onChange={this.changeHandler} required placeholder="Task Description" minlength="10" maxLength="200"></textarea>
                    </div>
                    <div className="form-group">
                        <label>Time Taken</label>
                        <input class="form-control" name="timetaken" required type="text" onChange={this.changeHandler} placeholder="Enter time taken in hours" />
                    </div>
                    <button type="submit" class="form-control btn btn-primary btn-block">Submit</button>
                </form>
            </div>
            </div>
        );
    }
}
export default LogForm;