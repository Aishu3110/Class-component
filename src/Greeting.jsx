// This code should allow users to input their name and see a greeting message.
// Find the mistake and make the greeting message display correctly.
import React, { useState } from 'react';
function Greeting() {
  const [name, setName] = useState('');
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Hello, {name}!</p>
    </div>
  );
}

export default Greeting;