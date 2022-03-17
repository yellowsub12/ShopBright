import React from 'react'
import "./goods.css"
import {useStateValue} from "./StateProvider"

//add goods Component
function Goods({id, title, image, price, rating, descr = ''}) {

    const [{basket}, dispatch] = useStateValue();

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
        <div className='goods'>
            <div className="goods_image_box">
                <img src={image} className="goods_image" alt=""/>
            </div>
            <div className="goods_descr">
                <div className="goods_info">
                    <p className='goods_title'>{title}</p>
                    <p className='goods_price'><small>$</small><strong>{price}</strong></p>
                    <div className="goods_rating">
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p>⭐</p>
                            ))}
                    </div>
                </div>
                <div>
                    {descr}
                </div>
                <button onClick={addToBasket} className="goods_button">Add to Basket</button>
            </div>
        </div>
    )
}

export default Goods