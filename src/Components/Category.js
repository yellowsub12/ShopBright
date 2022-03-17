import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Products from '../Products';
import './Category.css';
import Product from '../Product';
import {useStateValue} from "../StateProvider"
import CategoryProducts from './CategoryProducts';


function Category({id, title, image, price, rating, descr = ''}) {
    const [data, setData] = useState(Products);
    const filterResult=(categoryItem)=>{const result=Products.filter((currentData)=>{return currentData.category===categoryItem;
    }); setData(result);}

    
    return (
        <div class="Category">
            
            <div className="container-fluid mx-2">
                <div className="row mt-5 mx-2">
                    <div className="col-md-3">


                        <div class="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action active" id="list-home-list" onClick={()=>filterResult('Men')} data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Men</a>
      <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile" onClick={()=>filterResult('Women')}>Women</a>
      <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile" onClick={()=>filterResult('Children')}>Children</a>
      <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile" onClick={()=>filterResult('Electronics')}>Electronics</a>
      <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile" onClick={()=>filterResult('Fashion')}>Fashion</a>
      <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages" onClick={()=>setData(Products)}>All</a>
    </div>
    

                    </div>

                    <div class="col-md-9">
                        <div class="row">
                        {data.map(item=>(
                        <CategoryProducts
                        id= {item.id}
                        title= {item.title}
                        image= {item.image}
                        price= {item.price}
                        rating= {item.rating}
                        descr={item.descr}
        />
        ))}
                
                        </div>
                    </div>
                </div>
            </div>


        </div>)
}

export default Category