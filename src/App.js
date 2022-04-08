import './App.css';
import {auth} from "./firebase";
import React, { useEffect } from 'react';
import Header from './NavBar/Header';
import Home from './Home';
import Checkout from './Checkout';
import Payment from './stripe_payment/Payment';
import { useStateValue } from './StateProvider';
import Footer from './Footer/footer';
import Orders from './Orders';
import  {BrowserRouter as Router, Switch, Routes, Route} from "react-router-dom"
import Login from './Login';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Detail from './Detail';
import Category from './Category/Category';
import FirebaseProducts from './FirebaseProducts/FirebaseProducts'
import Prod from './FirebaseProducts/ProductsContext.js';
import Search from './Search/Search';


const promise = loadStripe (
  "pk_test_51KZkqRJEK8PYFT8TH3vNr8DR0fI34i9wYBsxnD5XsiXbLI9QMYN1yMC8mb1DgHo19ek2aAj5DnxNx68QZz0hD7bm00w410iw7f"
);

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
    <Route path="/payment" element={[<Header/>, <Elements stripe={promise}><Payment/> </Elements>, <Footer />]} />
    <Route path="/orders" element={[<Header/>, <Orders/>, <Footer />]} />
    <Route path="/detail" element={[<Header/>,<Detail />,<Footer />]} />
    <Route path="/category" element={[<Header/>,<Category />,<Footer />]} />
    <Route path="/products" element={[<Header/>,<FirebaseProducts />,<Footer />]} />
    <Route path="/search" element={[<Header/>,<Search/>,<Footer />]} />



    <Route path="/" element={[<Header/>,<Home />,<Footer />]} />



  </Routes>

</div>

</Router>
  );
}

export default App;
