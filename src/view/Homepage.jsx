import React from 'react';
import logo from '../assets/React+Bootstrap.png';

const Homepage = () => (
  <div className="container">
    <div className="row justify-content-center align-items-center">
      <div className="col-sm-12 col-md-8 header">
        <div className="text-center">
          <img className="img-fluid" src={logo} alt="React with Bootstrap" />
        </div>
        <p className="text-white text-center">
          {'Welcome to '}
          <span className="react">React</span>
          {' with '}
          <span className="bootstrap">Bootstrap</span>
          <br />
        </p>
        <a
          href="https://github.com/veeqtor/React-Bootstrap-Setup/blob/master/README.md"
          className="btn btn-outline-light btn-lg btn-custom"
          target="blank"
        >
          View doc
        </a>
      </div>
    </div>
  </div>
);

export default Homepage;
