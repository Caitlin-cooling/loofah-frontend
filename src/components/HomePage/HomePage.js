import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

const HomePage = () => {
  return(
    <div className="homepage">
      <h1>Loofah</h1>
      <button>
        <Link to="/skills">See the available skills</Link>
      </button>
      <button>
        <Link to="/playlist">See your playlist</Link>
      </button>
    </div>
  );
};

export default HomePage;