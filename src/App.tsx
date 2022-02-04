import React from "react";
import "./App.css";

const rand = () => {
  return Math.floor(Math.random() * 99 + 1);
};

function App() {
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>January 2022</th>
            <th>February 2022</th>
            <th>March 2022</th>
            <th>April 2022</th>
            <th>May 2022</th>
            <th>June 2022</th>
            <th>July 2022</th>
            <th>August 2022</th>
            <th>September 2022</th>
            <th>October 2022</th>
            <th>November 2022</th>
            <th>December 2022</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
          </tr>
          <tr>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
          </tr>
          <tr>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
          </tr>
          <tr>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
          </tr>
          <tr>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
            <td>{rand()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
