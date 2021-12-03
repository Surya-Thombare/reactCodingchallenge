import React from 'react';
import { Route, Redirect, Routes } from "react-router-dom";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import HomePage from "./components/HomePage";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/login' element={<LoginForm/>} />
        <Route exact path='/signup' element={<SignUpForm/>} />   
      </Routes>
    </div>
  );
}

export default App;
