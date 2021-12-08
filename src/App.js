import React from 'react'
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Navbar } from './components/Navbar';

function App() {
  return (
   <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={ <Home /> }/>
      <Route path="/login" element={ <Login /> }/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
