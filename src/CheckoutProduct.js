import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";
import Button from 'react-bootstrap/Button';


function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (

        <div class="card mb-4 " >
  <img class="card-img-top " src={image} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text"></p>
    <p className="price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
                {!hideButton  && (
                    <Button onClick={removeFromBasket}>Remove from Basket</Button>
                )}
  </div>



        </div>
    )
}

export default CheckoutProduct