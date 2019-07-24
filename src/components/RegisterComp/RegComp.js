import ReactDOM from 'react-dom';
import React from 'react';



class RegComp extends React.Component {
   State = {
       name: "",
       Phone: 0,
       age: 0,
       Email: ""
   }
   
   
    render() {
        return (
            <div>
                <h1>Login Page</h1>
                <form>
                    <div className="form-group">
                        <label>Name: </label>
                        <input className="form-control" type="text" placeholder="Your name..."></input>
                    </div>
                    <div className="form-group">
                        <label>Phone: </label>
                        <input className="form-control" type="phone" defaultValue="+972"></input>
                    </div>
                    <div className="form-group">
                        <label>Age: </label>
                        <input className="form-control" type="text" placeholder="Your age..."></input>
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input className="form-control" type="text" placeholder="Email..."></input>
                    </div>
                    <div className="form-group">
                        <label>Gender: </label>
                        <select defaultValue="0">
                            <option value="0">Male</option>
                            <option value="1">Female</option>
                        </select>
                    </div>
                    <div className="btn btn-success">Save</div>
                </form>
            </div>
        );
    }
}


export default RegComp;