import ReactDOM from 'react-dom';
import React from 'react';



class SavedComp extends React.Component {


    render() {
        return (
            <div>
                <h1>Saved Users</h1>
                <div className="table">
                  <table>
                      <thead>
                          <tr>
                              <th>Name</th>
                              <th>Age</th>
                              <th>Phone</th>
                              <th>Email</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td></td>
                              <td></td>
                          </tr>
                      </tbody>
                  </table>
                </div>
            </div>
        );
    }
}


export default SavedComp;