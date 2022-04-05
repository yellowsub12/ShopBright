import React, { useState,useEffect} from 'react'
import { db } from '../firebase'

import firebase from '../firebase';
import 'bootstrap/dist/css/bootstrap.min.css';

class ProductsContext extends React.Component {
    constructor(props) {
        
        super(props);
       
        this.state = {Products : []}
        }
        
      componentDidMount() {
       
       
         
          firebase.database().ref("Products").on("value", snapshot => {
            let productz = [];
            snapshot.forEach(snap => {
                productz.push(snap.val());
            });
            this.setState({ Products: productz });
          });
        
        
     }
      
      render(){
      return (
        <div className="MainDiv">
          <div class="text-center bg-sky">
              <h3>How to show firebase data in reactjs?</h3>
          </div>
        
          <div className="container">
              <table id="example" class="display table">
                <thead class="thead-dark">
                    <tr>
                        <th>FirstName</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Mobile</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.Products.map(data => {
                    
                    return (
                        <tr>     
                        <td>{data.descr}</td>
                        <td>{data.title}</td>
                        <td>{data.price}</td>
                        <td>{data.rating}</td>
                        </tr>
                        
                    );
                   
                    })}
            
                   
                </tbody>
                
             </table>
              
         </div>
        </div>
      );
    }
    }
    export default ProductsContext;