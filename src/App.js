import './App.css';
import React from 'react';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Footer from './footer';
import  {BrowserRouter as Router, Switch, Routes, Route} from "react-router-dom"
import Login from './Components/Login';
import Signup from './Components/Signup';
import ProtectedRoute from './Components/ProtectedRoute';
import { UserAuthContextProvider } from "./Context/UserAuthContext";

function App() {
  return (

    
<Router>


  
<div className="App">
  <UserAuthContextProvider>
  <Routes>
  <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    [<Header/>
                    <Home />
                    
                    <Footer/>]
                  </ProtectedRoute>
                }
              />




    <Route path="/checkout" element={[<Header/>, <Checkout />,<Footer />]} />
    <Route path="/Login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />

    <Route path="/" element={[<Header/>,<Home />,<Footer/>]}/>


  </Routes>
  </UserAuthContextProvider>

</div>

</Router>
  );
}

export default App;
