import React, { useState, useEffect } from 'react';import './Orders.css';
import { useStateValue } from "./StateProvider";
import { db } from './firebase';
import CheckoutProduct from "./CheckoutProduct.js";
import CurrencyFormat from "react-currency-format";
import moment from "moment";

function Order({ order }) {
  return (
      <div class="order">
          <h2>Order</h2>
          <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
          <p class="order_id">
              Order ID : {order.id}
              </p>
              {order.data.basket?.map(item => (
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order_total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}/>   
        </div>
    
  )
}

function Order_History() {
    const [orders, setOrders] = useState([]);
    const [{ basket, user }, dispatch] = useStateValue();    
    useEffect(()=>{
        if(user){
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created','desc')
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc=>({
                    //this stores in an array
                    id: doc.id,
                    //this stores in a data key
                    data: doc.data()
                }))))
            )}
        else{
                setOrders([])
            }
    },[user]) 


    
        return (
    <div className="orders">
        <h1>Your Orders</h1>
        <div className='orders_order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
  )
}

export default Order_History