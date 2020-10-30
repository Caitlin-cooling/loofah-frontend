import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return(
    <div>
      <h1>Loofah</h1>
      <button>
        <Link to="/skills-by-category">See the available skills by category</Link>
      </button>
      <button>
        <Link to="/skills-by-craft">See the available skills by craft</Link>
      </button>
      <button>
        <Link to="/skills-by-grade">See the available skills by grade</Link>
      </button>
    </div>
  );
};

export default Home;