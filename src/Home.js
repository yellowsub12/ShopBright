import React from 'react';
import "./Home.css";
import Product from './Product';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";



function Home() {
  const handleAuthentication = () => {
      if (user) {
          auth.signOut();
      }
  }
  const [{ basket, user }, dispatch] = useStateValue();
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
        title='Toys'
        price={29.99}
        image ="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2021/img/Consumables/XCM_CUTTLE_1362996_1867338_CA_379x304_1X_en_CA._SY304_CB641157495_.jpg"
        rating = {3}
        descr = "Make use of the toys in structured group activities."
        />
        <Product 
        id="1342"
        title='Watch'
        price={49.99}
        image ="https://m.media-amazon.com/images/I/41sK3jjPlaL._AC_SY200_.jpg"
        rating = {5}
        descr="Use the built-in Amazon Alexa to get quick news and information, view the weather, set timers and alarm clocks, control your smart home device and other information (third-party applications may be required; Amazon Alexa cannot provide it in all countries)"
        />
        <Product 
        id="13137"
        title='Shoes'
        price={59.99}
        image ="https://images-na.ssl-images-amazon.com/images/G/15/GW/Dashboard/XCM_Manual_1198132_977323_ca_dex_dashboard_cards_379x304_1573283685._SY304_CB427434586_.jpg"
        rating = {5}
        descr="
        Waterproof leather
Breathable waterproof membrane
Removable cushion insert insole
Mini-lug rubber outsole
Cambrelle moisture wicking lining"
        />



    </div>
    <div className="home_row">
    <Product 
        id="1235337"
        title='Workout Equipment'
        price={69.99}
        image ="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2022/img/Home/XCM_CUTTLE_1409913_2192710_CA_CUTTLE_379x304_1X_en_CA._SY304_CB628419738_.jpg"
        rating = {5}
        descr="FUNCTIONALITY: RIMSPORTS' ankle straps can be used for cable machines and Glutes Exercise equipment and can help firm up your glutes workout These ankle cuffs are effective for exercise machines for legs, especially if you use these leg straps for exercises such as inner and outer thigh contractions, leg extensions, cable kickbacks, hip abduction, and cable lunges, to improve your leg game!"
        />
        <Product 
        id="1253337"
        title='Glasses'
        price={29.99}
        image ="https://m.media-amazon.com/images/I/211e2kNcJkL._AC_SY200_.jpg"
        rating = {5}
        />
        <Product 
        id="16234337"
        title='Door Thingy'
        price={19.99}
        image ="https://m.media-amazon.com/images/I/216G5eCaEyL._AC_SY200_.jpg"
        rating = {4}
        />
        <Product 
        id="13373457"
        title='TV'
        price={99.99}
        image ="https://m.media-amazon.com/images/G/01/kindle/journeys/YzQ1ODEyNTMt/YzQ1ODEyNTMt-OWZmOTU3NDIt-w210._AC_SY200_.jpeg"
        rating = {3}
        />

    </div>
    <div className="home_row">
    <Product 
        id="12432337"
        title='PS5'
        price={999.99}
        image ="https://i5.walmartimages.com/asr/fd596ed4-bf03-4ecb-a3b0-7a9c0067df83.bb8f535c7677cebdd4010741c6476d3a.png"
        rating = {5}
        />
        <Product 
        id="1333627"
        title='The iPod Pro!'
        price={49.99}
        image ="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Apple_airpods_pro.jpg/800px-Apple_airpods_pro.jpg"
        rating = {5}
        />
      
</div>
    </div>
    </div>
        <div class="foot-sign-in"> 
        <div id="container">

          
            <div call-to-action></div>
                 <div class="sign-in-title">
                <div>
                See personalized recommendations
            </div>
            <button class=" button button1" onClick= {()=>window.location.href="http://localhost:5000/#/login"} width="50px"><strong>Sign in</strong></button>

            <div>
            Login for Admin!            </div>
        </div>


        </div>
        </div>

        
       

</div>
    </div>
  )
}

export default Home