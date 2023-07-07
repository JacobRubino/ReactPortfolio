import React from "react";
import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return(
    <div className="footerContainer">
      <div className="footerElements">
        <div className="footerContent">
          <Link to={'/contact'}>
            Contact
          </Link>
        </div>
        <div className="footerContent">
          <a href="https://github.com/JacobRubino" target="_blank" rel="noreferrer">
              github
            </a>
          </div>
          <div className="footerContent last-item">
          <a href='https://www.instagram.com/jacob_ru_/' target="_blank" rel="noreferrer">
              Instagram
            </a>
        </div>
      </div>
    </div>
  )
}

export default Footer