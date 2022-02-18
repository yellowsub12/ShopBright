import './App.css';
import React from 'react';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import  {BrowserRouter as Router, Switch, Routes, Route}
from "react-router-dom"
import Login from './Login';

function App() {
  return (

    
<Router>


  
<div className="App">
  <Routes>




    <Route path="/checkout" element={[<Header/>, <Checkout />]} />
    <Route path="/Login" element={[<Header/>, <Login />]} />


    <Route path="/" element={[<Header/>,<Home />]} />



  </Routes>

</div>

</Router>
  );
}

export default App;
