import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return(
    <div>
      <h1>Loofah</h1>
      <button>
        <Link to="/skills">See the available skills</Link>
      </button>
    </div>
  );
};

export default HomePage;