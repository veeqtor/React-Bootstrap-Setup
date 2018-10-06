import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => (
  <div>
    <h1>M-tracker</h1>
    <p>Maintenance/repairs at your convenience</p>
    <br />
    <Link to="/register">
      Get started
    </Link>
  </div>
);

export default Homepage;