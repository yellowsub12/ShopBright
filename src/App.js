import './App.css';
import {auth} from "./firebase";
import React, { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { useStateValue } from './StateProvider';
import Footer from './footer';
import  {BrowserRouter as Router, Switch, Routes, Route}
from "react-router-dom"
import Login from './Login';

function App() {
  const [{},dispatch] = useStateValue();
  useEffect(()=>{auth.onAuthStateChanged(authUser => {
    console.log(authUser, " logged in!");

    if (authUser){
      dispatch({
        type: 'SET_USER',
        user: authUser
      })

    } else {
      dispatch({
        type: 'SET_USER',
        user: null
      })
    }
  })},[])
  
  return (

    
<Router>


  
<div className="App">
  <Routes>




    <Route path="/checkout" element={[<Header/>, <Checkout />,<Footer />]} />
    <Route path="/Login" element={[ <Login />]} />


    <Route path="/" element={[<Header/>,<Home />,<Footer />]} />



  </Routes>

</div>

</Router>
  );
}

export default App;
