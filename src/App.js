import './App.css';
import React from 'react';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Footer from './footer';
import  {BrowserRouter as Router, Switch, Routes, Route}
from "react-router-dom"
import Login from './Login';

function App() {
  return (

    
<Router>


  
<div className="App">
  <Routes>




    <Route path="/checkout" element={[<Header/>, <Checkout />,<Footer />]} />
    <Route path="/Login" element={[<Header/>, <Login />]} />


    <Route path="/" element={[<Header/>,<Home />,<Footer />]} />



  </Routes>

</div>

</Router>
  );
}

export default App;
