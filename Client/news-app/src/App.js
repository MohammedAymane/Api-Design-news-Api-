
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/home';
import Login from './components/login';
import Admin from './components/admin'
function App() {
  const url  = "http://localhost:20699"
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <div>
        <Switch>
         
          <Route path= {url+"/home"}>
          <Home/>
          </Route>
          <Route path= {url + "/admin"}>
          <Admin/>
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
      </header>
    </div>
  );
}

export default App;
