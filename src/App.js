import React from 'react';
// import Login_form from './components/login-form.js'
import './App.css';
import Reg from './components/RegisterComp/RegComp'
import RegComp from './components/RegisterComp/RegComp';
import SavedComp from './components/SavedComp/SavedComp';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <RegComp />
            </div>
            <div className="col-md-6">
              <SavedComp />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
