import React, { useState } from 'react';

const RegistrationPage = () => {
  const [publicName, setPublicName] = useState('');
  const [email, setEmail] = useState('');
  const [industry, setIndustry] = useState('');
  const [currentFunding, setCurrentFunding] = useState('');
  const [university, setUniversity] = useState(' ')

  const handleRegistration = () => {
    // Perform registration logic
    if (publicName && email && industry && currentFunding) {
      // Validation or API call for registration
      console.log(`Registration successful! `);
    } else {
      console.log('Please fill in all required fields for registration');
    }
  };

  return (
    <div>
      <h2>Registration Page</h2>
      <input type="text" value={publicName} onChange={(e) => setPublicName(e.target.value)} placeholder=" Public Name" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="text" value={industry} onChange={(e) => setIndustry(e.target.value)} placeholder="Industry" />
      <input type="text" value={currentFunding} onChange={(e) => setCurrentFunding(e.target.value)} placeholder="Funding Received" />
      <input type="text" value={university} onChange={(e) => setUniversity(e.target.value)} placeholder="University Attending" />
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
};

export default RegistrationPage;