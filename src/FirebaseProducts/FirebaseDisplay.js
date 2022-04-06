import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import {useStateValue} from "../StateProvider"
import Products from '../Products';
import './FirebaseProducts';
import {db} from '../firebase'
import './ProductsContext'


function FirebaseDisplay({product}) {
    const [loading, setLoading] = useState(true);
    const [Products, setProducts] = useState([]);
    const [{basket}, dispatch] = useStateValue(Products);
    const [data, setData] = useState(Products);

    const deleteProduct = () => {
        db
            .collection('Products')
            .doc(product.uid)
            .delete()
            .then(() => {
                console.log("Document deleted successfully" + order.id);
            }).catch((err) => {
                console.log("An error occured while deleting the document");
                console.log("Error : " + err.message);
            });}

    
    
  
    return (
         <div class="col-md-4 mb-4 card_row" >
                                 <div class="card">
                                 <img onClick={jumpToDetail} src={image} class="card-img-top" alt="..."/>
                                 <div class="card-body">
                                     <h5 class="card-title" onClick={jumpToDetail}>{title}</h5>
                                     <p onClick={jumpToDetail}><strong>${price}</strong></p>
                                     <p class="card-text">{descr}</p>
                                     <p class="card-text">Category : {category}</p>
                                     <div class="rating" onClick={jumpToDetail}>
                                        {Array(rating)
                                        .fill()
                                        .map((_, i) => (
                                         <p>⭐</p>
                                            ))}
                                    </div>
                                     <Button variant="primary" onClick={deleteProduct}>Remove Product</Button>
                                    </div>
                                    </div>
                                    </div>



  )
}

export default FirebaseProducts