import React, {useEffect, useState} from 'react';
import CheckoutProduct from './CheckoutProduct.js';
import './PaymentZ.css';
import {useStateValue} from "./StateProvider";
import {db} from './firebase';
import {Link, useNavigate} from "react-router-dom";
import { getBaskeTotal } from './reducer';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from './stripe_payment/axios.js';


function PaymentZ() {
  
    const [{basket, user}, dispatch] = useStateValue();

    

    return (

    

<div class="container rounded bg-white" data-testid="payment">
    <div class="row d-flex justify-content-center pb-5">
        <div class="col-sm-5 col-md-5 ml-1">
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

        <div className="lefter" class="col-sm-3 col-md-4 offset-md-1 mobile">
            <div class="py-4 d-flex justify-content-end">
                <h6><a href="#">Cancel and return to website</a></h6>
            </div>
            <div class="bg-light rounded d-flex flex-column">
                <div class="p-2 ml-3">
                    <h4>Order Recap</h4>
                </div>
                <div class="p-2 d-flex">
                    <div class="col-8">Contracted Price</div>
                    <div class="ml-auto">$186.76</div>
                </div>
                <div class="p-2 d-flex">
                    <div class="col-8">Amount toward deductible</div>
                    <div class="ml-auto">$0.00</div>
                </div>
                <div class="p-2 d-flex">
                    <div class="col-8">Coinsurance( 0% )</div>
                    <div class="ml-auto">+ $0.00</div>
                </div>
                <div class="p-2 d-flex">
                    <div class="col-8">Copayment</div>
                    <div class="ml-auto">+ $40.00</div>
                </div>
                <div class="border-top px-4 mx-3"> </div>
                <div class="p-2 d-flex pt-3">
                    <div class="col-8">Total Deductible, Coinsurance, and Copay</div>
                    <div class="ml-auto">$40.00</div>
                </div>
                <div class="p-2 d-flex">
                    <div class="col-8">Maximum out-of-pocket on Insurance Policy (not reached)</div>
                    <div class="ml-auto">$6500.00</div>
                </div>
                <div class="border-top px-4 mx-3"></div>
                <div class="p-2 d-flex pt-3">
                    <div class="col-8">Insurance Responsibility</div>
                    <div class="ml-auto"><b>$71.76</b></div>
                </div>
                <div class="p-2 d-flex">
                    <div class="col-8">Patient Balance <span class="fa fa-question-circle text-secondary"></span></div>
                    <div class="ml-auto"><b>$71.76</b></div>
                </div>
                <div class="border-top px-4 mx-3"></div>
                <div class="p-2 d-flex pt-3">
                    <div class="col-8"><b>Total</b></div>
                    <div class="ml-auto"><b class="green">$85.00</b></div>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default PaymentZ