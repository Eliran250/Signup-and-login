import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Home from './Pages/Home';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
