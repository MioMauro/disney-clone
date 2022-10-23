import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
// eslint-disable-next-line 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">   
  <Router>
  <Header />  
    <Routes>            
        <Route 
          path="/detail" element={<Detail/>} >          
        </Route>
        <Route 
          path="/home" element={<Home/>} >          
        </Route>      
    </Routes> 
    </Router>       
    </div>
  );
}

export default App;
