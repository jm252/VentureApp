import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div class="home">
      <h1 class="heading" >The Capital Bridge </h1>
      <div class="homeButtons">
        <Link to="/RegistrationI" class='button'> I'm an Innovator </Link>
        <Link to="/RegistrationI" class='button'> I'm a Capital Source </Link>
      </div>
    </div>
  );
};

export default Home;
