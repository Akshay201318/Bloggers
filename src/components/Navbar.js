import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/create-post">Create Post</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
