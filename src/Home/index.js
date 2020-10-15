import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return(
    <div>
      <h1>Loofah</h1>
      <button>
        <Link to="/skills-by-category">See the available skills</Link>
      </button>
      <button>
        <Link to="/crafts">See the available crafts</Link>
      </button>
    </div>
  );
};

export default Home;