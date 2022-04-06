import React, { useState,useEffect} from 'react'
import './Category.css';

import CategoryProducts from './CategoryProducts';
import { db } from '../firebase'
import { Form } from "react-bootstrap";


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


                    
<div>
<Form.Control as="select" custom onChangeclassName="dropdown" name="colValue" onChange={handleChange} active={handleReset} >
            <option onClick={handleReset}>Please Select A Category</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Children">Children</option>
            <option value="Electronics">Electronics</option>
            <option onClick={handleReset}>All</option>


        </Form.Control>



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