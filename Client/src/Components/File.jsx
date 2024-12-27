import React from 'react';
import { useNavigate } from 'react-router-dom';

const File = ({ email, setEmail, password, setPassword, name, setName, isSignUp, handleSubmit}) => {
  
  const navigate = useNavigate();
  const handleSwitch = () => {
    if (isSignUp) {
      navigate('/login'); // מעבר לעמוד ההתחברות
    } else {
      navigate('/'); // מעבר לעמוד ההרשמה
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h1>{isSignUp ? 'Sign Up' : 'Log In'}</h1>
        {isSignUp && (
          <div>
            <label>Name:</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
        )}
        <div>
          <br />
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <br />
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <br />
        <button className='sendButtons' type="submit">{isSignUp ? 'Sign Up' : 'Log In'}</button>
        <label className='textButtons'>{isSignUp ? " Already have an account ? " : " Don't have an account ? "}</label>
        <button className='buttonSwitch' type='button' onClick={handleSwitch}>
        {isSignUp ? "Go login" : "Go sign up"}
        </button>
      </form>
    </div>
  );
};

export default File;
