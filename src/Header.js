import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";


function Header() {
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
              <div class="col-lg-3 col-sm-4 col-md-4 col-5"> <a href="/" class="brand-wrap" data-abc="true">
              <Link to="/"><span class="logo">Amazon</span></Link> </a> </div>
              <div class="col-lg-4 col-xl-5 col-sm-8 col-md-4 d-none d-md-block">
                  <form action="#" class="search-wrap">
                      <div class="input-group w-100"> <input type="text" class="form-control search-form" placeholder="Search"/>
                          <div class="input-group-append"> <button class="btn btn-primary search-button" type="submit"> <i class="fa fa-search"></i> </button> </div>
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
          <form class="d-md-none my-2">
              <div class="input-group"> <input type="search" name="search" class="form-control" placeholder="Search" required=""/>
                  <div class="input-group-append"> <button type="submit" class="btn btn-secondary"> <i class="fa fa-search"></i> </button> </div>
              </div>
          </form> <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#dropdown6" aria-expanded="false"> <span class="navbar-toggler-icon"></span> </button>
          <div class="navbar-collapse collapse" id="dropdown6" >
              <ul class="navbar-nav mr-auto">
                  <li class="nav-item dropdown"> 
                      <a class="nav-link dropdown-toggle" href="" data-toggle="dropdown" data-abc="true" aria-expanded="false">Categories</a>
                      <div class="dropdown-menu"> 
                          <a class="dropdown-item" href="" data-abc="true">Category 1</a>
                          <a class="dropdown-item" href="" data-abc="true">Category 2</a>
                          <a class="dropdown-item" href="" data-abc="true">Category 3</a>
                          <a class="dropdown-item" href="" data-abc="true">Category 4</a> </div>
                  </li>
                  <li class="nav-item"> <a class="nav-link" href="" data-abc="true">Browse</a> </li>
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