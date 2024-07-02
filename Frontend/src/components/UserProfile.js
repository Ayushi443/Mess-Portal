// UserProfile.js
import React, { useState, useEffect } from 'react';
import { decodeToken } from "react-jwt";
import axios from 'axios';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      console.log(token);
      // Decode the token to get user information
      const decodedToken = decodeToken(token);
      
      const userId = decodedToken.user_id; 
      console.log(userId);
 
      axios.get(`http://127.0.0.1:8000/api/users/${userId}/`)
        .then(response => {
          setUser(response.data);
          console.log(user);
        })
        .catch(error => {
          console.error("There was an error fetching the user data!", error);
        });
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>User Profile</h1>
      <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
        <p><strong>Name:</strong> {user.first_name} {user.last_name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Roll Number:</strong> {user.rollno}</p> 
      </div>
    </div>
  );
};

export default UserProfile;
