import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./StateProvider";
import { getBaskeTotal } from './reducer';
import { Link } from "react-router-dom";

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
        value={(getBaskeTotal(basket)*1.15)} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
       <Link to="/payment"> <button>Proceed to Checkout</button></Link>
  </div>
}

export default Subtotal