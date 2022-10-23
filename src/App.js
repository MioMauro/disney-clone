import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { Route, Routes } from "react-router-dom";
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">    
  <Header />  
    <Routes> 
        <Route path="/" element={<Home/>} ></Route> 
        <Route path="/detail" element={<Detail/>} ></Route>
    </Routes> 
    </div>
  );
}

export default App;
