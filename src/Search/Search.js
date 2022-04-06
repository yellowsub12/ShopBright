import React, {useState, useEffect} from "react";
import {useLocation, Link} from "react-router-dom";
import { db } from '../firebase'
import Button from 'react-bootstrap/Button';

import './Search.css'
import CategoryProducts from "../Components/CategoryProducts";

const Search = () => {

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();
    let search = query.get("name");
    console.log("search ",search)

    const [loading, setLoading] = useState(true);
    const [Products, setProducts] = useState([]);
  
    useEffect(() => {
      const getProductsFromFirebase = [];
      const subscriber = db
        .collection("Products")
        .where('title', '>=', search)
        .where('title', '<=', search+ '\uf8ff')
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
        <div className="Search center">
            <div className="GoBackButton">
            <Link to="/">
           <Button variant="primary" size="lg">Go Back</Button>
           </Link>
           </div>
            {Object.keys(Products).length === 0 ? (
                <h1 className="h2_class">No products found! The search term '{query.get("name")}' did not produce any results!</h1>
            ) : (
                <div>
    <h2 class="announcement">You've Searched For</h2>
            <br/>
            <div class="col-md-9 card_rowA">
                        <div class="row rowz ">
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
                    </div>

</div>
            )
            
            
            
                        }  
        </div>
    
    )}

export default Search