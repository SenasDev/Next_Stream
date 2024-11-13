// src/components/Landing.js
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import '../styles/landing.css';

function Landing() {
  return (
    <div className="landing">
      <header className="landing-header">
        <Link to="/index">
          <img src={logo} className="landing-logo" alt="logo" />
        </Link>
        <p>
          "Search for your Next Stream. Don't miss out!"
        </p>
      </header>
    </div>
  );
}

export default Landing;
