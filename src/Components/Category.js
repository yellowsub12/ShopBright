import React, { useState,useEffect} from 'react'
import './Category.css';

import CategoryProducts from './CategoryProducts';
import { db } from '../firebase'



function Category() {
    const [loading, setLoading] = useState(true);
    const [Products, setProducts] = useState([]);
    const [sortedData, setSortedData] = useState([])
    const [sort, setSort] = useState(false);
    const handleReset = () => {
        setSort(false)
    }
    const handleChange = (e) => {
        const sortedData = [];
        setSort(true)
        const subscriber = db
        .collection("Products")
        .where('category', '==', `${e.target.value}`)
        .onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            sortedData.push({
              ...doc.data(), //spread operator
              key: doc.id, // `id` given to us by Firebase
            });
          });
          setSortedData(sortedData)
          setLoading(false);
        });
        return () => subscriber();
    };
    useEffect(() => {
      const getProductsFromFirebase = [];
      const subscriber = db
        .collection("Products")
        .onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            getProductsFromFirebase.push({
              ...doc.data(), //spread operator
              key: doc.id, // `id` given to us by Firebase
            });
          });
          setProducts(getProductsFromFirebase);
          setLoading(false);
        });
    
        

      // return cleanup function
      return () => subscriber();
    }, [loading]); // empty dependencies array => useEffect only called once
  
    if (loading) {
      return <h1>loading firebase data...</h1>;
    }
    

    
    return (
        <div class="Category">
            
        <div className="container-fluid mx-2 ">
            <div className="row mt-5 mx-2">
                <div className="col-md-3">


                    <div class="list-group" id="list-tab" role="tablist">
  <a class="list-group-item list-group-item-action active" id="list-home-list" onChange={handleChange} data-bs-toggle="list" href="#list-home" role="tab" value="Food" aria-controls="list-home">Men</a>
  <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile" onClick={()=>filterResult('Women')}>Women</a>
  <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile" onClick={()=>filterResult('Children')}>Children</a>
  <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile" onClick={()=>filterResult('Electronics')}>Electronics</a>
  <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile" onClick={()=>filterResult('Fashion')}>Fashion</a>
  <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages" onClick={handleReset}>All</a>
</div>
<div>
        <select className="dropdown" name="colValue" onChange={handleChange}>
            <option>Please Select A Category</option>
            <option value="Men">Men</option>
        </select>



</div>

                </div>
                {!sort && ( <div class="col-md-9 card_row">
                    <div class="row rowz">
                    {Products.map(item=>(
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
                    </div>)  }
                    {sort && ( <div class="col-md-9 card_row">
                    <div class="row rowz">
                    {sortedData.map(item=>(
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
                    </div>)  }
            
            </div></div></div>)}

export default Category