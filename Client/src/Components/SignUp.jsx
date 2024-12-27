import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import File from './file';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // פונקציה להרשמה
  const handleSignUp = async (e) => {
    e.preventDefault();

    const userData = { email, password, name };

    try {
      const response = await axios.post('http://localhost:3000/user/signup', userData);
      if (response.status === 201) {
        navigate("/login"); 
      }
    } catch (error) {
      console.error(error);
      alert("The email already exists, go login"); 
    }
  };


  return (
    <div>
      <File 
        email={email} 
        setEmail={setEmail} 
        password={password} 
        setPassword={setPassword} 
        name={name} 
        setName={setName} 
        isSignUp={true}  
        handleSubmit={handleSignUp}  
      />
    </div>
  );
};

export default SignUp;
