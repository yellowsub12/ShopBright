import React, {useEffect, useState} from 'react';
import CheckoutProduct from '../CheckoutProduct.js';
import './Payment.css';
import {useStateValue} from "../StateProvider";
import CurrencyFormat from "react-currency-format";
import {db} from '../firebase';
import {Link, useNavigate} from "react-router-dom";
import { getBaskeTotal } from '../reducer';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from './axios.js';




function Payment() {



const [{basket, user}, dispatch] = useStateValue();
const stripe = useStripe();
const history = useNavigate();
const [clientSecret, setClientSecret]=useState(true);

useEffect(() => {
    const getClientSecret = async () => {
        const response = await axios({
            method: 'post',
            url: `/payments/create?total=${getBaskeTotal(basket) * 100}`
        });
        setClientSecret(response.data.clientSecret)
    }

    getClientSecret();
}, [basket])
const elements = useElements();
const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, 
        {payment_method :{
            card: elements.getElement(CardElement)
        }}).then(({paymentIntent})=> {
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })
            setSucceeded(true);
            setError(null);
            setProcessing(false);
            dispatch({
                type: 'EMPTY_BASKET'
            })
            history('/orders');
        }) ;
}
const handleChange = async (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");

}

const [error, setError] = useState(null);
const [succeeded, setSucceeded] = useState(false);
const [processing, setProcessing] = useState("");
const [disabled, setDisabled] = useState(true);



  return (
      <div className='payment'>
          <div className='payment_container'>
              <h1>
                  Checkout (
                      <Link to="/checkout">{basket?.length} items</Link>
                  )
              </h1>
              <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery Address</h3>
                        </div>
                    <div className='payment_address'>
                        <p>{user?.email}</p>
                        <p>1234 Jarry Est</p>
                        <p>Montreal, CA</p>
                        </div>
                  </div>

            
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Review Items and Delivery</h3>
                        </div>
                    <div className='payment_items'>
                        {basket.map(item => (
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

                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Payment Method</h3>
                        </div>
                        <div class="payment_details">
                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange}/>
                                <div class="payment_priceContainer">
                              <CurrencyFormat
                                  renderText={(value) => (
                                      <>
                                          <h3>
                                              Order Total {value}
                                          </h3>
                                      </>
                                  )}
                                  decimalScale={2}
                                  value={getBaskeTotal(basket)}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                  prefix={"$"}
                              />
                              <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing...</p> : 'Buy Now!'}</span>
                              </button>
                                    </div>
                            </form>
                            </div>

                  </div>
            
            </div>
          
          </div>
  )
}

export default Payment