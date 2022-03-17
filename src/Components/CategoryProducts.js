import React, {useState} from 'react';

import {useStateValue} from "../StateProvider"
import Products from '../Products';
import Button from 'react-bootstrap/Button';
import './Category.css';


function CategoryProducts({id, title, price, image, rating, category, descr = ''}) {
  
    const [{basket}, dispatch] = useStateValue();
    const [data, setData] = useState(Products);

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

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
                category: category,
                descr: descr
            },
        });
    };
  
    return (
         <div class="col-md-4 mb-4" key={id}>
                                 <div class="card">
                                 <img onClick={jumpToDetail} src={image} class="card-img-top" alt="..."/>
                                 <div class="card-body">
                                     <h5 class="card-title" onClick={jumpToDetail}>{title}</h5>
                                     <p onClick={jumpToDetail}><strong>${price}</strong></p>
                                     <p class="card-text">{descr}</p>
                                     <div class="rating" onClick={jumpToDetail}>
                                        {Array(rating)
                                        .fill()
                                        .map((_, i) => (
                                         <p>⭐</p>
                                            ))}
                                    </div>
                                     <Button variant="primary" onClick={addToBasket}>Add to Basket</Button>
                                    </div>
                                    </div>
                                    </div>



  )
}

export default CategoryProducts