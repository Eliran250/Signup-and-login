import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const logOut = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/");
  }
  
  return (
    <div>
      <button className='logoutButton' onClick={logOut}>LogOut</button>
      <h1>Welcome home</h1>
    </div>
  )
}

export default Home