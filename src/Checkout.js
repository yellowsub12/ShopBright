import React from 'react';
import "./Checkout.css";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { getBaskeTotal } from './reducer';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


function Checkout() {
  const [{ basket, user}, dispatch]=useStateValue();
  return (
    <section class="amazon-checkout container-fluid  " data-testid="checkout">

    <div className='checkout'>
    <div className='lefterr  col-md-4 '>

    <div>
        <h3>Hello {user?.email}!</h3>

        <h2 className="title mt-5 mb-5
        ">Your Shopping Basket</h2>
      <div class="checkoutcard">
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
    </div>

    <div className="lefter">
            <div class="py-4 d-flex justify-content-end cancelz ">
                <h6><a href="#">Cancel and return to website</a></h6>
            </div>
            <div class="lefter bg-light rounded d-flex flex-column">
                <div class="p-2 ml-3">
                    <h4>Cart Checkout</h4>
                </div>
                <div class="p-2 d-flex">
                    <div class="col-8">xContracted Price</div>
                    <div class="ml-auto">$0.00</div>
                </div>
                <div class="p-2 d-flex">
                    <div class="col-8">xAmount toward deductible</div>
                    <div class="ml-auto">$0.00</div>
                </div>
                <div class="p-2 d-flex">
                    <div class="col-8">xCoinsurance( 0% )</div>
                    <div class="ml-auto">+ $0.00</div>
                </div>
                <div class="p-2 d-flex">
                    <div class="col-8">xCopayment</div>
                    <div class="ml-auto">+ $0.00</div>
                </div>
                <div class="border-top px-4 mx-3"> </div>
                <div class="p-2 d-flex pt-3">
                    <div class="col-8">xMaximum out-of-pocket on Insurance Policy (not reached)</div>
                    <div class="ml-auto">$0.00</div>
                </div>
                <div class="p-2 d-flex">
                    <div class="col-8">Total before Taxes</div>
                    <div class="ml-auto">${getBaskeTotal(basket)} </div>
                </div>
                <div class="border-top px-4 mx-3"></div>
                <div class="p-2 d-flex pt-3">
                    <div class="col-8">Federal Tax</div>
                    <div class="ml-auto"><b>${(getBaskeTotal(basket)*0.05).toFixed(2)}</b></div>
                </div>
                <div class="p-2 d-flex">
                    <div class="col-8">Provincial Tax <span class="fa fa-question-circle text-secondary"></span></div>
                    <div class="ml-auto"><b>${(getBaskeTotal(basket)*0.09975).toFixed(2)}</b></div>
                </div>
                <div class="border-top px-4 mx-3"></div>
                <div class="p-2 d-flex pt-3">
                    <div class="col-8"> <Subtotal /></div>
                    <div class="ml-auto"><h3 class="green"> </h3></div>
                              </div>
            </div>

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
            <h3>
              Subtotal ({basket.length} items): <h2>{value}</h2>
            </h3>
          </>
        )}
        decimalScale={2}
        value={getBaskeTotal(basket)*1.14975} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
       <Link to="/payment"> <Button>Proceed to Checkout</Button></Link>
  </div>
}

export default Checkout