import React, {useEffect, useState} from "react";
import "./Header.css";
import { Link, useNavigate} from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import Button from 'react-bootstrap/Button';


function Header() {
    const [search, setSearch]= useState()
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search?name=${search}`);
        setSearch("");

    }
  const handleAuthentication = () => {
      if (user) {
          auth.signOut();
      }
  }
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className='header'>
        <section class="header-main border-bottom">
      <div class="container-fluid">
          <div class="row align-items-center">
              <div class="col-lg-3 col-sm-4 col-md-5 col-5"> <a href="/" class="brand-wrap" data-abc="true">
              <Link to="/"><span class="logo"><img src="../imgs/Logo2.png" class="ShopLogo" /></span></Link> </a> </div>
              <div class="col-lg-4 col-xl-5 col-sm-8 col-md-4 d-none d-md-block">
                  <form class="search-wrap"  onSubmit={handleSubmit}>
                      <div class="input-group w-100"> <input type="text" class="form-control search-form inputField" placeholder="Search products..." onChange={(e) => setSearch(e.target.value)} value={search}/>
                          <div class="input-group-append"> <button class="btn-primary search-button" type="submit"> <i class="fa fa-search"></i> </button> </div>
                      </div>
                  </form>
              </div>
              <div class="col-lg-5 col-xl-4 col-sm-8 col-md-4 col-7">
                  <div class="d-flex justify-content-end">
                  <Link to="/orders"><a data-abc="true" class="nav-link widget-header">Hello {!user ? 'Guest' : user.email}</a></Link>
                  <Link to="/Login"><a data-abc="true" class="nav-link widget-header" >{user ? <Link to="/"><div onClick={handleAuthentication}>Sign Out</div></Link> : 'Sign In'}</a></Link>
                      <Link to="/checkout">
                          
                      <a class="nav-link nav-icons widget-header" data-abc="true">
                          My Cart
                          <img src="/imgs/shopping-cart (6).png"/>
                          <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
                          </a></Link>
              </div>
          </div>
      </div>
      </div>
  </section>
  <nav class="navbar navbar-expand-md navbar-main border-bottom">
      <div class="container-fluid">
          <form class="d-md-none my-2" onSubmit={handleSubmit}>
               <input type="text" class="inputField" placeholder="Search products..."  onChange={(e) => setSearch(e.target.value)} value={search}/>
                  
          </form> <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#dropdown6" > <span class="navbar-toggler-icon"></span> </button>
          <div class="navbar-collapse collapse" id="dropdown6" >
              <ul class="navbar-nav mr-auto">
                  <li class="nav-item dropdown"> 
                  <Link to="/Category"><a class="nav-link dropdown-toggle"   >Categories</a></Link>
                      <div class="dropdown-menu"> 
                          <a class="dropdown-item" href="" data-abc="true">Category 1</a>
                          <a class="dropdown-item" href="" data-abc="true">Category 2</a>
                          <a class="dropdown-item" href="" data-abc="true">Category 3</a>
                          <a class="dropdown-item" href="" data-abc="true">Category 4</a> </div>
                  </li>
                  <Link to="/Category"><li class="nav-item"> <a class="nav-link" href="" data-abc="true">Browse</a> </li></Link>
                  <li class="nav-item"> <a class="nav-link" href="" data-abc="true">Gift Cards</a> </li>
                  <li class="nav-item"> <a class="nav-link" href="" data-abc="true">Trending</a> </li>
                  <li class="nav-item"> <a class="nav-link" href="" data-abc="true">Support</a> </li>
              </ul>
          </div>
      </div>
  </nav>
    </div>
  )
}

export default Header