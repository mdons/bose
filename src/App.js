import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";

const Home = () => (
  <div>
    <h2> Home </h2>
  </div>
);

const City = () => (
  <div>
    <ul>
      <li>San Francisco</li>
      <li>Istanbul</li>
      <li>Tokyo</li>
    </ul>
  </div>
);

const Courses = ({ match }) => (
  <div>
    <ul>
      <li>
        <Link to={`${match.url}/technology`}>Technology</Link>
      </li>
      <li>
        <Link to={`${match.url}/business`}>Business</Link>
      </li>
      <li>
        <Link to={`${match.url}/economics`}>Economics</Link>
      </li>
    </ul>

    <Route
      exact
      path={`${match.path}/:course`}
      render={({ match }) => <div> This is {match.params.course} </div>}
    />
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/cities">Cities</Link>
          </li>
        </ul>

        <Route path="/" exact component={Home} />
        <Route path="/courses" component={Courses} />
        <Route path="/cities" component={City} />
      </div>
    );
  }
}

export default App;
