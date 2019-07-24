import ReactDOM from 'react-dom';
import React from 'react';

// ReactDOM.render(<Login_form />);


class Login_form extends React.Component {
    render() {
      return (
        <div className="App">
          <label>Name:</label>
          <input className="form-control" type="text" placeholder="Name..." ></input>

        </div>
      );
    }
  }


  export default Login_form;