import React, { useState, useEffect } from 'react';import './Order.css';
import './Order.css';
import { useStateValue } from "./StateProvider";
import Order from './Order'
import { db } from './firebase';

function Orders() {
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

export default Orders