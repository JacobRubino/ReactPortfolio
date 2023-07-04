import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaCat } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//pages
import Home from './pages/home';
import Pets from './pages/pets';
import Contact from './pages/contact';

//images

const App = () => {
  return (
    <Router>
      <div className="header">
        <h1>Jacob's Portfolio</h1>
        <nav className="menu" style={{ float: 'right' }}>
          <ul>
            <li className="firstli">
              <Link to="/">Home</Link>
            </li>
            <li className="li-border">
              <Link to={{ pathname: 'https://github.com/JacobRubino' }} target="_blank">
                github
              </Link>
            </li>
            <li className="li-border">
              <Link to={{ pathname: 'https://www.instagram.com/jacob_ru_/' }} target="_blank">
                Instagram
              </Link>
            </li>
            <li className="li-border">
              <Link to="/pets">
                <FaCat />
              </Link>
            </li>
            <li className="li-border">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
