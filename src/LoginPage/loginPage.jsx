import axios from 'axios';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import '../LoginPage/loginPage.css'
const LoginForm = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Create a data object with the form values
    const data = {
      user_id: userId,
      password: password
    };

    // Send a POST request using Axios
    axios.post('https://vwvvop9sv4.execute-api.ap-south-1.amazonaws.com/dev/verifylogin', data)
      .then(response => {
        // Handle the response if needed
        if(response.data==="Login Successful")
        {
          navigate(`/dashboard/${userId}`);
        }
        else
        {
          window.alert(response);
        }
      })
      .catch(error => {
        // Handle the error if needed
        window.alert(error);
      });
  };

  const handleEmailChange = (e) => {
    setUserId(e.target.value); // Update the email state
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value); // Update the password state
  };

  return (
    <>
      <div className="logindiv">
        <form onSubmit={handleFormSubmit} id='loginform'>
          <div className='userInput'>
          <input type="text" placeholder="User Id" id="user_id" required value={userId} onChange={handleEmailChange}/><br /></div>

          <div>
          <input type="password" placeholder="password" id="password" required value={password} onChange={handlePasswordChange}/><br /></div>
          <button id="loginbutton" type="submit">Log In</button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
