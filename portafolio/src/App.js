import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Router} from "react-router-dom"
import navbar from './conponent/navbar';
import login from './conponent/login';
import principal from './conponent/principal';


function App() {
  return (
    <div className="App">
      <Router>
        <navbar/>
      </Router>
    </div>
  );
}

export default App;
