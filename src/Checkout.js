import React from 'react';
import "./Checkout.css";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { getBaskeTotal } from './reducer';
import { Link } from "react-router-dom";

function Checkout() {
  const [{ basket, user}, dispatch]=useStateValue();
  return (
    <section class="amazon-checkout">

    <div className='checkout'>
    <div className='left'>

    <div>
        <h3>Hello {user?.email}!</h3>

        <h2 className="title">Your Shopping Basket</h2>

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

    <div class="right">
        <Subtotal />

    </div>
    </div>
    </section>
  )
}

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();  return <div class="subtotal">
     <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBaskeTotal(basket)} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
       <Link to="/payment"> <button>Proceed to Checkout</button></Link>
  </div>
}

export default Checkout