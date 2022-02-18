import React from 'react';
import "./Home.css";
import Product from './Product';



function home() {
  return (
    <div className="home">
        <div id="container">

    <div class="carousel">

    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://m.media-amazon.com/images/I/71OXCC4xYmL._SX3000_.jpg" class="d-block w-100"  alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://m.media-amazon.com/images/I/6138dCMwqPL._SX3000_.jpg" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://m.media-amazon.com/images/I/61PbR8v+C4L._SX3000_.jpg" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" class="d-block w-100" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <div className='home_container'>
    <div className="home_rowz">
    <div className="home_row">
        <Product 
        id="1337"
        title='The iPod Pro!'
        price={19.99}
        image ="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Apple_airpods_pro.jpg/800px-Apple_airpods_pro.jpg"
        rating = {5}
        />
        <Product 
        id="1342"
        title='The iPod Pro!'
        price={19.99}
        image ="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Apple_airpods_pro.jpg/800px-Apple_airpods_pro.jpg"
        rating = {5}
        />
        <Product 
        id="13137"
        title='The iPod Pro!'
        price={19.99}
        image ="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Apple_airpods_pro.jpg/800px-Apple_airpods_pro.jpg"
        rating = {5}
        />



    </div>
    <div className="home_row">
    <Product 
        id="1235337"
        title='The iPod Pro!'
        price={19.99}
        image ="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Apple_airpods_pro.jpg/800px-Apple_airpods_pro.jpg"
        rating = {5}
        />
        <Product 
        id="1253337"
        title='The iPod Pro!'
        price={19.99}
        image ="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Apple_airpods_pro.jpg/800px-Apple_airpods_pro.jpg"
        rating = {5}
        />
        <Product 
        id="16234337"
        title='The iPod Pro!'
        price={19.99}
        image ="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Apple_airpods_pro.jpg/800px-Apple_airpods_pro.jpg"
        rating = {5}
        />
        <Product 
        id="13373457"
        title='The iPod Pro!'
        price={19.99}
        image ="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Apple_airpods_pro.jpg/800px-Apple_airpods_pro.jpg"
        rating = {5}
        />

    </div>
    <div className="home_row">
    <Product 
        id="12432337"
        title='The iPod Pro!'
        price={19.99}
        image ="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Apple_airpods_pro.jpg/800px-Apple_airpods_pro.jpg"
        rating = {5}
        />
        <Product 
        id="1333627"
        title='The iPod Pro!'
        price={19.99}
        image ="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Apple_airpods_pro.jpg/800px-Apple_airpods_pro.jpg"
        rating = {5}
        />
</div>
    </div>
    </div>
    <div className='footer'>
            <footer class="footer">
        <div class="foot-sign-in"> 

            <div call-to-action></div>
            <div class="sign-in-title">
                <div>
                See personalized recommendations
            </div>
            <button class=" button button1" width="50px"><strong>Sign in</strong></button>

            <div>
                New customer? Start here.
            </div>
        </div>
        </div>
        
      </footer>
</div>
</div>
    </div>
  )
}

export default home