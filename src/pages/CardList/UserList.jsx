import React, { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  // Fetch users on component mount
  useEffect(() => {
    fetch('https://neobazaar-ee1c625c2e80.herokuapp.com/api/v1/users')
     .then(response => response.json())
     .then(data => setUsers(data))
     .catch(error => console.error('Error fetching users:', error));
  }, []); // Empty dependency array means this effect runs once on mount

  // Log users to console for debugging
  useEffect(() => {
    console.log(users);
  }, [users]); // This effect logs users whenever they change

  return (
    <div>
      {/* Display users here */}
      {users.map(user => (
        <div key={user.id}>
          <p>Email: {user.email}</p>
          <p>Username: {user.username}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
