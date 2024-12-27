import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import File from './file';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // פונקציה להתחברות
  const handleLogIn = async (e) => {
    e.preventDefault();

    const userData = { email, password };

    try {
      const response = await axios.post('http://localhost:3000/user/login', userData);
      if (response.status === 201) {
        navigate('/home'); // אם ההתחברות הצליחה, נווט לדף הבית
      }
    } catch (error) {
      error.log(error);
      alert('Email or password is incorrect or user dose not exist');
    }
  };

  return (
    <div>
      <File 
        email={email} 
        setEmail={setEmail} 
        password={password} 
        setPassword={setPassword} 
        isSignUp={false}  // משתנה להבדיל בין הרשמה להתחברות
        handleSubmit={handleLogIn}  // שליחת טופס ההתחברות
      />
    </div>
  );
};

export default Login;
