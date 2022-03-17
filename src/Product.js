import React from 'react'
import "./Product.css"
import {useStateValue} from "./StateProvider"
import Button from 'react-bootstrap/Button';
import Products from './Products';
function Product({id, title, image, price, rating, descr = ''}) {

  const [{basket}, dispatch] = useStateValue(Products);

  const addToBasket = () => {
      dispatch({
          type: 'ADD_TO_BASKET',
          item: {
              id: id,
              title: title,
              image: image,
              price: price,
              rating: rating,
          },
      });
  };

  const jumpToDetail = () => {
      //save data to session storage，and enter detail page
      window.sessionStorage.setItem("goods", JSON.stringify({
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
          descr: descr,
      }))
      window.location.href = './detail';
  }

  return (
      <div className='product'>
          <div class="info" >
              <p className='title' onClick={jumpToDetail}>{title}</p>
              <p className='price' onClick={jumpToDetail}><small>$</small><strong>{price}</strong></p>
              <div class="rating" onClick={jumpToDetail}>
                  {Array(rating)
                      .fill()
                      .map((_, i) => (
                          <p>⭐</p>
                      ))}
              </div>
          </div>
          <img src={image} alt="" onClick={jumpToDetail}/>
          <Button variant="primary" onClick={addToBasket}>Add to Basket</Button>
      </div>
  )
}


export default Product