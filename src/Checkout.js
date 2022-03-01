import React from 'react';
import "./Checkout.css";
import "./Subtotal.css";
import Subtotal from './Subtotal.js';
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket}, dispatch]=useStateValue();
  return (
    <section class="amazon-checkout">

    <div className='checkout'>
    <div className='checkout_left'>
        <img src="https://libertyhousenh.org/wp-content/uploads/2020/10/Amazon-smile-web-banner.jpg" alt="" class="checkout_ad"/>

    <div>
        <h2 className="checkout_title">Your Shopping Basket</h2>

        {basket.map(item=>(
        <CheckoutProduct
        id= {item.id}
        title= {item.title}
        image= {item.image}
        price= {item.price}
        rating= {item.rating}
        />
        ))}


    </div>
    </div>

    <div class="checkout_right">
        <Subtotal />


    </div>

    </div>


    </section>
  )
}

export default Checkout