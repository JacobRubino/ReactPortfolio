import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import { FaCat } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";



const App = () => {
  return (
    <Router>     
      <header>
        <h1>Jacob's Portfolio</h1>
        <nav className="menu">
          <ul>
            <li className="firstli">
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to={{ pathname: 'https://github.com/JacobRubino' }} target="_blank">github</Link>
            </li>
            <li>
              <Link to={{ pathname: 'https://www.instagram.com/jacob_ru_/' }} target='_blank'>Instagram</Link>
            </li>
            <li>
              <Link to='/pets'>
                <FaCat />
              </Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
    {/* <Route path='/' exact><Home /></Route>

    <Route path='/pets' exact><Pets /></Route>

    <Route path='/contact' exact><Contact /></Route> */}
    </Routes>
  </Router>
  
  
  );
};
 
export default App;
