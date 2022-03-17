import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='checkoutProduct'>
            <img className='image' src={image} />
            <div className='info'>
                <p className='title'>{title}</p>
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
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}


            </div>
        </div>
    )
}

export default CheckoutProduct