import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaCat } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/home';
import Pets from './pages/pets';
import Contact from './pages/contact';
import Footer from './pages/footer';
import Resume from './pages/resume';

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
              <Link to="/pets">
                <FaCat />
              </Link>
            </li>
            <li className='li-border'>
              <Link to="/resume">Resume</Link>
            </li>
            <li className="li-border">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Footer/>} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/resume" element={<Resume/>} />        
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
    
  );
};

export default App;
