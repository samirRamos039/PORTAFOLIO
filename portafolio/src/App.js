import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Router} from "react-router-dom"
import Navbar from './conponent/Navbar';
import Login from './conponent/Login';
import Principal from './conponent/Principal';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
      </BrowserRouter>
    </div>
  );
}

export default App;
