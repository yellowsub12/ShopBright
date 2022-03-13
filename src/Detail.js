import React, {Component} from 'react';
import "./Home.css";
import "./Detail.css";
import Goods from './Goods';


//add detail page ,use goods Component
function detail() {
    // read data from sessionStorage and render
    let data = JSON.parse(window.sessionStorage.getItem("goods"));

  return (
    <div className="home">

        <div id="container">

        

    <div className='home_container'>
    <div className="home_rowz">
    <div className="home_row">
        <Goods
            id={data.id}
            title={data.title}
            price={data.price}
            image={data.image}
            rating={data.rating}
            descr={data.descr}
            />
    </div>
    </div>
    <div className="home_rowz_comment">
        <div className="review_item">
            <div className="review_left">
                <div>12/24/2015</div>
                <div><p>⭐⭐⭐</p></div>
            </div>
            <div className="review-right">
                <div><b>wfpbx</b></div>
                <div>aqypegpte vplbnlcgbb xzaoaivvboau ofgzgyymogmm dpsdgzd lzjvdfyzibwh eoevmrjxl ikbbfgcvk vna pftdxp ewk vdbupnu ecd scfjlgcjd </div>
            </div>
        </div>
        <div className="review_item">
            <div className="review_left">
                <div>12/24/2015</div>
                <div><p>⭐⭐⭐</p></div>
            </div>
            <div className="review-right">
                <div><b>wfpbx</b></div>
                <div>aqypegpte vplbnlcgbb xzaoaivvboau ofgzgyymogmm dpsdgzd lzjvdfyzibwh eoevmrjxl ikbbfgcvk vna pftdxp ewk vdbupnu ecd scfjlgcjd </div>
            </div>
        </div>
    </div>
    </div>
        




</div>
    </div>
  )
}

export default detail