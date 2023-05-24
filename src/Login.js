import React, { useState } from 'react';

const Login = () => {
  const [isCreator, setIsCreator] = useState(true);

  const handleToggle = () => {
    setIsCreator(!isCreator);
  };

  const handleLogin = () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (isCreator) {
      // Creator login logic
      if (username && password) {
        // Perform creator login validation or API call
        console.log(`Creator login: username - ${username}, password - ${password}`);
      } else {
        // Handle empty username or password
        console.log('Please enter both username and password for creator login');
      }
    } else {
      // Capital Provider login logic
      if (username && password) {
        // Perform capital provider login validation or API call
        console.log(`Capital provider login: username - ${username}, password - ${password}`);
      } else {
        // Handle empty username or password
        console.log('Please enter both username and password for capital provider login');
      }
    }
  };

  return (
    <div>
      <div>
        <span>Creator</span>
        <label className="switch">
          <input type="checkbox" checked={isCreator} onChange={handleToggle} />
          <span className="slider round"></span>
        </label>
        <span>Capital Provider</span>
      </div>
      <input type="text" id="username" placeholder="Username" />
      <input type="password" id="password" placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

